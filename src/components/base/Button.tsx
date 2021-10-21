import React from 'react';
import {Pressable} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import Row from './Row';
import Icon, {IconNames} from './Icon';
import Text from './Text';
import Separator from './Separator';
import {theme as themeTemplate} from '../../theme';

interface ButtonProps {
  onPress: () => void;
  hitSlop?: number;
  label?: string;
  icon?: IconNames;
  borderRadius?: number;
  padding?: keyof typeof themeTemplate.spacing;
  margin?: keyof typeof themeTemplate.spacing;
}

export default function Button({
  onPress,
  hitSlop,
  label,
  icon,
  borderRadius,
  padding,
  margin,
}: ButtonProps) {
  const {theme} = useThemeContext();

  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      style={{
        borderRadius: borderRadius ? borderRadius : theme.spacing.xs,
        padding: padding ? theme.spacing[padding] : theme.spacing.s,
        margin: margin ? theme.spacing[margin] : 0,
        backgroundColor: theme.colors.foreground,
      }}>
      <Row>
        {icon && <Icon name={icon} size="m" color="background" />}
        {icon && label && <Separator size="xxs" vertical={true} />}
        {label && (
          <Text type="body" color="background">
            {label}
          </Text>
        )}
      </Row>
    </Pressable>
  );
}
