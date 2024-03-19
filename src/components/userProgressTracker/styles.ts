import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  trackerTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    marginBottom: 22,
  },
  icon: {position: 'absolute', right: 22, top: 22},
  quantity: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: Colors.primaryColors.black,
  },
  totalQuantity: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.primaryColors.secondaryGrey,
  },
  progressBar: {
    backgroundColor: Colors.primaryColors.paleGrey,
    borderColor: Colors.primaryColors.paleGrey,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
