import React from 'react';
import {TextInput as TextInputRN} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface TextInputProps {
  onChangeText: (text: string) => void;
  value?: string;
  padding?: keyof typeof themeTemplate.spacing;
  autoFocus?: boolean;
}

export default function TextInput({
  value,
  onChangeText,
  padding,
  autoFocus,
}: TextInputProps) {
  const {theme} = useThemeContext();

  return (
    <TextInputRN
      style={{
        padding: theme.spacing[padding || 'xs'],
        borderWidth: 1,
        borderRadius: theme.spacing.xs,
        borderColor: theme.colors.foreground,
        color: theme.colors.foreground,
      }}
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
    />
  );
}
