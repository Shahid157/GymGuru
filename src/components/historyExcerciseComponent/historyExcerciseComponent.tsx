import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {iconMapping} from '../../assets/icons/iconMap';
import {HistoryExcercisePropsTypes} from './types';
import {styles} from './styles';
import strings from '../../utils/strings';
import {windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/Config';

const HistoryExcercise: FC<HistoryExcercisePropsTypes> = ({
  workoutName,
  time,
  weight,
  reps,
  excercise,
  bestSet,
  onPress,
  exerciseDetail,
  bgColor,
}) => {
  const config = AppConfig();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={strings.buttonOpacity}
      style={[
        styles.container,
        {
          width: exerciseDetail ? null : windowWidth / 1.15,
          backgroundColor: bgColor || config.secondaryColor,
        },
      ]}>
      <View style={styles.contentContainer}>
        <Text style={styles.workoutName}>{workoutName}</Text>
        {exerciseDetail && <View>{iconMapping['dotshorizontal']}</View>}
      </View>
      <View style={styles.propsContent}>
        <View style={styles.viewsFlex}>
          <View>{iconMapping['timeIcon']}</View>
          <Text style={styles.props}>{time}</Text>
        </View>
        <View style={styles.propsView}>
          <View>{iconMapping['weightIcon']}</View>
          <Text style={styles.props}>{weight}</Text>
        </View>
        <View style={styles.propsView}>
          <View>{iconMapping['trophyIcon']}</View>
          <Text style={styles.props}>{reps}</Text>
        </View>
      </View>
      {exerciseDetail && (
        <View style={styles.viewsFlex}>
          <View>
            <Text style={styles.contentHeading}>{strings.exercisetext}</Text>
            <Text style={styles.contentDetail}>{excercise}</Text>
          </View>
          <View>
            <Text style={styles.contentHeading}>{strings.bestset}</Text>
            <Text style={styles.contentDetail}>{bestSet}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HistoryExcercise;
