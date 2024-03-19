import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center' },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: Colors.primaryColors.black,
  },
  description: {
    color: Colors.primaryColors.grey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    width: windowWidth / 1.3,
    marginTop: 2,
  },
});
