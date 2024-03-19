import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {UserComponentPropsTypes} from './types';
import {styles} from './styles';
import strings from '../../utils/strings';

const UserComponent: FC<UserComponentPropsTypes> = ({
  name,
  status,
  imageUrl,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={strings.buttonOpacity}
      onPress={onPress}>
      <Image style={styles.imageView} source={imageUrl} />
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.nameText}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.statusText}>
          {status}
        </Text>
      </View>
      <View style={styles.icon}>{icon}</View>
    </TouchableOpacity>
  );
};

export default UserComponent;
