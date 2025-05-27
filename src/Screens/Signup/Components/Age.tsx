import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';

const Age = ({
  next,
  age,
  setAge,
}: {
  next: () => void;
  age: string;
  setAge: (value: string) => void;
}) => {
  return (
    <CommonCard>
      <Text category="h1">Wats your Age?</Text>
      <GlobalTextInput
        value={age}
        onChangeText={e => setAge(e)}
        placeholder="enter your age"></GlobalTextInput>
      {/* <RNDateTimePicker value={new Date()} /> */}
      <Button children={'Next'} onPress={() => next()} />
    </CommonCard>
  );
};

export default Age;

const styles = StyleSheet.create({});
