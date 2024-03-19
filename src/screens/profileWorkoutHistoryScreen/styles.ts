import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

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
  workoutContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginBottom: 12,
  },
  workoutText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 15,
    paddingLeft: 15,
  },
  divider: {
    borderWidth: 0.6,
    marginTop: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  renderItem: {paddingVertical: 4},
  title: {
    paddingVertical: 5,
    color: Colors.primaryColors.secondaryGrey,
    paddingLeft: 8,
  },
  sectionList: {padding: 12},
});
