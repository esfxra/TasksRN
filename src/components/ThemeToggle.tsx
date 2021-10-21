import React from 'react';
import {Pressable, View} from 'react-native';

import {useThemeContext} from '../Theme.provider';
import Icon from './base/Icon';

export default function ThemeToggle() {
  const {theme, themeName, toggleTheme} = useThemeContext();

  // Determine whether a space should be applied to the left or right
  const determinedMarginLeft = themeName === 'dark' ? theme.spacing.xxs : 0;
  const determinedMarginRight = themeName === 'light' ? theme.spacing.xxs : 0;

  return (
    <Pressable onPress={toggleTheme}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 3,
          borderRadius: 20,
          backgroundColor: theme.colors.foreground,
        }}>
        {themeName === 'dark' && (
          <Icon name="DarkMode" size="l" color="background" />
        )}
        <View
          style={{
            borderRadius: 999,
            width: theme.spacing.l,
            height: theme.spacing.l,
            marginLeft: determinedMarginLeft,
            marginRight: determinedMarginRight,
            backgroundColor: theme.colors.background,
          }}
        />
        {themeName === 'light' && (
          <Icon name="LightMode" size="l" color="background" />
        )}
      </View>
    </Pressable>
  );
}
