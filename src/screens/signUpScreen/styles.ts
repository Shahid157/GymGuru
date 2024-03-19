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
    marginBottom: 5,
  },
  trailText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'grey',
    marginBottom: 5,
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
    flex: 1,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  spreationLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spreationLineTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allows text to wrap to the next line
    marginHorizontal: 27,
    marginTop: 10,
  },
  backToLogin: {
    color: Colors.primaryColors.pink,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  asCoach: {
    color: Colors.primaryColors.pink,
  },
  haveAnAccount: {
    color: Colors.primaryColors.black,
  },
  termsRedText: {
    color: Colors.primaryColors.pink,
  },
  termsBlackText: {
    color: 'grey',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    flexDirection: 'row',
  },
  logoText: {
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  eyeIconContainer: {
    marginTop: '87%',
    padding: 8,
    right: 18,
    bottom: 17,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  passwordInput: {
    backgroundColor: Colors.primaryColors.white,
    marginVertical: 10,
    color: Colors.primaryColors.black,
    padding: 15,
    marginHorizontal: 15,
    borderColor: 'grey',
    borderWidth: 1,
    flex: 1,
    marginRight: -25,
  },
  passwordWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
    marginLeft: 18,
  },
});
