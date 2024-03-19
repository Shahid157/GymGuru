import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopWatchContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  startStopButton: {
    height: 98,
    width: 98,
    backgroundColor: Colors.primaryColors.pink,
    borderRadius: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startStopText: {
    fontSize: 16,
    color: Colors.primaryColors.white,
    fontWeight: '700',
    lineHeight: 20,
  },
  resetText: {
    fontSize: 16,
    color: Colors.primaryColors.black,
    fontWeight: '700',
    lineHeight: 20,
  },
  resetButton: {
    height: 98,
    width: 98,
    backgroundColor: Colors.primaryColors.grey300,
    borderRadius: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startStopContainer: {
    width: '62%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
  },

  flaRlistcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  durationName: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.primaryColors.secondaryGrey,
    fontWeight: '600',
  },
  pickerItem: {
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 24,
    color: Colors.primaryColors.pink,
  },
  picker: {width: 98, color: Colors.primaryColors.pink},
  pickerContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    marginRight: 9,
  },
  circleTime: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.primaryColors.black,
  },
  flexContainer: {flexDirection: 'row', alignItems: 'center'},
});
