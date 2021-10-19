import React from 'react';
import {Pressable, Text} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import Row from './Row';
import {theme as themeTemplate} from '../../theme';
import Separator from './Separator';

interface ButtonProps {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  padding?: keyof typeof themeTemplate.spacing;
  margin?: keyof typeof themeTemplate.spacing;
}

export default function Button({
  label,
  onPress,
  icon,
  padding,
  margin,
}: ButtonProps) {
  const {theme} = useThemeContext();

  return (
    <Pressable
      style={{
        borderRadius: theme.spacing.xs,
        padding: theme.spacing[padding || 's'],
        margin: margin && theme.spacing[margin],
        backgroundColor: theme.colors.foreground,
      }}
      onPress={onPress}>
      <Row>
        {icon}
        {icon && <Separator size="xxs" vertical={true} />}
        <Text
          style={{
            fontSize: theme.text.body.fontSize,
            color: theme.colors.background,
          }}>
          {label}
        </Text>
      </Row>
    </Pressable>
  );
}
