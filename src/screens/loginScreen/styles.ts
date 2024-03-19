import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  textStyle: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    color: Colors.primaryColors.black,
    marginBottom: 10,
  },
  inputContainer: {
    padding: 7,
    // marginTop: '10%',
  },
  buttonStyle: {
    marginTop: 7,
    marginHorizontal: 20,
    backgroundColor: '#d3d3d3',
    borderColor: '#d3d3d3',
    marginBottom: 5,
  },

  input: {
    backgroundColor: Colors.primaryColors.white,
    marginVertical: 10,
    color: Colors.primaryColors.black,
    padding: 15,
    marginHorizontal: 15,
    borderColor: 'grey',
    borderWidth: 1,
  },
  socialButtons: {alignSelf: 'center', marginVertical: 5, width: 330, gap: 10},
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  line: {
    width: '30%',
    height: 1,
    backgroundColor: 'grey',
  },
  or: {
    marginHorizontal: 10,
    color: 'black',
  },
  orText: {
    color: 'black',
  },
  spreationLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    color: Colors.primaryColors.pink,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  asCoach: {
    color: Colors.primaryColors.pink,
    marginTop: 10,
  },
  haveAnAccount: {
    color: 'grey',
    marginTop: 10,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    flexDirection: 'row',
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  logoText: {
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  error: {
    color: 'red',
    marginLeft: 18,
  },
});
