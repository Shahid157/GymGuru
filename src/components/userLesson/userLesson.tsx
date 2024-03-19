import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {UserLessonPropsTypes} from './types';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';

const UserLesson: FC<UserLessonPropsTypes> = ({
  icon,
  lessonTitle,
  description,
  detailText,
  onPress,
  onPressVideo,
}) => {
  return (
    <View style={styles.container}>
      <View>
        {detailText === strings.playVideo && (
          <TouchableOpacity
            onPress={onPressVideo}
            activeOpacity={strings.buttonOpacity}
            style={styles.playButton}>
            {iconMapping['playButton']}
          </TouchableOpacity>
        )}
        <View style={styles.icon}>{icon}</View>
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {lessonTitle}
      </Text>
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
      <TouchableOpacity
        activeOpacity={strings.buttonOpacity}
        onPress={onPress}
        style={styles.detailView}>
        <Text numberOfLines={1} style={styles.detailText}>
          {detailText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserLesson;
