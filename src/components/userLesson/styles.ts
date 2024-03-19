import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    paddingBottom: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.black,
    marginLeft: 15,
    marginTop: 8,
  },
  description: {
    fontWeight: '400',
    lineHeight: 17,
    color: Colors.primaryColors.grey200,
    width: windowWidth / 1.2,
    marginLeft: 15,
    marginTop: 2,
    marginBottom: 6,
  },
  detailText: {
    fontWeight: '500',
    color: Colors.primaryColors.pink,
    textAlign: 'center',
    lineHeight: 17,
    letterSpacing: 4,
  },
  detailView: {
    backgroundColor: Colors.primaryColors.lightPink,
    alignSelf: 'flex-start',
    marginLeft: 15,
    borderRadius: 8,
    padding: 10,
  },
  playButton: {
    position: 'absolute',
    top: '32%',
    zIndex: 1,
    alignSelf: 'center',
  },
  icon: {
    borderRadius: 11,
    alignSelf: 'center',
  },
});
