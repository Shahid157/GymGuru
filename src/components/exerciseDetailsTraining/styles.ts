import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.primaryColor,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 4,
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  bodyPart: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
    marginLeft: 8,
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
});
