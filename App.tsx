import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {persistor, toolkitStore} from './src/redux/store/store';
import NavigationStack from './src/navigation/stackNavigation';
import CodePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';
Sentry.init({
  dsn: 'https://91db92c974c7e1d39a3aab68ba42a8c4@o4505749668888576.ingest.sentry.io/4505749669019648',
});

const codePushOptions = {
  checkFrequesncy: CodePush.CheckFrequency.ON_APP_RESUME,
};

function App(): JSX.Element {
  Sentry.init({
    dsn: 'https://91db92c974c7e1d39a3aab68ba42a8c4@o4505749668888576.ingest.sentry.io/4505749669019648',
  });
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Sentry.TouchEventBoundary>
        <MenuProvider>
          <Provider store={toolkitStore}>
            <PersistGate persistor={persistor}>
              <NavigationContainer>
                <NavigationStack />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </MenuProvider>
      </Sentry.TouchEventBoundary>
    </GestureHandlerRootView>
  );
}
export default CodePush(Sentry.wrap(App));
