//import config from 'react-native-config';

function AppConfig() {
  //  const {ENV, APP_NAME, MAIN_COLOR, SECONDARY_COLOR} = config;
  return {
    environment: 'ENV',
    appName: 'APP_NAME',
    primaryColor: '#F7F7F7',
    secondaryColor: '#fff',
    apiUrl: 'https://0472-89-197-221-180.ngrok-free.app/api/',
  };
}
export default AppConfig;
