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
  exercisesContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginBottom: 12,
  },
  exerciseText: {
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
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  itemContainer: {
    backgroundColor: Colors.primaryColors.lightGrey,
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  flatList: {
    paddingHorizontal: 12,
  },
  heading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.pink,
  },
  date: {
    color: Colors.primaryColors.grey,
    fontSize: 14,
    lineHeight: 20,
  },
  setsHeading: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
});
