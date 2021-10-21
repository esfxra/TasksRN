import React from 'react';
import {Text as RNText, View} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface TextProps {
  children: React.ReactText;
  type?: keyof typeof themeTemplate.text;
  color?: keyof typeof themeTemplate.colors;
}

export default function Text({children, type, color}: TextProps) {
  const {theme} = useThemeContext();

  return (
    <View>
      <RNText
        style={{
          ...(type ? theme.text[type] : theme.text.body),
          color: color ? theme.colors[color] : theme.colors.foreground,
        }}>
        {children}
      </RNText>
    </View>
  );
}
