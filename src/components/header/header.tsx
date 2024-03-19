import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {HeaderPropsTypes} from './types';
import {iconMapping} from '../../assets/icons/iconMap';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header: FC<HeaderPropsTypes> = ({
  screenTitle,
  backIcon,
  onPressBellIcon,
  icon,
  paddingHorizontal,
  descriptionText,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.container, {paddingHorizontal: paddingHorizontal || 0}]}>
      <View style={styles.titleContainer}>
        {backIcon ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {iconMapping['backArrow']}
          </TouchableOpacity>
        ) : null}
        <View>
          <Text numberOfLines={1} style={styles.titleText}>
            {screenTitle}
          </Text>
          {description && (
            <Text numberOfLines={2} style={styles.description}>
              {descriptionText}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={onPressBellIcon}>{icon}</TouchableOpacity>
    </View>
  );
};

export default Header;
