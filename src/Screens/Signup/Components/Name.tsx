import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';

const Name = ({
  next,
  name,
  setName,
}: {
  next: () => void;
  name: string;
  setName: (value: string) => void;
}) => {
  return (
    <CommonCard>
      <Text category="h1">Wats your name?</Text>
      <GlobalTextInput
        value={name}
        onChangeText={e => setName(e)}
        placeholder="enter your name"></GlobalTextInput>
      <Button children={'Next'} onPress={() => next()} />
    </CommonCard>
  );
};

export default Name;

const styles = StyleSheet.create({});
