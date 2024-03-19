import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    color: config.secondaryColor,
  },
});
