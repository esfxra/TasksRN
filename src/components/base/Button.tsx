import React from 'react';
import {Pressable, Text} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface ButtonProps {
  children: React.ReactText;
  onPress: () => void;
  padding?: keyof typeof themeTemplate.spacing;
  margin?: keyof typeof themeTemplate.spacing;
}

export default function Button({
  children,
  onPress,
  padding,
  margin,
}: ButtonProps) {
  const {theme} = useThemeContext();

  return (
    <Pressable
      style={{
        alignSelf: 'baseline',
        borderRadius: theme.spacing.xs,
        padding: theme.spacing[padding || 's'],
        margin: margin && theme.spacing[margin],
        backgroundColor: theme.colors.foreground,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: theme.text.body.fontSize,
          color: theme.colors.background,
        }}>
        {children}
      </Text>
    </Pressable>
  );
}
