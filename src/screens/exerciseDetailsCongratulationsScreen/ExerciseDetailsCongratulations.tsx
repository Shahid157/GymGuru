import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ExerciseDetailsCongtratulationsPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import ConfettiCannon from 'react-native-confetti-cannon';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import ExerciseDetails from '../../components/exerciseDetailsCongrats/exerciseDetails';
import ExerciseDetailsTraining from '../../components/exerciseDetailsTraining/exerciseDetailsTraining';

const ExerciseDetailsCongratulations: FC<
  ExerciseDetailsCongtratulationsPropsTypes
> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          onPressHistory={() =>
            navigation.navigate(strings.exerciseDetailsShareScreen)
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.trophy}>{iconMapping['trophyIconGold']}</View>
            <ConfettiCannon count={300} origin={{x: 0, y: 0}} />
          </View>
          <Text style={styles.congratText}>{strings.congratulations}</Text>
          <Text style={styles.congratsDesc}>{strings.completedWorkout}</Text>
          <ExerciseDetails
            onPressHistory={() =>
              navigation.navigate(strings.dumbbellRearDeltScreen)
            }
          />
          <View style={styles.exerciseTrainingContainer}>
            <Text style={styles.trainingText}>{strings.beforeTraining}</Text>
            <ExerciseDetailsTraining
              icon={iconMapping['mindIcon']}
              bodyPartName={strings.mind}
              statusText={strings.hyped5}
            />
            <ExerciseDetailsTraining
              icon={iconMapping['armIcon']}
              bodyPartName={strings.body}
              statusText={strings.strong5}
            />
            <Text style={styles.trainingText}>{strings.afterTraining}</Text>
            <ExerciseDetailsTraining
              icon={iconMapping['greenTick']}
              bodyPartName={strings.feel}
              statusText={strings.hard4}
              textColor={Colors.secondaryColors.saffron}
            />
            <ExerciseDetailsTraining
              icon={iconMapping['greenTick']}
              bodyPartName={strings.time}
              statusText={strings.sixty}
              textColor={Colors.primaryColors.black}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailsCongratulations;
