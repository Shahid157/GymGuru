import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  photosContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});
