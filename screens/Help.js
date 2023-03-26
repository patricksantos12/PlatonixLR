import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    PicturesLogo,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './../components/styles';

import {View} from 'react-native';

// colors
const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Help = () => {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
            <PicturesLogo resizeMode="cover" source={require('./../assets/img/Help.png')}/>
                <PageTitle>Need Help?</PageTitle>
                <Line />
                <SubTitle>Contact our Develpers</SubTitle>
                <Line />

                <Formik
                    initialValues={{serialnumber: '', password: '', enterName: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    
                    <PicturesLogo resizeMode="cover" source={require('./../assets/img/nicole.jpg')}/>
                    <PageTitle>Nicole Mercado</PageTitle>
                    <SubTitle>Info</SubTitle>
                    <Line />
                    <PicturesLogo resizeMode="cover" source={require('./../assets/img/albert.jpg')}/>
                    <PageTitle>Albert Tongol</PageTitle>
                    <SubTitle>Info</SubTitle>
                    <Line />
                    <PicturesLogo resizeMode="cover" source={require('./../assets/img/pat.jpg')}/>
                    <PageTitle>Patrick Santos</PageTitle>
                    <SubTitle>Info</SubTitle>
                    <Line />
                    <PageTitle>or</PageTitle>
                   
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Play a Demo Video</ButtonText>
                    </StyledButton>

                </StyledFormArea>
                )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
       
    );
};

export default Help;