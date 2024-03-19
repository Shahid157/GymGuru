import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {UserHabitsPropsTypes} from './types';
import strings from '../../utils/strings';

const UserHabits: FC<UserHabitsPropsTypes> = ({
  icon,
  title,
  description,
  detailText,
  onPressDetail,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>{icon}</View>
        <View style={styles.textView}>
          <Text style={styles.habitTitle}>{title}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={onPressDetail}>
            <Text style={styles.detailText}>{detailText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserHabits;
