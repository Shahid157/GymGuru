import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {UserProfileDetailProps} from './types';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';

const UserProfileDetail: FC<UserProfileDetailProps> = ({
  day,
  activityCount,
  activityName,
  accordion,
  onPressView,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.dayText}>
            {day}
          </Text>
          {accordion ? (
            <View style={styles.hideView}>
              <Text style={styles.hideText}>{strings.hide}</Text>
              {iconMapping['arrowUp']}
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={strings.buttonOpacity}
              onPress={onPressView}
              style={styles.showView}>
              <Text style={styles.showText}>{strings.View}</Text>
              {iconMapping['smallRightArrow']}
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.userActivityView}>
        <Text numberOfLines={1} style={styles.measureNumber}>
          {activityCount}
        </Text>
        <Text numberOfLines={1} style={styles.userActivityText}>
          {activityName}
        </Text>
      </View>
    </View>
  );
};

export default UserProfileDetail;
