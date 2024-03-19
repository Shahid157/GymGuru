import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingRight: 15,
    backgroundColor: config.secondaryColor,
  },
  contentContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  divider: {
    borderWidth: 0.8,
    marginTop: 12,
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  daysText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: Colors.primaryColors.secondaryGrey,
  },
  addText: {
    padding: 2,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: Colors.primaryColors.pink,
  },
  weightText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 20,
    color: Colors.primaryColors.black,
  },
  progressBar: {
    backgroundColor: Colors.primaryColors.paleGrey,
    borderColor: Colors.primaryColors.paleGrey,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 8,
    borderColor: Colors.primaryColors.pink,
  },
  buttonText: {
    color: Colors.primaryColors.white,
  },
});
