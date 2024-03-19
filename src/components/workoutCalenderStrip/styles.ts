import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {flex: 1, marginTop: '5%'},
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth / 1.4,
    backgroundColor: Colors.primaryColors.grey400,
    borderRadius: 12,
  },
  column: {
    backgroundColor: Colors.primaryColors.white,
    width: '15%',
    alignItems: 'center',
    paddingVertical: 20,
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
  divider: {
    borderWidth: 0.7,
    width: windowWidth / 1.4,
    alignSelf: 'flex-end',
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 12,
    marginBottom: 12,
  },
  status: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: Colors.primaryColors.black,
  },
  workout: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primaryColors.black,
  },
  workoutContainer: {padding: 10},
  statusView: {flexDirection: 'row', alignItems: 'center'},
  calenderStrip: {
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 12,
  },
  dateNumStyle: {
    color: Colors.primaryColors.black,
    marginTop: 8,
    paddingTop: 3,
    borderColor: Colors.primaryColors.paleGrey,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    borderWidth: 0.9,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  iconContainer: {flex: 0.1},
  highlightDateNameStyle: {
    color: Colors.primaryColors.white,
    borderWidth: 1,
    borderColor: Colors.primaryColors.pink,
    height: 25,
    width: 25,
    borderRadius: 13,
    overflow: 'hidden',
    paddingTop: 6,
    marginBottom: 4,
    backgroundColor: Colors.primaryColors.pink,
  },
  highlightDateNumberStyle: {
    color: Colors.primaryColors.pink,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    height: 32,
    alignSelf: 'center',
  },
  dot: {paddingHorizontal: 5},
  flatListContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColors.white,
    marginTop: '3%',
    borderRadius: 12,
  },
  flatList: {
    marginHorizontal: '5%',
    marginVertical: '4%',
  },
  calenderContainer: {flexDirection: 'row'},
  highlightDateContainer: {
    backgroundColor: Colors.primaryColors.white,
  },
  dateName: {color: Colors.primaryColors.black},
});
