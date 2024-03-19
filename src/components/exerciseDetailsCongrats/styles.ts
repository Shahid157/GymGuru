import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: config.secondaryColor,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  historyText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.pink,
  },
  divider: {
    borderWidth: 0.6,
    marginTop: 12,
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  exerciseText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  bestSetText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
    marginRight: '21%',
  },
  itemBestSet: {
    marginRight: '3%',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  itemexercise: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  historyButton: {flexDirection: 'row', alignItems: 'center'},
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingHorizontal: 3,
  },
});
