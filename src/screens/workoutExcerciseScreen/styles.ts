import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';
import {windowWidth} from '../../utils/dimensions';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  divider: {
    borderWidth: 0.7,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 14,
    marginBottom: 10,
  },
  sheetHeadingText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: Colors.primaryColors.black,
  },
  sheetDesText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: Colors.primaryColors.grey,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetContainer: {paddingHorizontal: 16, paddingVertical: 20},
  modalContainer: {
    backgroundColor: Colors.primaryColors.white,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 11,
  },
  videoModal: {
    backgroundColor: config.primaryColor,
    flex: 1,
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
  addVideoNameText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    marginLeft: 11,
    color: Colors.primaryColors.grey,
    marginBottom: 2,
    alignSelf: 'center',
  },
  videoModalTouchContainer: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    borderColor: Colors.primaryColors.paleGrey,
    overflow: 'hidden',
  },
  uploadImageStyle: {height: '100%', width: '100%', borderRadius: 40},
  modal: {flex: 1, margin: 0},
  videoView: {flex: 1, backgroundColor: Colors.primaryColors.black},
  video: {width: '100%', height: '100%', alignSelf: 'center'},
  backText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    lineHeight: 36,
  },
  backButton: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    color: Colors.primaryColors.pink,
    marginLeft: '4%',
    marginTop: -8,
  },
  videoError: {
    color: Colors.primaryColors.pink,
    textAlign: 'center',
  },
});
