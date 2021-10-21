import React from 'react';
import {Pressable, View} from 'react-native';

import {useThemeContext} from '../Theme.provider';

interface TaskCheckboxProps {
  complete: boolean;
  onPress: () => void;
}

export default function TaskCheckbox({complete, onPress}: TaskCheckboxProps) {
  const {theme} = useThemeContext();

  return (
    <Pressable
      style={{
        flexShrink: 0,
        paddingRight: theme.spacing.xs,
      }}
      onPress={onPress}
      hitSlop={10}>
      <View
        style={{
          width: 18,
          height: 18,
          borderWidth: 1,
          borderRadius: 999,
          borderColor: theme.colors.foreground,
          backgroundColor: complete ? theme.colors.foreground : 'transparent',
        }}
      />
    </Pressable>
  );
}
