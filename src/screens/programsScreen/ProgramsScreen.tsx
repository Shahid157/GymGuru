import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {ProgramScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import Header from '../../components/header/header';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {useSelector} from 'react-redux';
import {APIHANDLER} from '../../services/apiConfig';
import {MyTabNavigation} from '../../navigation/programTabNavigation';

const ProgramsScreen: FC<ProgramScreenPropsTypes> = () => {
  const token = useSelector((state: any) => state?.AuthSlicer?.firebaseToken);
  const [programs, setPrograms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    APIHANDLER('GET', 'pages/programs', null, token)
      .then(value => {
        setPrograms(value?.data?.programs);
        setLoading(false);
      })

      .catch(e => {
        console.log('error in api');
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <Header
          backIcon={true}
          icon={iconMapping['bellIcon']}
          screenTitle={strings.program}
        />

        {isLoading ? (
          <View style={styles.wrapper_view}>
            <ActivityIndicator
              size="large"
              color={Colors.primaryColors.black}
            />
          </View>
        ) : programs?.length < 0 ? (
          <View style={styles.wrapper_view}>
            <Text style={styles.text_program}>No Program Found</Text>
          </View>
        ) : (
          <MyTabNavigation />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProgramsScreen;
