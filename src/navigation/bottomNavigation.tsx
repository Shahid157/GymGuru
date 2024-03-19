import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import strings from '../utils/strings';
import React from 'react';
import MenuScreen from '../screens/menuScreen/MenuScreen';
import AddNewScreen from '../screens/addNewScreen/AddNewScreen';
import {Image} from 'react-native';
import {Images} from '../assets/images';
import {Colors} from '../utils/colors';
import MessageScreen from '../screens/messageScreen/MessageScreen';
import AppConfig from '../utils/Config';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  const config = AppConfig();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColors.pink,
        tabBarInactiveTintColor: Colors.primaryColors.secondaryGrey,
        tabBarStyle: {backgroundColor: config.secondaryColor},
        tabBarLabelStyle: {
          fontWeight: '500',
          paddingBottom: 2,
          lineHeight: 13,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.home,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.homeIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.pink
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.home_screen}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.profile,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.profileIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.pink
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.profile_screen}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <Image source={Images.addIcon} />,
        }}
        name={strings.addnew_screen}
        component={AddNewScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.message,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.messageIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.pink
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.message_screen}
        component={MessageScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.menu,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.menuIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.pink
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.menu_screen}
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
