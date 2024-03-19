import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import {ExerciseDetailsTrainingPropsTypes} from './types';

const ExerciseDetailsTraining: FC<ExerciseDetailsTrainingPropsTypes> = ({
  textColor,
  icon,
  bodyPartName,
  statusText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {icon}
        <Text style={styles.bodyPart}>{bodyPartName}</Text>
      </View>
      <Text
        style={[
          styles.detailText,
          {color: textColor || Colors.primaryColors.green},
        ]}>
        {statusText}
      </Text>
    </View>
  );
};

export default ExerciseDetailsTraining;
