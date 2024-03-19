import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingRight: 14,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    color: Colors.primaryColors.black,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
    width: windowWidth / 5,
  },
  bodyName: {
    color: Colors.primaryColors.secondaryGrey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    width: windowWidth / 5,
  },
  divider: {
    borderWidth: 0.5,
    paddingHorizontal: 3,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 8,
    borderColor: Colors.primaryColors.pink,
  },
  buttonText: {
    color: Colors.primaryColors.white,
  },
});
