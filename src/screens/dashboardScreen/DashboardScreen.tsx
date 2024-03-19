import {Text, SafeAreaView, FlatList, View} from 'react-native';
import React, {FC, useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {DashboardPropsTypes} from './types';
import {addItem, removeItem} from '../../redux/toolkit/AddItemSlicer';
import {clearUser} from '../../redux/toolkit/UserSlicer';
import Button from '../../components/button/button';

const DashboardScreen: FC<DashboardPropsTypes> = ({navigation, route}) => {
  const data = useSelector((state: any) => state?.AddItemSlicer);
  const userData = useSelector((state: any) => state?.UserSlicer);
  const dispatch = useDispatch();
  const apiData = route?.params?.apiData?.entries;
  const [cart, setcart] = useState(false);

  const renderItem = (item: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item?.item?.API}</Text>
        <Text style={styles.itemText}>{item?.item?.Category}</Text>
        <Text style={styles.itemText}>{item?.item?.Description}</Text>
        <Text style={styles.itemText}>{item?.item?.Link}</Text>
        <Button
          activeOpacity={strings.buttonOpacity}
          style={styles.buttonStyle}
          onPress={() => {
            !cart
              ? dispatch(addItem(item?.item))
              : dispatch(removeItem(item?.index));
          }}
          buttonText={cart ? strings.remove_item : strings.add_cart}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          onPress={() => {
            cart ? setcart(false) : navigation.navigate(strings.login_screen);
          }}
          style={styles.backBtnText}>
          {strings.go_back_btn}
        </Text>
        {!cart ? (
          <Text
            onPress={() => {
              dispatch(clearUser());
              setcart(true);
            }}
            style={styles.backBtnText}>
            Cart : {data?.length}
          </Text>
        ) : null}
      </View>
      <FlatList
        ListEmptyComponent={() => {
          return (
            <Text style={styles.noDataText}>
              {cart ? strings.empty_cart : strings.no_data}
            </Text>
          );
        }}
        data={cart ? data : apiData}
        renderItem={(item: any) => renderItem(item)}
      />
    </SafeAreaView>
  );
};
export default DashboardScreen;
