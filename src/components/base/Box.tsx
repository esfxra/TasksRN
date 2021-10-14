import React from 'react';
import {View} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface BoxProps {
  children: React.ReactNode;
  padding?: keyof typeof themeTemplate.spacing;
  margin?: keyof typeof themeTemplate.spacing;
}

export default function Box({children, padding, margin}: BoxProps) {
  const {theme} = useThemeContext();

  return (
    <View
      style={{
        padding: padding && theme.spacing[padding],
        margin: margin && theme.spacing[margin],
      }}>
      {children}
    </View>
  );
}
