import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginTop: 12,
  },
  divider: {
    borderWidth: 0.6,
    marginTop: 12,
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: Colors.primaryColors.black,
    paddingTop: 12,
    paddingLeft: 12,
  },
  totalSteps: {
    position: 'absolute',
    alignSelf: 'center',
    top: 140,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.primaryColors.secondaryGrey,
  },
  stepsText: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '600',
    color: Colors.primaryColors.black,
  },
  date: {
    position: 'absolute',
    alignSelf: 'center',
    top: 70,
    color: Colors.primaryColors.pink,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 1,
  },
  chartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    backgroundGradientToopacity: 0,
    decimalPlaces: 0,
    barPercentage: 0.1,
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: Colors.primaryColors.lightGrey,
      strokeDasharray: '',
    },
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 1, ${opacity})`,
  },
  graphStyle: {paddingRight: 27, marginTop: 15},
  duration: {paddingVertical: 12, paddingHorizontal: 20},
  progressView: {marginTop: 5},
  progress: {height: 170, alignSelf: 'center'},
  progressChartConfig: {
    backgroundColor: Colors.primaryColors.white,
    backgroundGradientFrom: Colors.primaryColors.white,
    backgroundGradientTo: Colors.primaryColors.white,
    color: (opacity = 1) => `rgba(248, 248, 249, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(rgba(0, 0, 0, ${opacity})`,
  },
  calText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    textAlign: 'center',
  },
  cal: {
    color: Colors.primaryColors.pink,
  },
  chartPropContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    width: 55,
  },
  chartPropText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: Colors.primaryColors.black,
    marginLeft: 3,
  },
  consumedProps: {
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  remainingProps: {
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  protiensContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  protienHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  propsHeading: {
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  detail: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.primaryColors.black,
  },
  propContainer: {flexDirection: 'column', alignItems: 'center'},
  status: {
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  weightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  weightDate: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
    lineHeight: 18,
    color: Colors.primaryColors.pink,
  },
  weightText: {
    position: 'absolute',
    alignSelf: 'center',
    top: 120,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '600',
    color: Colors.primaryColors.black,
  },
  goalText: {
    position: 'absolute',
    alignSelf: 'center',
    top: 85,
    color: Colors.primaryColors.pink,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 1,
  },
});
