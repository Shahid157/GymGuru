import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {windowWidth} from '../../utils/dimensions';
import {Colors} from '../../utils/colors';

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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: windowWidth / 1.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stopWatchButton: {
    borderRadius: 7,
    width: '49%',
    margin: 2,
  },
  timerButton: {
    borderRadius: 7,
    width: '49%',
    margin: 2,
    backgroundColor: Colors.primaryColors.white,
  },
  stopWatchContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: Colors.primaryColors.grey300,
    justifyContent: 'space-between',
    marginVertical: 16,
    marginHorizontal: 6,
  },
  stopWatchText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.primaryColors.black,
    padding: 6,
  },
  backbtnText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: Colors.primaryColors.black,
    width: '90%',
  },
  image: {height: 228, width: 343, alignSelf: 'center'},
  pehragraphText: {
    marginTop: 16,
    color: Colors.primaryColors.grey,
    fontSize: 14,
  },
  instructionText: {
    color: Colors.primaryColors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    backgroundColor: Colors.primaryColors.white,
    marginVertical: 16,
    color: Colors.primaryColors.black,
    borderRadius: 12,
    padding: 12,
  },
  propsContainer: {
    backgroundColor: config.secondaryColor,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  propHeading: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.primaryColors.grey,
  },
  id: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.monochromeColors.grey2,
  },
  reps: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: Colors.monochromeColors.black,
  },
  addSetText: {
    textAlign: 'center',
    paddingTop: 8,
    color: Colors.primaryColors.pink,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  dotsHorizontal: {marginHorizontal: '12%'},
  propsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  propsInnerView: {
    backgroundColor: Colors.monochromeColors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  propsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  divider: {
    borderWidth: 0.7,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 15,
    marginBottom: 15,
  },
  propsDivider: {
    borderWidth: 0.7,
    borderColor: Colors.primaryColors.paleGrey,
    marginHorizontal: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginRight: 8,
  },
  squatText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  mapContainer: {
    borderRadius: 8,
    backgroundColor: Colors.monochromeColors.grey4,
    overflow: 'hidden',
  },
  scrollView: {
    padding: 4,
  },
  flex: {alignItems: 'center', flexDirection: 'row'},
  aboutContent: {flex: 1, paddingBottom: 5},
});
