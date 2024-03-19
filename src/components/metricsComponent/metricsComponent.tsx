import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {iconMapping} from '../../assets/icons/iconMap';
import Button from '../button/button';
import {styles} from './styles';
import strings from '../../utils/strings';
import {MetricsComponentsPropsTypes} from './types';
import {useNavigation} from '@react-navigation/core';

const CardMetrics: FC<MetricsComponentsPropsTypes> = ({
  onPressButton,
  metricsData,
  onPressTab,
}) => {
  const navigation: any = useNavigation();
  const onPressItem = (item: any) => {
    if (item?.activityName === strings?.weight) {
      navigation.navigate(strings.metrics_weight_screen);
    } else if (item?.activityName === strings?.bodyfat) {
      navigation.navigate(strings.add_body_fat_screen);
    }
  };
  return (
    <View>
      <FlatList
        data={metricsData}
        renderItem={({item}: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onPressItem(item), onPressTab();
              }}
              activeOpacity={strings.buttonOpacity}
              style={styles.itemContainer}>
              <View>
                <Text style={styles.activityName}>{item.activityName}</Text>
                <Text style={styles.updateDate}>{item.updateDate}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.activityCount}>{item.activityCount}</Text>
                <Text style={styles.activityUnit}>{item.activityUnit}</Text>
                {iconMapping['rightVector']}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        onPress={onPressButton}
        activeOpacity={strings.buttonOpacity}
        buttonText={strings.logallmetrics}
        textStyle={styles.buttonText}
        style={styles.button}
      />
    </View>
  );
};

export default CardMetrics;
