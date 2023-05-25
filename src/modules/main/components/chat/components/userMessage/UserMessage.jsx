import React from 'react';
import {
    Name,
    Message,
    MessageName,
    MessageInfo,
    MessageContainer,
    UserMessageWrapper,
} from './styledComponents';
import CustomImage from '../../../../../customComponents/customImage/CustomImage';

const UserMessage = ({
                         // eslint-disable-next-line react/prop-types
                         userId,
                         // eslint-disable-next-line react/prop-types
                         message,
                     }) => {
    return (
        <UserMessageWrapper
            isSelfMessage={userId === message.uid}
        >
            <MessageInfo>
                <CustomImage
                    image={message.photoURL}
                    width={'30px'}
                    height={'30px'}
                    borderRadius={'50%'}
                />
                <MessageName>
                    <Name children={message.displayName}/>
                </MessageName>
            </MessageInfo>
            <MessageContainer>
                <Message children={message.text}/>
            </MessageContainer>
        </UserMessageWrapper>
    );
};

export default UserMessage;