import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import {LoginScreenPropsTypes} from './types';
import Button from '../../components/button/button';
import {Colors} from '../../utils/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
const ForgetPasswordScreen: FC<LoginScreenPropsTypes> = ({navigation}) => {
  useEffect(() => {}, []);

  const [email, setEmail] = useState('');

  const onPressBackToLogin = () => {
    navigation.navigate(strings.login_screen);
  };

  const onPressSignup = () => {
    navigation.navigate(strings.signup_screen);
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={{justifyContent: 'center', flex: 1}}>
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={styles.logo}>
            <Image
              source={Images.logoIcon}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>STRIDIST</Text>
          </View>
          <Text style={styles.textStyle}>{strings.forget_password_note}</Text>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              // Handle form submission logic here
              console.log(values);
              actions.resetForm(); // Reset form fields after submission
              // Add logic for resetting password
              // ...
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View style={styles.inputContainer}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholderTextColor={Colors.primaryColors.secondaryGrey}
                    placeholder="Email address"
                    style={styles.input}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                </View>
                <Button
                  activeOpacity={strings.buttonOpacity}
                  style={[
                    styles.buttonStyle,

                    {
                      backgroundColor: values.email ? 'black' : '#d3d3d3',
                    },
                  ]}
                  textStyle={[
                    styles.buttonText,

                    {
                      color: values.email ? 'white' : 'grey',
                    },
                  ]}
                  buttonText={strings.forget_pass_btn_text}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>

          {/* <TouchableOpacity
            style={styles.spreationLine}
            onPress={() => onPressBackToLogin()}>
            <Text style={styles.backToLogin}>{strings.back_to_login}</Text>
          </TouchableOpacity> */}
          <View style={styles.spreationLine}>
            <TouchableOpacity>
              <Text style={styles.haveAnAccount}>{strings.haveanaccount} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressSignup();
              }}>
              <Text style={styles.asCoach}>{strings.ascoach}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ForgetPasswordScreen;
