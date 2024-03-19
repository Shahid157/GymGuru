import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import strings from '../../utils/strings';
import {WorkoutExercisesPropsTypes} from './types';

const WorkoutExercises: FC<WorkoutExercisesPropsTypes> = ({
  exercisesData,
  onPress,
  onPressVideo,
}) => {
  const renderItem = (item: any, index: any) => {
    return (
      <>
        {exercisesData?.length > 0 && (
          <TouchableOpacity
            onPress={() => onPressVideo(item, index)}
            style={styles.itemContainer}>
            <View style={styles.rowItem}>
              <View style={styles.groupView}>
                <View>
                  <View style={styles.circle} />
                  {exercisesData.length - 1 > index && (
                    <View style={styles.dashedLine} />
                  )}
                </View>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.multiplyText}>X{item.multiplyNum}</Text>
            </View>

            {exercisesData.length - 1 > index && (
              <View style={styles.renderItemDivider} />
            )}
          </TouchableOpacity>
        )}
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {exercisesData?.length + ' ' + strings.exercise4}
      </Text>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <FlatList
          scrollEnabled={false}
          style={styles.flatList}
          data={exercisesData}
          renderItem={item => renderItem(item?.item, item.index)}
        />
      </View>
      {exercisesData?.length > 0 && <View style={styles.divider} />}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={strings.buttonOpacity}
        style={styles.button}>
        <Text style={styles.buttonText}>{strings.addexercise}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutExercises;
