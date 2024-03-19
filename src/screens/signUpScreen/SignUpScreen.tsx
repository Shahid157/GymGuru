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
import auth from '@react-native-firebase/auth';

const SignUpScreen: FC<LoginScreenPropsTypes> = ({navigation}) => {
  useEffect(() => {}, []);

  const [showPassword, setShowPassword] = useState(false);

  const onPressBackToLogin = () => {
    navigation.navigate(strings.login_screen);
  };

  const signupPress = async (data: any) => {
    try {
      auth()
        .createUserWithEmailAndPassword(data?.email, data?.password)
        .then(({user}) => {
          console.log('User account created & signed in!');
          user.updateProfile({displayName: data?.fullName});
          navigation.navigate(strings.bottomtab);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (e) {
      console.log('error', e);
    }
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref('email'), null], 'Emails must match')
      .required('Confirm Email is required'),
    fullName: yup.string().required('Full Name is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.',
      ),
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView enableOnAndroid>
          <View style={styles.logo}>
            <Image
              source={Images.logoIcon}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>STRIDIST</Text>
          </View>
          <Text style={styles.textStyle}>{strings.signup_heading_text}</Text>
          <Text style={styles.trailText}>{strings.freeTrail}</Text>
          <View style={styles.spreationLine}>
            <TouchableOpacity>
              <Text style={styles.haveAnAccount}>{strings.alreadyaccount}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressBackToLogin()}>
              <Text style={styles.asCoach}>{strings.aslogin}</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{
              email: '',
              confirmEmail: '',
              fullName: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              signupPress(values);

              actions.resetForm(); // Reset form fields after submission
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
                    placeholder="Email address"
                    placeholderTextColor={Colors.primaryColors.secondaryGrey}
                    style={styles.input}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                  <TextInput
                    onChangeText={handleChange('confirmEmail')}
                    onBlur={handleBlur('confirmEmail')}
                    value={values.confirmEmail}
                    placeholderTextColor={Colors.primaryColors.secondaryGrey}
                    placeholder="Confirm email address"
                    style={styles.input}
                  />
                  {touched.confirmEmail && errors.confirmEmail && (
                    <Text style={styles.error}>{errors.confirmEmail}</Text>
                  )}
                  <TextInput
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                    placeholderTextColor={Colors.primaryColors.secondaryGrey}
                    placeholder="Full name"
                    style={styles.input}
                  />
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.error}>{errors.fullName}</Text>
                  )}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TextInput
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder="Password"
                      placeholderTextColor={Colors.primaryColors.secondaryGrey}
                      style={styles.passwordInput}
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                      style={styles.eyeIconContainer}
                      onPress={() => {
                        setShowPassword(pre => !pre);
                        console.log('click on icon');
                      }}>
                      {showPassword ? (
                        <Image
                          source={Images.eyeHideIcon}
                          style={styles.eyeIcon}
                          resizeMode="contain"
                        />
                      ) : (
                        <Image
                          source={Images.eyeIcon}
                          style={styles.eyeIcon}
                          resizeMode="contain"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <Button
                  activeOpacity={strings.buttonOpacity}
                  style={[
                    styles.buttonStyle,
                    {
                      backgroundColor:
                        values.email &&
                        values.password &&
                        values.confirmEmail &&
                        values.fullName
                          ? 'black'
                          : '#d3d3d3',
                    },
                  ]}
                  textStyle={[
                    styles.buttonText,
                    {
                      color:
                        values.email &&
                        values.password &&
                        values.confirmEmail &&
                        values.fullName
                          ? 'white'
                          : 'grey',
                    },
                  ]}
                  buttonText={strings.sign_up_btn_text}
                  onPress={() => {
                    if (
                      values.email &&
                      values.password &&
                      values.confirmEmail &&
                      values.fullName
                    ) {
                      handleSubmit();
                    }
                  }}
                />
              </View>
            )}
          </Formik>

          <View style={styles.spreationLineTerms}>
            <TouchableOpacity>
              <Text style={styles.termsBlackText}>
                {strings.signup_terms_text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsRedText}>
                {strings.signup_terms_text1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsBlackText}>
                {strings.signup_terms_text2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.termsRedText}>
                {strings.signup_terms_text3}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;
