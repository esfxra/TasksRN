import React from 'react';
import {Platform, Pressable, KeyboardAvoidingView, View} from 'react-native';

import {useThemeContext} from '../Theme.provider';
import Button from './base/Button';
import Row from './base/Row';

interface ModalLayoutProps {
  children: React.ReactNode;
  closeModal: () => void;
}

function ModalContainer({children}: {children: React.ReactNode}) {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#00000040',
      }}>
      {children}
    </View>
  );
}

function ScreenFiller({onPress}: {onPress: () => void}) {
  return <Pressable style={{flex: 1}} onPress={onPress} />;
}

function ModalContent({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) {
  const {theme} = useThemeContext();

  return (
    <View
      style={{
        flexShrink: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 50,
        paddingHorizontal: theme.spacing.m,
        backgroundColor: theme.colors.background,
      }}>
      <Row justifyContent="flex-end">
        <Button
          onPress={closeModal}
          hitSlop={10}
          icon="Close"
          padding="xxs"
          borderRadius={999}
        />
      </Row>
      {children}
    </View>
  );
}

export default function ModalLayout({children, closeModal}: ModalLayoutProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ModalContainer>
        <ScreenFiller onPress={closeModal} />
        <ModalContent closeModal={closeModal}>{children}</ModalContent>
      </ModalContainer>
    </KeyboardAvoidingView>
  );
}
