import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {UserExcercisePropsTypes} from './types';
import strings from '../../utils/strings';

const UserExcercise: FC<UserExcercisePropsTypes> = ({
  exerciseData,
  onPress,
}) => {
  const renderItem = (item: any) => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={strings.buttonOpacity}
          onPress={onPress}
          style={styles.contentContainer}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.title}
            </Text>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text numberOfLines={1} style={styles.bodyPartText}>
              {item.bodyPart}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <>
      {exerciseData?.length ? (
        <View style={styles.container}>
          <FlatList
            data={exerciseData}
            renderItem={item => renderItem(item.item)}
          />
        </View>
      ) : null}
    </>
  );
};

export default UserExcercise;
