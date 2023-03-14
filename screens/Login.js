import React from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';

// icons
import {Octicons} from '@expo/vector-icons';


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
    Colors
} from './../components/styles';

import {View} from 'react-native';

// colors
const {brand, darkLight} = Colors;



const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.png')}/>
                <PageTitle>Platonix</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{serialnumber: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput 
                        label="Serial Number"
                        icon="number"
                        placeholder="Enter the Serial Number"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('serialnumber')}
                        onBlur={handleBlur('serialnumber')}
                        value={values.serialnumber}
                        

                    />

                        <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * * * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}

                    />


                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
        </View>
    )

}

export default Login;