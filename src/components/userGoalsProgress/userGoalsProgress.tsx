import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import {UserGoalsProgressPropsTypes} from './types';
import * as Progress from 'react-native-progress';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import Button from '../button/button';
import strings from '../../utils/strings';
import {windowWidth} from '../../utils/dimensions';

const UserGoalsProgress: FC<UserGoalsProgressPropsTypes> = ({
  onPress,
  goalsData,
  onPressAdd,
}) => {
  const renderItem = (item: any) => {
    return (
      <>
        <View style={styles.contentContainer}>
          <Text style={styles.daysText}>{item.days}</Text>
          <Text onPress={onPressAdd} style={styles.addText}>
            {strings.add}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.weightText}>
          {item.progessGoals}
        </Text>
        <Progress.Bar
          style={styles.progressBar}
          color={Colors.primaryColors.green}
          progress={item.progress}
          width={windowWidth / 1.34}
        />
        <View style={styles.divider} />
      </>
    );
  };
  return (
    <>
      {goalsData?.length ? (
        <View style={styles.container}>
          <FlatList
            data={goalsData}
            renderItem={item => renderItem(item.item)}
          />
          <Button
            activeOpacity={strings.buttonOpacity}
            style={styles.button}
            textStyle={styles.buttonText}
            buttonText={strings.setgoals}
            onPress={onPress}
          />
        </View>
      ) : null}
    </>
  );
};

export default UserGoalsProgress;
