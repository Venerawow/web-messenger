import { eventChannel } from 'redux-saga';
import * as fb from '../../firebase/init';
import * as actions from './actions';
import constants from '../../firebase/constants';

export function chatMessagesEventChannel() {
    const listener = eventChannel(
        emitter => {
            fb.firebase.firestore().collection(constants.MESSAGES).orderBy('createdAt')
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const messages = snapshot.docChanges().map( message => message.doc.data());

                    emitter(actions.setUserMessage(messages));
                });

            return () => fb.firebase.database().ref(constants.MESSAGES).off(listener);
        }
    );

    return listener;
}