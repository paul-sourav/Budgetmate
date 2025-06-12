import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

interface EntBudgetProps {
  signup: () => void;
  monthly: string;
  setMontly: (value: string) => void;
  dailyBudget: string;
  loading?: boolean;
  setDailyBudget: (value: string) => void;
}

const EntBudget: FC<EntBudgetProps> = props => {
  const {dailyBudget, monthly, signup, setDailyBudget, setMontly, loading} =
    props;

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

      <Button style={GlobalStyles.button} onPress={() => signup()}>
        {loading ? <ActivityIndicator size={'small'} /> : 'Create account'}
      </Button>
    </CommonCard>
  );
};

export default EntBudget;

const styles = StyleSheet.create({});
