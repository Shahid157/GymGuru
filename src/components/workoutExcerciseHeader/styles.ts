import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.primaryColors.white,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.grey,
  },
  workoutName: {
    color: Colors.primaryColors.black,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 15,
  },
  start: {
    width: 150,
    borderRadius: 8,
    backgroundColor: Colors.primaryColors.pink,
    paddingVerticle: 12,
    paddingHorizontal: 20,
    borderColor: Colors.primaryColors.pink,
  },
  cancel: {
    width: 100,
    marginLeft: 15,
    borderRadius: 8,
    backgroundColor: Colors.primaryColors.paleGrey,
    paddingVerticle: 12,
    paddingHorizontal: 20,
    borderColor: Colors.primaryColors.paleGrey,
  },
  startText: {
    color: Colors.primaryColors.white,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
  },
  cancelText: {
    color: Colors.primaryColors.black,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  buttonView: {flexDirection: 'row', alignItems: 'center'},
});
