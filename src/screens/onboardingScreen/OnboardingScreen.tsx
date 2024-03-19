import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import AppConfig from '../../utils/Config';
import {OnboardingPropsTypes} from './types';
import Button from '../../components/button/button';

const OnboardingScreen: FC<OnboardingPropsTypes> = ({navigation}) => {
  const config = AppConfig();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.envContainer}>
          <Text style={styles.textStyleEnv}>{strings.env}</Text>
          <Text style={styles.textStyleEnvVal}>{config.environment}</Text>
        </View>
        <Text style={styles.textStyle}>{strings.onboarding_note}</Text>
        <Text style={styles.textStyle}>{config.appName}</Text>

        <Button
          activeOpacity={strings.buttonOpacity}
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate(strings.login_screen);
          }}
          buttonText={strings.get_started_btn_txt}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnboardingScreen;
