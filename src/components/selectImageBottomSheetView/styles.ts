import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColors.lightGrey,
    paddingVertical: 25,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 150,
    height: 130,
    backgroundColor: Colors.primaryColors.white,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 20,
    padding: 18,
  },
  image: {
    width: 32,
    height: 32,
    tintColor: Colors.primaryColors.pink,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.primaryColors.black,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 3,
    lineHeight: 22,
  },
});
