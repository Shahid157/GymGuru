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
    padding: 12,
  },
  congratText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: Colors.primaryColors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  congratsDesc: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primaryColors.grey,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },
  trophy: {alignSelf: 'center', paddingTop: 25, marginBottom: 11},
  exerciseTrainingContainer: {
    backgroundColor: config.secondaryColor,
    marginTop: 8,
    borderRadius: 12,
    padding: 12,
  },
  trainingText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: Colors.primaryColors.black,
    marginBottom: 5,
    paddingTop: 3,
  },
});
