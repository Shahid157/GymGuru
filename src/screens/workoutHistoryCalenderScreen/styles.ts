import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  timeSheetContainer: {padding: 15},
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryColors.white,
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    height: 34,
    borderRadius: 8,
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
  },
  time: {alignSelf: 'center', color: Colors.primaryColors.black},
});
