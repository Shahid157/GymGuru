import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowHeight} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {padding: 14},
  icon: {alignSelf: 'center', paddingTop: 25},
  title: {
    textAlign: 'center',
    paddingTop: 22,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: Colors.primaryColors.black,
  },
  desText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.grey,
    textAlign: 'center',
    paddingTop: 10,
  },
  num: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 26,
    color: Colors.primaryColors.black,
  },
  numView: {
    height: 55,
    width: 55,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    paddingTop: 5,
    color: Colors.primaryColors.grey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  flatList: {paddingVertical: 30, alignItems: 'center'},
  renderItem: {
    paddingRight: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  trainingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingVertical: 20,
  },
  timer: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 40,
    color: Colors.primaryColors.black,
    textAlign: 'center',
    paddingVertical: 10,
  },
  notes: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
    paddingTop: 20,
    paddingBottom: 8,
  },
  input: {
    textAlignVertical: 'top',
    backgroundColor: Colors.primaryColors.lightGrey,
    height: windowHeight / 6,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});
