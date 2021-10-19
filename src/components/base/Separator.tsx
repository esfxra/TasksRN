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

  let spacing: any;
  if (size) {
    spacing = theme.spacing[size];
  } else {
    spacing = theme.spacing.s;
  }

  let style: any;
  if (vertical) {
    style = {marginHorizontal: spacing};
  } else {
    style = {marginVertical: spacing};
  }

  return <View style={style} />;
}
