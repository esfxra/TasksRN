import React from 'react';
import {View} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface SeparatorProps {
  size?: keyof typeof themeTemplate.spacing;
}

export default function Separator({size}: SeparatorProps) {
  const {theme} = useThemeContext();

  return <View style={{marginVertical: theme.spacing[size || 's']}} />;
}
