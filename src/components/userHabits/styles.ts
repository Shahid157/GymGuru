import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
  },
  textView: {marginLeft: 12},
  description: {
    width: windowWidth / 1.9,
    fontWeight: '400',
    color: Colors.primaryColors.grey200,
    marginTop: 2,
    lineHeight: 17,
    marginBottom: 6,
  },
  detailText: {
    color: Colors.primaryColors.pink,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 4,
  },
});
