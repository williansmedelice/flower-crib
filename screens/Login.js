import React, { useState } from 'react';

// formik
import { Formik } from 'formik';

import {
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from './../components/styles';
import { TextInput, View, Text } from 'react-native';

//colors
const { darkLight, brand, green, primary, tertiary } = Colors;

// icon
import { Octicons, Fontisto } from '@expo/vector-icons';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <InnerContainer>
      <PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
      <PageTitle>Flower Crib</PageTitle>
      <SubTitle>Account Login</SubTitle>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormArea>
            <MyTextInput
              label="Email Address"
              placeholder="andyj@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              icon="mail"
            />
            <MyTextInput
              label="Password"
              placeholder="* * * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              icon="lock"
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <MsgBox>...</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Login</ButtonText>
            </StyledButton>
            <Line />
            <StyledButton google={true}>
              <Fontisto name="google" size={25} color={primary} />
              <ButtonText google={true}>Sign in with Google</ButtonText>
            </StyledButton>
            <ExtraView>
              <ExtraText>Don't have an account already? </ExtraText>
              <TextLink>
                <TextLinkContent>Signup</TextLinkContent>
              </TextLink>
            </ExtraView>
          </StyledFormArea>
        )}
      </Formik>
    </InnerContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Octicons name={hidePassword ? 'eye-closed' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;