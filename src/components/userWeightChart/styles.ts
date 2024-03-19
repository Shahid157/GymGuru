import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  weightText: {
    color: Colors.primaryColors.pink,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 32,
  },
  metricsText: {
    color: Colors.primaryColors.black,
    lineHeight: 16,
  },
  viewContainer: {
    backgroundColor: Colors.primaryColors.pink,
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 16,
  },
  viewText: {color: Colors.primaryColors.white, lineHeight: 18},
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    decimalPlaces: 0,
    propsForBackgroundLines: {
      strokeWidth: 1,
      strokeDasharray: '',
    },
    color: (opacity = 1) => `rgba(235, 87, 89, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '1',
      stroke: Colors.primaryColors.pink,
    },
  },
  accordionChartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    decimalPlaces: 0,
    propsForBackgroundLines: {
      strokeWidth: 1,
      strokeDasharray: '',
    },
    color: (opacity = 1) => `rgba(99, 174, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '1',
      stroke: Colors.primaryColors.pink,
    },
  },
  chart: {
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primaryColors.black,
  },
  weekContainer: {
    backgroundColor: Colors.primaryColors.black,
    paddingVertical: 8,
    height: 33,
    width: 80,
    borderRadius: 30,
  },
  weekText: {
    color: Colors.primaryColors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {marginLeft: 10},
  lineChart: {alignItems: 'center'},
  durationButton: {paddingVertical: 8, paddingHorizontal: 4},
  legendBox: {
    height: 46,
    width: 48,
    borderRadius: 10,
    backgroundColor: 'black',
    position: 'absolute',
    justifyContent: 'center',
    padding: 3,
  },
  value: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
    color: Colors.primaryColors.white,
  },
  date: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 15,
    color: Colors.primaryColors.white,
  },
  edge: {
    position: 'absolute',
  },
  weightChartView: {paddingRight: 20},
});
