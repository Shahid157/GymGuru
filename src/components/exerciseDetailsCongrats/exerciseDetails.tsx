import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {ExerciseDetailsPropsTypes} from './types';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {exerciseDetailsCongratsData} from '../../utils/dummyData';

const ExerciseDetails: FC<ExerciseDetailsPropsTypes> = ({onPressHistory}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.heading}>{strings.dumbbell_Rear_Delt_Row}</Text>
          <Text style={styles.date}>{strings.recordedDate}</Text>
        </View>
        <TouchableOpacity
          onPress={onPressHistory}
          activeOpacity={strings.buttonOpacity}
          style={styles.historyButton}>
          {iconMapping['historyIconPrimary']}
          <Text style={styles.historyText}>{strings.history}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Text style={styles.exerciseText}>{strings.exercisetext}</Text>
        <Text style={styles.bestSetText}>{strings.bestset}</Text>
      </View>
      {exerciseDetailsCongratsData?.map((item, index) => {
        return (
          <View key={index} style={styles.mapContainer}>
            <Text style={styles.itemexercise}>{item.excercise}</Text>
            <Text style={styles.itemBestSet}>{item.bestset}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ExerciseDetails;
