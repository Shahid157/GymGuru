import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    height: windowHeight / 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius:12,
    backgroundColor: config.secondaryColor,
   
  },
  imageView: {
    height: windowHeight / 11,
    width: windowWidth / 6.5,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    padding: 5,
  },
  nameText: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: Colors.primaryColors.black,
    width: windowWidth / 2,
  },
  statusText: {
    color: Colors.primaryColors.grey,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  icon: {marginRight: 10},
});
