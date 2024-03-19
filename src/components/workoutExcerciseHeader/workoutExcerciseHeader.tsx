import {Text, View} from 'react-native';
import React, {FC} from 'react';
import Button from '../button/button';
import strings from '../../utils/strings';
import {styles} from './styles';
import {WorkoutExcerciseHeaderPropsTypes} from './types';

const WorkoutExcerciseHeader: FC<WorkoutExcerciseHeaderPropsTypes> = ({
  onPressStart,
  onPressCancel,
  date,
  workoutName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.workoutName}>{workoutName}</Text>
      <View style={styles.buttonView}>
        <Button
          activeOpacity={strings.buttonOpacity}
          onPress={onPressStart}
          buttonText={strings.startWorkout}
          textStyle={styles.startText}
          style={styles.start}
        />
        <Button
          activeOpacity={strings.buttonOpacity}
          onPress={onPressCancel}
          buttonText={strings.cancel}
          textStyle={styles.cancelText}
          style={styles.cancel}
        />
      </View>
    </View>
  );
};

export default WorkoutExcerciseHeader;
