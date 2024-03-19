import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 5,
    borderRadius: 12,
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    width: windowWidth / 1.8,
    color: Colors.primaryColors.black,
  },
});
