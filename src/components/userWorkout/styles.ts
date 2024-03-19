import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: config.secondaryColor,
    borderRadius: 10,
  },
  contentContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  todayText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    lineHeight: 20,
  },
  detailText: {
    fontWeight: '500',
    color: Colors.primaryColors.pink,
    lineHeight: 18,
  },
  three: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.primaryColors.pink,
    lineHeight: 32,
  },
  workoutText: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    marginLeft: 5,
  },
  CardioTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginHorizontal: 3,
    marginTop: 25,
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    marginLeft: 4,
    lineHeight: 16,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 8,
    borderColor: Colors.primaryColors.pink,
  },
  buttonText: {
    color: Colors.primaryColors.white,
  },
  workoutView: {flexDirection: 'row', marginTop: 5},
  progressView: {
    marginTop: 25,
    marginBottom: 15,
  },
  flatList: {alignItems: 'center'},
});
