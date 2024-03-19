import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
    alignContent: 'flex-end',
    width: '80%',
  },
  title: {
    color: Colors.primaryColors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  iconView: {flexDirection: 'row', alignItems: 'center'},
  icon: {marginLeft: 7},
  backbtnText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: Colors.primaryColors.black,
  },
  backbtnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
