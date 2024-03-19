import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';

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
  goalsContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
  },
  goalsText: {
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
    borderColor: Colors.primaryColors.paleGrey,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
    marginTop: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.white,
  },
  goalsContentContainer: {
    padding: 15,
  },
  modalContainer: {
    backgroundColor: Colors.primaryColors.white,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 11,
  },
  cancel: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  modalButton: {
    width: windowWidth / 1.3,
    paddingVertical: 6,
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
    alignSelf: 'center',
  },
  modalInput: {
    padding: 10,
    marginHorizontal: 10,
    borderColor: Colors.primaryColors.secondaryGrey,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    color: Colors.primaryColors.black,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.white,
  },
  addModalText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    marginLeft: 11,
    color: Colors.primaryColors.grey,
    marginBottom: 2,
  },
  error: {
    color: Colors.primaryColors.pink,
    marginLeft: '4%',
    marginTop: -8,
  },
});
