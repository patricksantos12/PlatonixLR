import React from 'react';
import { StatusBar } from 'expo-status-bar';



import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.png')}/>
                <PageTitle>Platonix</PageTitle>
                <SubTitle>Account Login</SubTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;