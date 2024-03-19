import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColors.lightGrey,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateContainer: {
    backgroundColor: Colors.primaryColors.paleGrey,
    borderRadius: 8,
    padding: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    textAlign: 'center',
  },
  days: {
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.primaryColors.black,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    marginBottom: 10,
  },
  contentContainer: {
    marginLeft: 8,
  },
});
