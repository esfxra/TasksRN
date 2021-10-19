import React from 'react';
import {Pressable, View} from 'react-native';

import {useThemeContext} from '../Theme.provider';
import {LightModeIcon, DarkModeIcon} from './Icons';

export default function ThemeToggle() {
  const {theme, themeName, toggleTheme} = useThemeContext();

  // A small adjustment to the theme 'l' dimension
  const adjustedDimension = theme.spacing.l - 2;

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
          <DarkModeIcon
            color={theme.colors.background}
            size={adjustedDimension}
          />
        )}
        <View
          style={{
            width: adjustedDimension,
            height: adjustedDimension,
            marginLeft: themeName === 'dark' ? theme.spacing.xxs : 0,
            marginRight: themeName === 'light' ? theme.spacing.xxs : 0,
            borderRadius: 999,
            backgroundColor: theme.colors.background,
          }}
        />
        {themeName === 'light' && (
          <LightModeIcon
            color={theme.colors.background}
            size={adjustedDimension}
          />
        )}
      </View>
    </Pressable>
  );
}
