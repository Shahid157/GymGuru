import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {MenuScreenPropsTypes} from './types';
import {styles} from './styles';
import Header from '../../components/header/header';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import MenuList from '../../components/menuList/menuList';
import {Colors} from '../../utils/colors';
import {logoutUser} from '../../redux/toolkit/AuthSlicer';
import {useDispatch} from 'react-redux';
const MenuScreen: FC<MenuScreenPropsTypes> = ({navigation}) => {
  const dispatch: any = useDispatch();
  const footerRender = () => {
    return (
      <>
        <MenuList
          menuIcon={iconMapping['programIcon']}
          menuTitle={strings.program}
          icon={iconMapping['rightArrow']}
          onPress={() => {
            navigation.navigate(strings.programs_Screen);
          }}
        />
        <MenuList
          menuIcon={iconMapping['groupsIcon']}
          menuTitle={strings.groups}
          icon={iconMapping['rightArrow']}
          onPress={() => {
            navigation.navigate(strings.group_screen);
          }}
        />
        <MenuList
          menuIcon={iconMapping['settings']}
          menuTitle={strings.settings}
          icon={iconMapping['rightArrow']}
        />
        <MenuList
          menuIcon={iconMapping['rateIcon']}
          menuTitle={strings.rateReview}
          icon={iconMapping['rightArrow']}
        />
        <MenuList
          menuIcon={iconMapping['helpIcon']}
          menuTitle={strings.help}
          icon={iconMapping['rightArrow']}
        />
        <MenuList
          menuTitle={strings.signout}
          textStyle={styles.signout}
          onPress={() => {
            dispatch(logoutUser());
            navigation.navigate(strings.login_screen);
          }}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <Header
        paddingHorizontal={16}
        icon={iconMapping['bellIcon']}
        screenTitle={strings.menu}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.footerView}>{footerRender()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
