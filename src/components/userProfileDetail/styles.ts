import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {backgroundColor: config.secondaryColor},
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    lineHeight: 22,
    width: windowWidth / 1.7,
  },
  showView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColors.pink,
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 16,
  },
  hideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColors.grey300,
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 16,
  },
  showText: {
    color: Colors.primaryColors.white,
    fontWeight: '500',
    lineHeight: 15,
  },
  hideText: {
    color: Colors.primaryColors.black,
    fontWeight: '500',
    lineHeight: 19,
  },
  measureNumber: {
    fontSize: 26,
    color: Colors.primaryColors.pink,
    fontWeight: '600',
    lineHeight: 34,
  },
  userActivityText: {
    marginLeft: 7,
    fontSize: 25,
    color: Colors.primaryColors.black,
    fontWeight: '600',
    lineHeight: 34,
  },
  userActivityView: {flexDirection: 'row', alignItems: 'center'},
});
