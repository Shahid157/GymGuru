import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  headingView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: Colors.primaryColors.black,
    marginRight: 6,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.grey,
  },
  paginationItem: {width: 8, height: 8, marginHorizontal: 4, marginTop: 40},
  ImageView: {
    marginTop: 25,
    width: windowWidth / 1.07,
    alignItems: 'center',
  },
  image: {width: windowWidth / 1.1, borderRadius: 12},
  shareWorkoutText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: Colors.primaryColors.black,
    marginTop: '12%',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
