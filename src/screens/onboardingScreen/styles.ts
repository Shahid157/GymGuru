import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  textStyle: {
    marginTop: '10%',
    textAlign: 'center',
    fontSize: 23,
    color: config.secondaryColor,
  },
  textStyleEnv: {
    marginTop: '10%',
    fontSize: 20,
    color: config.secondaryColor,
  },
  textStyleEnvVal: {
    marginTop: '2%',
    fontSize: 15,
    color: config.secondaryColor,
  },
  envContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  buttonStyle: {
    marginTop: '80%',
    marginLeft: 20,
    marginRight: 20,
  },
});
