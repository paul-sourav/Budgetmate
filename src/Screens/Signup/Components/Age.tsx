import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import DatePicker from 'react-native-date-picker';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

const Age = ({
  next,
  age,
  setAge,
}: {
  next: () => void;
  age: string;
  setAge: (value: string) => void;
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <CommonCard title="Wats your Age?">
      <Button
        appearance="outline"
        status="basic"
        size="large"
        style={{borderRadius: 20}}
        accessoryLeft={() => <Text category="h6">Your Age</Text>}
        children={new Date(date).toLocaleDateString()}
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        mode={'date'}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <Button
        children="Next"
        style={GlobalStyles.button}
        onPress={() => {
          setAge(String(date.getTime()));
          next();
        }}
      />
    </CommonCard>
  );
};

export default Age;

const styles = StyleSheet.create({});
