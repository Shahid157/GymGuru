import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  habitTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    width: windowWidth / 1.9,
  },
  textView: {
    marginLeft: 15,
    justifyContent: 'space-around',
    gap: 5,
  },
  description: {
    fontWeight: '500',
    color: Colors.primaryColors.grey200,
    lineHeight: 17,
  },
  detailText: {
    color: Colors.primaryColors.grey200,
    fontWeight: '400',
    lineHeight: 16,
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  viewWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionsContainer: {
    marginTop: '5%',
    marginRight: '5%',
    width: 100,
    height: 70,
  },
  iconStyle: {width: 18, height: 18},
});
