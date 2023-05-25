import Component from './Quiz';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as selectors from '../../selectors';

const mapStateToProps = state => ({
    isUserReadyToStartQuiz:  selectors.getIsUserReadyToStartQuiz(state),
});

const mapDispatchToProps = dispatch => ({
    setIsReadyForGame: payload => dispatch(actions.setIsReadyForGame(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);