import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  wrapper_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_program: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {flex: 1, paddingHorizontal: 16},
});