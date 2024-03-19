import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import {profileWorkoutHistoryData} from '../../utils/dummyData';
import HistoryExcercise from '../../components/historyExcerciseComponent/historyExcerciseComponent';
import {useNavigation, useRoute} from '@react-navigation/core';

const ProfileWorkoutHistoryScreen = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const workouts: any = route?.params.workouts;
  const renderItem = (item: any, section: any, index: number) => {
    return (
      <View style={styles.renderItem}>
        <HistoryExcercise
          onPress={() =>
            navigation.navigate(strings.workoutHistoryDetail_screen, {
              item: item,
              time: strings.time7,
              workoutflow: true,
            })
          }
          bgColor={Colors.primaryColors.lightGrey}
          workoutName={item.workoutName}
          time={item.time}
          weight={item.weight}
          reps={item.reps}
          excercise={item.exercise}
          bestSet={item.bestset}
          exerciseDetail={true}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          screenTitle={strings.workoutshistory}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.workoutContainer}>
            <Text style={styles.workoutText}>{`${workouts} Workouts`}</Text>
            <View style={styles.divider} />
            <View style={styles.sectionList}>
              <SectionList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                sections={profileWorkoutHistoryData}
                keyExtractor={(item: any, index: number) => item + index}
                renderItem={item =>
                  renderItem(item.item, item.section, item.index)
                }
                renderSectionHeader={({section: {title}}) => (
                  <Text style={styles.title}>{title}</Text>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileWorkoutHistoryScreen;
