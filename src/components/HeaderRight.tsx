import React from 'react';

import {useThemeContext} from '../Theme.provider';
import Button from './base/Button';

export default function HeaderRight() {
  const {toggleTheme} = useThemeContext();

  return (
    <Button padding="xs" onPress={toggleTheme}>
      Switch theme
    </Button>
  );
}
