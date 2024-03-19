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
    paddingBottom: 5,
  },
  divider: {
    borderWidth: 0.6,
    marginTop: 12,
    marginBottom: 12,
    borderColor: Colors.primaryColors.paleGrey,
  },
  button: {
    backgroundColor: Colors.primaryColors.pink,
    borderColor: Colors.primaryColors.pink,
    marginTop: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.white,
  },
  averageContainer: {
    marginTop: 12,
    backgroundColor: config.secondaryColor,
    borderRadius: 12,
  },
  averageText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: Colors.primaryColors.black,
    paddingTop: 15,
    paddingLeft: 15,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.secondaryGrey,
  },
  detail: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    paddingVertical: 4,
  },
  distanceContainer: {
    marginLeft: '20%',
  },
});
