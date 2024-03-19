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
    padding: 12,
  },
  seekBarContainer: {
    backgroundColor: config.secondaryColor,
    padding: 10,
    borderRadius: 12,
  },
  seekBarText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  workoutDetail: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.black,
  },
  status: {
    color: Colors.primaryColors.pink,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
  },
  slider: {width: windowWidth / 1.15, height: 40, alignSelf: 'center'},
  modalContainer: {
    backgroundColor: Colors.primaryColors.white,
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 25,
  },
  completedText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    color: Colors.primaryColors.black,
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    color: Colors.primaryColors.grey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 30,
  },
  cancel: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  button: {
    width: windowWidth / 1.3,
    paddingVertical: 6,
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.white,
  },
  workoutDetailContainer: {
    backgroundColor: config.secondaryColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
  },
  workoutName: {
    color: Colors.primaryColors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
  },
  workoutTime: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.primaryColors.pink,
    lineHeight: 34,
  },
  trainingMin: {
    fontSize: 13,
    color: Colors.primaryColors.secondaryGrey,
    fontWeight: '500',
    lineHeight: 18,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 10,
    marginBottom: 12,
  },
  workoutDetailsContainer: {
    backgroundColor: config.secondaryColor,
    marginTop: 10,
    borderRadius: 12,
    padding: 12,
  },
  workoutDetailText: {
    color: Colors.primaryColors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  workoutDetailHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    lineHeight: 22,
  },
  detailText: {
    color: Colors.primaryColors.secondaryGrey,
    paddingVertical: 4,
  },
});
