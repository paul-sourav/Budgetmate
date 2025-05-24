import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Input} from '@ui-kitten/components';

type GlobalTextInputProps = {
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
};

const GlobalTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
  textStyle,
  keyboardType = 'default',
  ...rest
}: GlobalTextInputProps) => {
  return (
    <Input
      label={label}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[
        {
          borderRadius: 12,
          height: 50,
        },
        style,
      ]}
      textStyle={[
        {
          fontSize: 14,
        },
        textStyle,
      ]}
      {...rest}
    />
  );
};

export default GlobalTextInput;
