import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import {LoginScreenPropsTypes} from './types';
import Button from '../../components/button/button';
import auth from '@react-native-firebase/auth';
import {Colors} from '../../utils/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SocialButtons from '../../components/socialButtons/socialButtons';
import {Images} from '../../assets/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
import {loginUser} from '../../redux/toolkit/AuthSlicer';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector, RootState} from '@reduxjs/toolkit';
import {APIHANDLER} from '../../services/apiConfig';

const LoginScreen: FC<LoginScreenPropsTypes> = ({navigation}) => {
  const dispatch: any = useDispatch();
  const [loading, setLoading] = useState(false);
  const selectAuth = (state: RootState) => state.auth;
  const selectUserInfo = createSelector(selectAuth, auth => auth?.userInfo);
  const user = useSelector(selectUserInfo);

  const onPressSignup = () => {
    navigation.navigate(strings.signup_screen);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const serializeUserInfo = (user: any): any => {
    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
    };
  };

  const loginPress = async (data: any) => {
    try {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(data?.email, data?.password)
        .then(({user}) => {
          user.getIdToken(true).then(token => {
            dispatch(
              loginUser({
                userInfo: serializeUserInfo(user),
                userActive: true,
                firebaseToken: token,
              }),
            );
            setLoading(false);
            navigation.navigate(strings.bottomtab);
          });
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
  const onPressForgotPassword = () => {
    navigation.navigate(strings.foget_screen);
  };
  const onPressGoogle = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '976540699776-dm3d4nfq7v63fskoumt8qd0l8jh1d23c.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices();

      try {
        const userInfo = await GoogleSignin.signIn();
        const {idToken} = userInfo;

        const {accessToken} = await GoogleSignin.getTokens();

        const googleCredential = auth.GoogleAuthProvider.credential(
          idToken,
          accessToken,
        );

        auth()
          .signInWithCredential(googleCredential)
          .then(userCredential => {
            const user = userCredential.user;

            user.getIdToken(true).then(token => {
              console.log('Login With Google', token);
              APIHANDLER('GET', 'WhoAmI', null, token)
                .then(value => {
                  console.log('Value from api', value?.data);
                })

                .catch(e => {
                  console.log('error in api');
                });
              dispatch(
                loginUser({
                  userInfo: serializeUserInfo(user),
                  userActive: true,
                  firebaseToken: token,
                }),
              );

              navigation.navigate(strings.bottomtab);
            });
          })
          .catch(error => {
            console.error('Firebase sign-in error:', error);
          });
      } catch (e) {
        console.log('error', e);
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (user?.userActive) {
        navigation.navigate(strings.bottomtab);
      }
    });

    return unsubscribe;
  }, [navigation, user?.userActive]);
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
          <Text style={styles.textStyle}>{strings.login_note}</Text>
          <View style={styles.socialButtons}>
            {Platform.OS === strings.ios && (
              <SocialButtons
                logo={Images.appleIcon}
                text={strings.loginapple}
              />
            )}

            <SocialButtons
              logo={Images.googleIcon}
              text={strings.logingoogle}
              onPress={onPressGoogle}
            />
          </View>
          <View style={styles.spreationLine}>
            <View style={styles.line}></View>
            <View style={styles.or}>
              <Text style={styles.orText}>or</Text>
            </View>
            <View style={styles.line}></View>
          </View>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              loginPress(values);
              actions.resetForm();
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
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor={Colors.primaryColors.secondaryGrey}
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  activeOpacity={strings.buttonOpacity}
                  isLoading={loading}
                  onPress={() => {
                    if (values.email && values.password) {
                      handleSubmit();
                    }
                  }}
                  style={[
                    styles.buttonStyle,

                    {
                      backgroundColor:
                        values.email && values.password ? 'black' : '#d3d3d3',
                    },
                  ]}
                  textStyle={[
                    styles.buttonText,

                    {
                      color: values.email && values.password ? 'white' : 'grey',
                    },
                  ]}
                  buttonText={strings.login_btn_text}
                />
              </View>
            )}
          </Formik>
          <TouchableOpacity
            style={styles.spreationLine}
            onPress={() => onPressForgotPassword()}>
            <Text style={styles.forgotPassword}>{strings.forgetpassword}</Text>
          </TouchableOpacity>
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
export default LoginScreen;
