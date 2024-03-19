import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {paddingVertical: 12, backgroundColor: config.secondaryColor},
  image: {
    width: windowWidth / 1.2,
    height: windowHeight / 3,
    borderRadius: 12,
  },
  doubleiImage: {
    width: windowWidth / 2.3,
    height: windowHeight / 3,
    borderRadius: 12,
  },
  imageContainer: {
    alignItems: 'center',
    paddingRight: 15,
    marginLeft: 15,
  },
  dateContainer: {position: 'absolute', bottom: 8, left: 6},
  dateOnImage: {
    color: Colors.primaryColors.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 8,
    marginHorizontal: 16,
    borderColor: Colors.primaryColors.pink,
  },
  buttonText: {
    color: Colors.primaryColors.white,
  },
  date: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.primaryColors.secondaryGrey,
  },
  smallImage: {
    width: windowWidth / 4.3,
    height: windowHeight / 10.5,
    borderRadius: 12,
    marginRight: 11,
    borderColor: Colors.primaryColors.pink,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
  },
  icon: {
    marginLeft: 10,
  },
  doubleiImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateOnLeftImage: {
    color: Colors.primaryColors.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    position: 'absolute',
    bottom: 11,
    left: 10,
  },
  dateOnRightImage: {
    color: Colors.primaryColors.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    position: 'absolute',
    bottom: 11,
    left: 17,
  },
});
