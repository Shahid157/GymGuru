import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {menuListPropsTypes} from './types';
import {styles} from './styles';
import strings from '../../utils/strings';

const MenuList: FC<menuListPropsTypes> = ({
  onPress,
  icon,
  menuIcon,
  menuTitle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={strings.buttonOpacity}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>{menuIcon}</View>
        <Text numberOfLines={1} style={[styles.menuText, textStyle]}>
          {menuTitle}
        </Text>
      </View>
      <View>{icon}</View>
    </TouchableOpacity>
  );
};

export default MenuList;
