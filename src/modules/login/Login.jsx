import React from 'react';
import {
    LoginWrapper,
    ButtonContainer,
} from './styledComponents';
import CustomButton from '../customComponents/customButton/CustomButton';
import googleImage from '../../assets/images/google.svg';

const Login = () => {
    return (
        <LoginWrapper>
            <ButtonContainer>
                <CustomButton
                    onClick={Login}
                    text={'Login with Google'}
                    image={googleImage}
                    callback={() => console.log('Click to login')}
                    borderColor={'yellow'}
                    isInversionTextColor
                >
                </CustomButton>
            </ButtonContainer>
        </LoginWrapper>
    )
};

export default Login;