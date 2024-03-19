import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/Config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  textStyle: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 23,
    color: config.secondaryColor,
  },
  backBtnText: {
    fontSize: 15,
    color: config.secondaryColor,
  },
  buttonStyle: {
    marginTop: '5%',
    marginLeft: 80,
    marginRight: 80,
  },
  itemContainer: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
  },
  itemText: {
    textAlign: 'left',
    color: config.secondaryColor,
    fontSize: 12,
  },
  headerContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  noDataText: {
    textAlign: 'center',
    color: config.secondaryColor,
    fontSize: 18,
  },
});
