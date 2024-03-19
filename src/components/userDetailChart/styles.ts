import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: config.secondaryColor,
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  offDaytext: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  weekText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.white,
  },
  trainingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  targetText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: Colors.primaryColors.black,
  },
  chartPropText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: Colors.primaryColors.black,
  },
  chartView: {alignSelf: 'center'},
  chartPropContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
  chartPropContent: {flexDirection: 'row', alignItems: 'center'},
  chartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    backgroundGradientToopacity: 0,
    decimalPlaces: 0,
    barRadius: 7,
    barPercentage: 0.6,
    propsForBackgroundLines: {
      strokeWidth: 1,
      strokeDasharray: '',
    },
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
  },
  graphStyle: {paddingRight: 23},
  divider: {
    borderWidth: 0.5,
    paddingHorizontal: 3,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 10,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
    marginBottom: 2,
  },
  detailText: {
    fontSize: 16,
    color: Colors.primaryColors.black,
    fontWeight: '600',
    lineHeight: 20,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    alignItems: 'center',
  },
  stackedBarConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    barRadius: 2,
    barPercentage: 0.52,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
  },
  progressChartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    color: (opacity = 1) => `rgba(248, 248, 249, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(rgba(0, 0, 0, ${opacity})`,
  },
  stackChartView: {width: windowWidth / 1.3},
  stackChart: {alignSelf: 'center', paddingRight: 25},
});
