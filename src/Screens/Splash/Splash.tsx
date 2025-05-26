import {Button, Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import RouteName from '../../Config/Common';
import RootLayout from '../../Components/Ui/RootLayout';
import {Text} from '@ui-kitten/components';

const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate(RouteName.LOGIN);
      navigation.reset({index: 0, routes: [{name: RouteName.BOTTOM}]});
    }, 2000);
  }, []);
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Logo_transparent.png')}
          style={{
            width: '50%',
            height: '50%',
            resizeMode: 'contain',
            tintColor: 'black',
          }}
        />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});
