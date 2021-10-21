import React from 'react';
import {View} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface SeparatorProps {
  size?: keyof typeof themeTemplate.spacing;
  vertical?: boolean;
}

export default function Separator({size, vertical}: SeparatorProps) {
  const {theme} = useThemeContext();

  // Determine spacing
  const determinedSpacing = size ? theme.spacing[size] : theme.spacing.s;

  return (
    <View
      style={{
        marginHorizontal: vertical ? determinedSpacing : 0,
        marginVertical: vertical ? 0 : determinedSpacing,
      }}
    />
  );
}
