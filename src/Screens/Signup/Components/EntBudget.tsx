import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

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
    <CommonCard title="Ent Budget">
      <Text category="p">Enter your monthly and dailybudgets</Text>

      <View>
        <Text category="p2">Montly Budget</Text>
        <GlobalTextInput
          value={monthly}
          onChangeText={e => setMontly(e)}
          keyboardType="numeric"
          placeholder="Montly Budget"></GlobalTextInput>
      </View>

      <View>
        <Text category="p2">Daily Budget</Text>
        <GlobalTextInput
          value={dailyBudget}
          keyboardType="numeric"
          onChangeText={e => setDailyBudget(e)}
          placeholder="Daily Budget"></GlobalTextInput>
      </View>

      <Button
        style={GlobalStyles.button}
        onPress={() => next()}
        children={'Create account'}
      />
    </CommonCard>
  );
};

export default EntBudget;

const styles = StyleSheet.create({});
