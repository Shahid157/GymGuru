import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {flex: 1, paddingHorizontal: 16},
  chartComponent: {paddingHorizontal: 5, width: windowWidth / 1.13},
  showView: {
    backgroundColor: Colors.primaryColors.pink,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 16,
  },
  showText: {
    color: Colors.primaryColors.white,
  },
  measureNumber: {
    fontSize: 26,
    color: Colors.primaryColors.pink,
    fontWeight: '600',
  },
  userActivityText: {
    marginLeft: 7,
    fontSize: 25,
    color: Colors.primaryColors.black,
    fontWeight: '600',
  },
  userActivityView: {flexDirection: 'row', alignItems: 'center'},
  accordionContainer: {
    backgroundColor: config.secondaryColor,
    padding: 15,
    borderRadius: 12,
    marginTop: 8,
  },
  modalContainer: {
    backgroundColor: config.primaryColor,
    flex: 1,
  },
  backText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    lineHeight: 36,
  },
  backButton: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {flex: 1, margin: 0},
  videoView: {flex: 1, backgroundColor: Colors.primaryColors.black},
  video: {width: '100%', height: '100%', alignSelf: 'center'},
  metricsText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: Colors.primaryColors.black,
  },
  metricsContainer: {padding: 12},
});
