import React from 'react';

import {useThemeContext} from '../../Theme.provider';
import {
  AddIcon,
  AddTaskIcon,
  DarkModeIcon,
  DeleteIcon,
  LightModeIcon,
  SaveIcon,
  CloseIcon,
} from './Icons';
import {theme as themeTemplate} from '../../theme';

export type IconNames =
  | 'Add'
  | 'AddTask'
  | 'LightMode'
  | 'DarkMode'
  | 'Delete'
  | 'Save'
  | 'Close';

interface IconProps {
  name: IconNames;
  size: keyof typeof themeTemplate.spacing;
  color: keyof typeof themeTemplate.colors;
}

export default function Icon({name, size, color}: IconProps) {
  const {theme} = useThemeContext();

  // Determine size
  const determinedSize = theme.spacing[size];

  // Determine color
  const determinedColor = theme.colors[color];

  switch (name) {
    case 'Add':
      return <AddIcon size={determinedSize} color={determinedColor} />;
    case 'AddTask':
      return <AddTaskIcon size={determinedSize} color={determinedColor} />;
    case 'LightMode':
      return <LightModeIcon size={determinedSize} color={determinedColor} />;
    case 'DarkMode':
      return <DarkModeIcon size={determinedSize} color={determinedColor} />;
    case 'Delete':
      return <DeleteIcon size={determinedSize} color={determinedColor} />;
    case 'Save':
      return <SaveIcon size={determinedSize} color={determinedColor} />;
    case 'Close':
      return <CloseIcon size={determinedSize} color={determinedColor} />;
    default:
      return null;
  }
}
