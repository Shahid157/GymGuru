import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import UserProgressPhotos from '../../components/userProgressPhotos/userProgressPhotos';

const ProgressPhotosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          screenTitle={strings.progressPhotos}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.photosContainer}>
            <UserProgressPhotos />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProgressPhotosScreen;
