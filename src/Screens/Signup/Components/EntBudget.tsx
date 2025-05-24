import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';

interface EntBudgetProps {
  next: () => void;
  monthly: string;
  setMontly: (value: string) => void;
  dailyBudget: string;
  setDailyBudget: (value: string) => void;
}

const EntBudget: FC<EntBudgetProps> = props => {
  const {dailyBudget, monthly, next, setDailyBudget, setMontly} = props;

  return (
    <CommonCard>
      <View>
        <Text category="h1">Ent Budget</Text>
        <Text category="h5">Enter your monthly and dailybudgets</Text>
      </View>

      <View>
        <Text category="p2">Montly Budget</Text>
        <GlobalTextInput
          value={monthly}
          placeholder="Montly Budget"></GlobalTextInput>
      </View>

      <View>
        <Text category="p2">Daily Budget</Text>
        <GlobalTextInput
          value={monthly}
          placeholder="Daily Budget"></GlobalTextInput>
      </View>

      <Button children={'Next'} />
    </CommonCard>
  );
};

export default EntBudget;

const styles = StyleSheet.create({});
