import React from 'react';
import {Platform, Pressable, KeyboardAvoidingView, View} from 'react-native';

import {useThemeContext} from '../Theme.provider';
import Button from './base/Button';
import Text from './base/Text';
import Row from './base/Row';
import Separator from './base/Separator';

interface ModalLayoutProps {
  children: React.ReactNode;
  title: string;
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
  title,
  closeModal,
}: {
  children: React.ReactNode;
  title: string;
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
      <Row justifyContent="space-between">
        <Text type="subHeading">{title}</Text>
        <Button
          onPress={closeModal}
          hitSlop={10}
          icon="Close"
          padding="xxs"
          borderRadius={999}
        />
      </Row>

      <Separator />

      {children}
    </View>
  );
}

export default function ModalLayout({
  children,
  title,
  closeModal,
}: ModalLayoutProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ModalContainer>
        <ScreenFiller onPress={closeModal} />
        <ModalContent title={title} closeModal={closeModal}>
          {children}
        </ModalContent>
      </ModalContainer>
    </KeyboardAvoidingView>
  );
}
