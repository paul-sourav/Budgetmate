import {Image, StyleSheet, View} from 'react-native';
import React, {use, useState} from 'react';
import RootLayout from '../../Components/Ui/RootLayout';
import {Button, Card, Divider, Icon, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../Components/Global/GlobalTextInput';
import {CommonActions, Link} from '@react-navigation/native';
import {AsyncKeys, RouteName} from '../../Config/Common';
import HandleSignin from '../../Shared/Hooks/HandleSignin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../../Components/Global/GlobalStyles';
import {doc, getDoc, getFirestore} from '@react-native-firebase/firestore';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const LoginHandler = async () => {
    const response = await HandleSignin({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    if (response) {
      await AsyncStorage.setItem('userId', response.uid);
      const collectionName = 'user_details';
      const db = getFirestore();
      const userDoc = doc(db, collectionName, response.uid);
      const userDetails = await getDoc(userDoc);

      if (userDetails.data()) {
        await AsyncStorage.setItem(
          AsyncKeys.USER_DETAILS,
          JSON.stringify(userDetails.data()),
        );
      }

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: RouteName.BOTTOM}],
        }),
      );
    }
  };

  return (
    <RootLayout title="">
      <Image
        source={require('../../Assets/Logo_transparent.png')}
        style={{width: '50%', height: 50, resizeMode: 'cover'}}
      />
      <View style={{borderRadius: 12, gap: 9}}>
        <Text category="h4"> Welcome back</Text>
        <Image
          source={require('../../Assets/Login.png')}
          style={{
            width: '100%',
            height: '40%',
            resizeMode: 'contain',
          }}
        />

        <GlobalTextInput
          value={email}
          onChangeText={e => setEmail(e)}
          placeholder="admin@example.com"
        />
        <GlobalTextInput
          value={password}
          onChangeText={e => setPassword(e)}
          placeholder="***********"
        />
        <Button style={GlobalStyles.button} onPress={LoginHandler}>
          Login
        </Button>
        <Divider style={{marginVertical: 8}} />
        <Link screen={RouteName.SIGNUP} params={''}>
          <Text>Dont have an account</Text>
        </Link>
      </View>
    </RootLayout>
  );
};

export default Login;

const styles = StyleSheet.create({});
