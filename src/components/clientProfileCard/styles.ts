import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: Colors.primaryColors.paleGrey,
    borderColor: Colors.primaryColors.paleGrey,
  },
  quantity: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    lineHeight: 28,
  },
  totalQuantity: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.secondaryGrey,
  },
  activityDetail: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 5,
    color: Colors.primaryColors.secondaryGrey,
  },
  slyash: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.secondaryGrey,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    marginLeft: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  itemContainer: {
    marginTop: 10,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    padding: 16,
  },
});
