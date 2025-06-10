import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Divider, Text} from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RootLayout from '../../Components/Ui/RootLayout';
import GlobalStyles from '../../Components/Global/GlobalStyles';

const Account = () => {
  const ProfileData = {
    name: 'John Doe',
    email: 'John@mail.com',
    image:
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  };

  const settingButtonData = [
    {
      title: 'Edit Profile',

      onPress: () => console.log('Edit Profile Pressed'),
    },
    {
      title: 'Change Password',

      onPress: () => console.log('Change Password Pressed'),
    },
    {
      title: 'Daily Investment',

      onPress: () => console.log('Daily Investment Pressed'),
    },
    {
      title: 'Weekly Investment',

      onPress: () => console.log('Weekly Investment Pressed'),
    },
  ];

  const CommonButton = ({title}: {title: string}) => {
    return (
      <Button
        status="basic"
        size="large"
        accessoryRight={() => (
          <AntDesign name="right" size={20} color={'#8d8d8d'} />
        )}
        style={styles.buttonContainer}>
        <Text category="h5">{title}</Text>
      </Button>
    );
  };

  return (
    <RootLayout title="Account">
      <View style={{gap: 12}}>
        <View style={{alignItems: 'center'}}>
          <Avatar
            source={{uri: ProfileData.image}}
            style={{width: 120, height: 120}}
          />
          <Text category="h1"> {ProfileData.name}</Text>
          <Text category="h5">{ProfileData.email}</Text>
        </View>
        <Divider style={{height: 2}} />

        {settingButtonData.map((item, index) => (
          <CommonButton key={index} title={item.title} />
        ))}

        <Button style={GlobalStyles.button} children={'Go to Settings'} />

        <Button
          status="danger"
          style={GlobalStyles.button}
          children={'Logout'}
          onPress={() => console.log('Logout Pressed')}
        />
      </View>
    </RootLayout>
  );
};

export default Account;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-between',
  },
});
