import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  column: {
    backgroundColor: Colors.primaryColors.white,
    alignItems: 'center',
    paddingVertical: 20,
    height: 90,
  },
  date: {
    color: Colors.primaryColors.grey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  day: {
    color: Colors.primaryColors.black,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
  },
  workout: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    width: windowWidth / 1.8,
  },
  workoutContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
  },
  statusView: {flexDirection: 'row', alignItems: 'center'},
  status: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: Colors.primaryColors.black,
  },
  dot: {paddingHorizontal: 5},
  divider: {
    borderWidth: 0.7,
    width: windowWidth / 1.4,
    borderColor: Colors.primaryColors.paleGrey,
    marginVertical: 12,
  },
  contentContainer: {width: 50},
});
