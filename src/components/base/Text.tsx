import React from 'react';
import {Text as RNText, TextStyle, View} from 'react-native';

import {useThemeContext} from '../../Theme.provider';
import {theme as themeTemplate} from '../../theme';

interface TextProps {
  children: React.ReactText;
  type?: keyof typeof themeTemplate.text;
}

export default function Text({children, type}: TextProps) {
  const {theme} = useThemeContext();

  return (
    <View>
      <RNText
        style={{
          fontSize: theme.text[type || 'body'].fontSize,
          fontWeight: theme.text[type || 'body']
            .fontWeight as TextStyle['fontWeight'],
          color: theme.colors.foreground,
        }}>
        {children}
      </RNText>
    </View>
  );
}
