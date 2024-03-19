import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {WorkoutHeaderPropsTypes} from './types';
import {iconMapping} from '../../assets/icons/iconMap';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const WorkoutHeader: FC<WorkoutHeaderPropsTypes> = ({
  onPressHistory,
  onPressRearrange,
  screenTitle,
  rearrangeIcon,
  Icon,
  textWithBackButton,
  disabled,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {justifyContent: Icon && 'space-between'}]}>
      <View style={styles.backbtnView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {iconMapping['backArrowBlack']}
        </TouchableOpacity>
        {textWithBackButton && (
          <Text style={styles.backbtnText}>{textWithBackButton}</Text>
        )}
      </View>
      {screenTitle && (
        <View style={styles.titleView}>
          <Text style={styles.title}>{screenTitle}</Text>
        </View>
      )}
      {Icon ? (
        <View style={styles.iconView}>
          {rearrangeIcon && (
            <TouchableOpacity onPress={onPressRearrange}>
              {iconMapping['rearrangeIcon']}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            disabled={disabled}
            style={styles.icon}
            onPress={onPressHistory}>
            {Icon}
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default WorkoutHeader;
