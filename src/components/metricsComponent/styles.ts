import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
  },
  updateDate: {
    paddingTop: 8,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.grey,
  },
  activityCount: {
    marginRight: 2,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: Colors.primaryColors.pink,
  },
  activityUnit: {
    marginRight: 12,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: Colors.primaryColors.pink,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.white,
  },
  itemContainer: {
    backgroundColor: Colors.primaryColors.lightGrey,
    marginTop: 10,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
});
