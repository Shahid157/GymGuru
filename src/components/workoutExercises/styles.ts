import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: Colors.primaryColors.white,
    marginTop: 12,
  },
  contentContainer: {flexDirection: 'row'},
  heading: {
    color: Colors.primaryColors.black,
    paddingHorizontal: 15,
    paddingTop: 9,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
  divider: {
    borderWidth: 0.5,
    paddingHorizontal: 3,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 15,
    marginBottom: 15,
  },
  renderItemDivider: {
    borderWidth: 0.5,
    borderColor: Colors.primaryColors.paleGrey,
    marginTop: 10,
    marginBottom: 10,
    width: '86%',
    alignSelf: 'flex-end',
    marginRight: 12,
  },
  button: {
    alignSelf: 'center',
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.primaryColors.pink,
    fontWeight: '500',
    lineHeight: 22,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: Colors.primaryColors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    marginBottom: 8,
  },
  time: {
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.primaryColors.secondaryGrey,
  },
  multiplyText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.primaryColors.secondaryGrey,
  },
  itemContainer: {paddingHorizontal: 5},
  groupView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    backgroundColor: Colors.primaryColors.paleGrey,
    height: 15,
    width: 15,
    borderRadius: 15,
    marginRight: 15,
  },
  dashedLine: {
    position: 'absolute',
    top: 17,
    left: 7,
    height: 95,
    borderWidth: 0.5,
    borderColor: Colors.primaryColors.lightestPurple,
    borderStyle: 'dashed',
  },
  textContainer: {
    marginLeft: 5,
  },
  flatList: {flexGrow: 1},
  image: {height: 55, width: 60, borderRadius: 8},
});
