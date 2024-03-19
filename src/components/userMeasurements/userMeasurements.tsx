import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import {iconMapping} from '../../assets/icons/iconMap';
import {styles} from './styles';
import {UserMeasurementsPropsTypes} from './types';
import Button from '../button/button';
import strings from '../../utils/strings';

const UserMeasurements: FC<UserMeasurementsPropsTypes> = ({
  measurementsData,
  onPress,
}) => {
  const renderItem = (item: any) => {
    return (
      <>
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.bodyName}>
            {item?.bodypart}
          </Text>
          <Text numberOfLines={1} style={styles.status}>
            {item?.status}
          </Text>
          <View>{iconMapping['smallAnalytics']}</View>
        </View>
        <View style={styles.divider} />
      </>
    );
  };
  return (
    <>
      {measurementsData?.length ? (
        <View style={styles.container}>
          <FlatList
            data={measurementsData}
            renderItem={item => renderItem(item.item)}
          />
          <Button
            activeOpacity={strings.buttonOpacity}
            style={styles.button}
            textStyle={styles.buttonText}
            buttonText={strings.addnew}
            onPress={onPress}
          />
        </View>
      ) : null}
    </>
  );
};

export default UserMeasurements;
