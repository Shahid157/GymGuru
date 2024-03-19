import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  month: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.black,
  },
  flexContainer: {flexDirection: 'row', alignItems: 'center'},
  leftArrow: {marginRight: 15},
  calender: {
    overflow: 'hidden',
    alignSelf: 'center',
    height: 310,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
  },
  timeView: {
    backgroundColor: Colors.primaryColors.grey100,
    padding: 6,
    borderRadius: 8,
  },
  calenderTime: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.primaryColors.black,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
