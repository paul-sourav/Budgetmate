import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RootLayout from '../../Components/Ui/RootLayout';
import {Button, Card, Icon, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../Components/Global/GlobalTextInput';
import {CommonActions, Link} from '@react-navigation/native';
import RouteName from '../../Config/Common';
import HandleSignin from '../../Shared/Hooks/HandleSignin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const LoginHandler = async () => {
    const response = await HandleSignin({
      email: email.trim(),
      password: password.trim(),
    });

    if (response) {
      console.log('response------------------------', response);
      await AsyncStorage.setItem('userId', response.uid);
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
      <Card
        header={() => <Text category="h1">Login</Text>}
        footer={() => (
          <Link screen={RouteName.SIGNUP} params={''}>
            <Text>Dont have an account</Text>
          </Link>
        )}>
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
        <Button onPress={LoginHandler}>Login</Button>
      </Card>
    </RootLayout>
  );
};

export default Login;

const styles = StyleSheet.create({});
