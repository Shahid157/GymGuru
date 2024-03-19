import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {FolderProgramsProps} from './types';
import {styles} from './styles';
import {Colors} from '../../utils/colors';

import strings from '../../utils/strings';

const FolderProgramsScreen: FC<FolderProgramsProps> = () => {
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

export default FolderProgramsScreen;
