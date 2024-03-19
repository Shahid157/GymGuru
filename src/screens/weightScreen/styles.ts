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
  chartContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
  },
  weightText: {
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
  weightListDivider: {
    borderWidth: 0.6,
    marginTop: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  weightListContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginBottom: 12,
  },
  weightListText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 15,
    paddingLeft: 15,
  },
  weightList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  date: {
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.primaryColors.black,
  },
  time: {
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.primaryColors.black,
    marginLeft: 3,
  },
  weight: {
    fontWeight: '600',
    lineHeight: 16,
    color: Colors.primaryColors.black,
  },
  datetime: {flexDirection: 'row'},
});
