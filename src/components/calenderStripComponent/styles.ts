import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  dateMonthView: {
    zIndex: 1,
    left: 93,
    top: 7,
    width: windowWidth / 2.4,
  },
  monthDate: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  arrowView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -5,
    zIndex: 1,
  },
  arrow: {marginRight: 12},
  weekView: {position: 'absolute', top: 5, zIndex: 1, paddingLeft: 6},
  weekText: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.primaryColors.pink,
  },
  calenderStrip: {
    height: windowHeight / 6,
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: config.primaryColor,
  },
  dateNumStyle: {
    color: Colors.primaryColors.black,
    height: windowHeight / 25,
    width: windowWidth / 12,
    paddingTop: 7,
  },
  dateContainer: {
    height: windowHeight / 9.5,
    width: windowWidth / 9,
    paddingTop: 4,
  },
  dateNameStyle: {
    color: Colors.primaryColors.black,
    height: windowHeight / 24,
    width: windowWidth / 11.7,
    paddingTop: 7,
  },
  highlightDateNumContainer: {
    backgroundColor: Colors.primaryColors.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightDateContainer: {
    backgroundColor: Colors.primaryColors.white,
    overflow: 'hidden',
    borderRadius: 10,
  },
  highlightDateNum: {
    color: Colors.primaryColors.pink,
  },
  highlightDateName: {
    color: Colors.primaryColors.black,
    fontWeight: '500',
    height: windowHeight / 24,
    width: windowWidth / 12,
  },
});
