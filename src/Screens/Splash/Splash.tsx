import {Button, StyleSheet, View} from 'react-native';
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
    <RootLayout title="">
      <Text category="h1">Splash</Text>
    </RootLayout>
  );
};

export default Splash;

const styles = StyleSheet.create({});
