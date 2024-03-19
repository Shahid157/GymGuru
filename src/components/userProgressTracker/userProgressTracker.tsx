import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import {UserProgressTrackerPropsTypes} from './types';

const UserProgressTracker: FC<UserProgressTrackerPropsTypes> = ({
  trackerTitle,
  icon,
  quantity,
  totalQuantity,
  progress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trackerTitle}>{trackerTitle}</Text>
      <View style={styles.icon}>{icon}</View>
      <View style={styles.contentContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.totalQuantity}>{totalQuantity}</Text>
      </View>
      <Progress.Bar
        style={styles.progressBar}
        color={Colors.primaryColors.pink}
        progress={progress}
        width={windowWidth / 1.23}
      />
    </View>
  );
};

export default UserProgressTracker;
