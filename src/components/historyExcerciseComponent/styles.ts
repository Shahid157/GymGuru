import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  workoutName: {
    color: Colors.primaryColors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
  },
  viewsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  props: {
    color: Colors.primaryColors.grey,
    marginLeft: 6,
    fontWeight: '500',
    lineHeight: 19,
  },
  propsView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  contentHeading: {
    color: Colors.primaryColors.black,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    marginBottom: 4,
  },
  propsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    paddingBottom: 12,
  },
  contentDetail: {
    color: Colors.primaryColors.secondaryGrey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});
