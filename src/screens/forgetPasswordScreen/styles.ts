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
  backToLogin: {
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
  logoText: {
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  error: {
    color: 'red',
    marginLeft: 18,
  },
});
