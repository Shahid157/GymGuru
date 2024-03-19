import {StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/dimensions';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    height: 55,
    alignItems: 'center',
    backgroundColor: Colors.primaryColors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  containerApple: {
    padding: 10,
    borderRadius: 5,
    height: 55,
    alignItems: 'center',
    backgroundColor: Colors.primaryColors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  textStyle: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: '8%',
  },
  textStyleforApple: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: '8%',
  },
  imgContainer: {
    width: 25,
    height: windowHeight * 0.04,
    resizeMode: 'contain',
  },
});
