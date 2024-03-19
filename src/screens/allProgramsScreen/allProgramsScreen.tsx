import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {AllProgramProps} from './types';
import {styles} from './styles';
import {Colors} from '../../utils/colors';

import strings from '../../utils/strings';
import {allProgramsData} from '../../utils/dummyData';
import ProgramListView from '../../components/programsListView/programsListView';
const renderProgramList = (item: any) => {
  return (
    <ProgramListView
      icon={item.icon}
      title={item.habitTitle}
      description={item.description}
      detailText={item.detailText}
    />
  );
};
const AllProgramScreen: FC<AllProgramProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <View style={styles.listWrapper}>
          <FlatList
            scrollEnabled={true}
            data={allProgramsData}
            renderItem={item => renderProgramList(item.item)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllProgramScreen;
