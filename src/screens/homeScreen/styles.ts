import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {paddingHorizontal: 12},
  progressText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    color: Colors.primaryColors.black,
    paddingVertical: 10,
  },
  scrollViewContainer: {flex: 1},
  scrollViewContent: {height: '100%', width: '100%'},
  modal: {flex: 1, margin: 0},
  videoView: {flex: 1, backgroundColor: Colors.primaryColors.black},
  video: {width: '100%', height: '100%', alignSelf: 'center'},
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
  videoModal: {
    backgroundColor: config.primaryColor,
    flex: 1,
  },
});
