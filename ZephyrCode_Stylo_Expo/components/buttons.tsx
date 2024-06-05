import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import { Buttoncolor } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ButtonProps {
  title: string;
  onPress: () => void;
  filled?: boolean;
  color?: string;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = (props) => {

  const filledBgColors = useThemeColor({ light: Buttoncolor.bblue, dark: Buttoncolor.bgreen }, 'text');

  const filledBgColor = filledBgColors;
  const outlinedColor = Buttoncolor.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? Buttoncolor.white : undefined;

  return (
    <TouchableOpacity
    activeOpacity={0.8}
      style={[styles.button, { backgroundColor: bgColor }, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor:"#2C3E50",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Button;
