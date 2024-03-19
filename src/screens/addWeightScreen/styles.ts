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
  lbIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slyash: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.primaryColors.paleGrey,
    marginRight: 4,
  },
  lbText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
    marginRight: 2,
  },
  input: {
    width: 32,
    color: Colors.primaryColors.black,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  selectUnit: {
    fontSize: 18,
    lineHeight: 22,
    color: Colors.primaryColors.black,
    fontWeight: '700',
    padding: 10,
  },
  unitView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 4,
    backgroundColor: Colors.primaryColors.lightGrey,
    padding: 18,
    borderRadius: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.primaryColors.secondaryGrey,
  },
  unitText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
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
});
