import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllProgramScreen from '../screens/allProgramsScreen/allProgramsScreen';
import ArchivedProgramScreen from '../screens/archivedProgramsScreen/archivedProgramsScreen';

import AppConfig from '../utils/Config';
const Tab = createMaterialTopTabNavigator();
const config = AppConfig();
export const MyTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: config.primaryColor},
      }}>
      <Tab.Screen name="Active" component={AllProgramScreen} />
      <Tab.Screen name="Archived" component={ArchivedProgramScreen} />
    </Tab.Navigator>
  );
};
