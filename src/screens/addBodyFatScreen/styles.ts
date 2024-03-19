import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

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
  tabContainer: {
    backgroundColor: config.secondaryColor,
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  propText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.grey,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 8,
    marginHorizontal: 16,
    borderColor: Colors.primaryColors.pink,
    marginTop: 12,
  },
  buttonText: {
    color: Colors.primaryColors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
  input: {
    width: 32,
    color: Colors.primaryColors.black,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  modalContainer: {
    backgroundColor: Colors.primaryColors.white,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 11,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  propsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 7,
  },
  percent: {
    color: Colors.primaryColors.secondaryGrey,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
});
