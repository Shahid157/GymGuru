import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  divider: {
    borderWidth: 0.6,
    marginTop: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  listDivider: {
    borderWidth: 0.6,
    marginTop: 12,
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
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
  macroContainer: {
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  macroText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 15,
    paddingLeft: 15,
  },

  consumedProps: {
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  actualProps: {
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.primaryColors.black,
  },
  protiensContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
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
  macroContent: {paddingHorizontal: 10},
});
