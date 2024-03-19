import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {exerciseHistoryData} from '../../utils/dummyData';
import {useRoute} from '@react-navigation/core';

const ExerciseHistoryScreen = () => {
  const route: any = useRoute();
  const exercises: any = route?.params.exercises;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          screenTitle={strings.exercisehistory}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.exercisesContainer}>
            <Text style={styles.exerciseText}>{`${exercises} Exercises`}</Text>
            <View style={styles.divider} />
            <View style={styles.flatList}>
              <FlatList
                data={exerciseHistoryData}
                scrollEnabled={false}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.itemContainer} key={index}>
                      <View style={styles.heading}>
                        <Text style={styles.activityName}>
                          {item?.activityName}
                        </Text>
                        {iconMapping['dotshorizontalSecondary']}
                      </View>
                      <Text style={styles.date}>{item?.date}</Text>
                      <View style={styles.divider} />
                      <View style={styles.heading}>
                        <Text style={styles.setsHeading}>
                          {strings.setPerformed}
                        </Text>
                        <Text style={styles.setsHeading}>{strings.rm1}</Text>
                      </View>
                      {item?.setPerformed?.map(
                        (performItem: any, perfomindex: any) => {
                          return (
                            <View
                              style={[styles.heading, {paddingVertical: 6}]}
                              key={perfomindex}>
                              <Text style={styles.date}>
                                {performItem?.set}
                              </Text>
                              <Text style={styles.date}>{performItem?.rm}</Text>
                            </View>
                          );
                        },
                      )}
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseHistoryScreen;
