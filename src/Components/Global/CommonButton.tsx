import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';
import GlobalStyles from './GlobalStyles';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  children: any;
  onPress: () => void;
}
const CommonButton: React.FC<ButtonProps> = props => {
  const {children, isLoading, style, onPress} = props;
  return (
    <Button style={[GlobalStyles.button, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={'#eedd'} size={'small'} />
      ) : (
        children
      )}
    </Button>
  );
};

export default CommonButton;
