import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  flatList: {
    borderRadius: 12,
    backgroundColor: Colors.primaryColors.white,
    marginHorizontal: 16,
  },
  divider: {
    height: 0.5,
    backgroundColor: Colors.primaryColors.paleGrey,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 4,
  },
  signout: {color: Colors.primaryColors.pink},
  footerView: {
    marginHorizontal: 16,
    marginTop: 5,
  },
});
