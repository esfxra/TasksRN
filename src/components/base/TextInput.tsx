import React from 'react';
import {TextInput as TextInputRN} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface TextInputProps {
  onChangeText: (text: string) => void;
  value?: string;
  autoFocus?: boolean;
  paddingVertical?: keyof typeof themeTemplate.spacing;
}

export default function TextInput({
  value,
  onChangeText,
  autoFocus,
  paddingVertical,
}: TextInputProps) {
  const {theme} = useThemeContext();

  // Determine padding
  const determinedPadding = paddingVertical
    ? theme.spacing[paddingVertical]
    : theme.spacing.xs;

  return (
    <TextInputRN
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
      style={{
        paddingVertical: determinedPadding,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: theme.colors.foreground,
        color: theme.colors.foreground,
      }}
    />
  );
}
