import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import strings from '../../utils/strings';
import {GoalsTablePropsTypes} from './types';

const GoalsTable: FC<GoalsTablePropsTypes> = ({goalsData}) => {
  return (
    <View>
      <FlatList
        data={goalsData}
        scrollEnabled={false}
        renderItem={({item, index}: any) => {
          return (
            <View style={styles.container}>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{item?.day}</Text>
                <Text style={styles.days}>{strings.days}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.title}>{item?.goaltitle}</Text>
                <Progress.Bar
                  color={Colors.primaryColors.green}
                  borderColor={Colors.primaryColors.paleGrey}
                  unfilledColor={Colors.primaryColors.paleGrey}
                  progress={item?.progress}
                  width={windowWidth / 1.6}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default GoalsTable;
