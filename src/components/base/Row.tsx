import React from 'react';
import {FlexStyle, View} from 'react-native';

interface RowProps {
  children: React.ReactNode;
  justifyContent?: FlexStyle['justifyContent'];
}

export default function Row({children, justifyContent}: RowProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: justifyContent,
      }}>
      {children}
    </View>
  );
}
