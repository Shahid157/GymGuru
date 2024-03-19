import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {DraftProgramProps} from './types';
import {styles} from './styles';
import {Colors} from '../../utils/colors';

import strings from '../../utils/strings';

const DraftProgramScreen: FC<DraftProgramProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
      </View>
    </SafeAreaView>
  );
};

export default DraftProgramScreen;
