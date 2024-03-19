import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
  },
  contentContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  imageandDetailContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  imageContainer: {
    height: windowHeight / 10,
    width: windowWidth / 4.5,
    resizeMode: 'contain',
  },
  nameText: {
    color: Colors.primaryColors.black,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    width: windowWidth / 2.6,
  },
  cityText: {
    color: Colors.primaryColors.secondaryGrey,
    marginBottom: 8,
    lineHeight: 18,
    width: windowWidth / 2.4,
  },
  textContainer: {marginLeft: 12},
  emailText: {
    color: Colors.primaryColors.black,
    width: windowWidth / 2.4,
    lineHeight: 18,
  },
  statusText: {
    color: Colors.primaryColors.green,
    fontWeight: '500',
    marginLeft: 6,
    lineHeight: 18,
  },
  directionView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
  },
  userDetailText: {
    color: Colors.primaryColors.grey,
    fontWeight: '400',
    lineHeight: 14,
  },
  userInfo: {
    color: Colors.primaryColors.black,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28,
    paddingHorizontal: 4,
  },
  userInfoView: {flexDirection: 'row'},
  divider: {
    borderWidth: 0.5,
    paddingHorizontal: 3,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 10,
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColors.lighterGreen,
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 15,
  },
});
