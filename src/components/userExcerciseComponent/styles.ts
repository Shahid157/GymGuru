import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingHorizontal: 4,
    backgroundColor: config.secondaryColor,
  },
  contentContainer: {flexDirection: 'row'},
  image: {
    width: windowWidth / 4.5,
    height: windowHeight / 10,
    resizeMode: 'contain',
  },
  textContainer: {justifyContent: 'space-between', marginLeft: 12},
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    width: windowWidth / 2,
  },
  timeText: {
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.primaryColors.secondaryGrey,
  },
  bodyPartText: {
    lineHeight: 17,
    fontWeight: '500',
    color: Colors.primaryColors.pink,
    width: windowWidth / 2,
    letterSpacing: 4,
  },
  divider: {
    borderWidth: 0.5,
    paddingHorizontal: 3,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 15,
    marginBottom: 15,
  },
});
