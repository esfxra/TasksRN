import React from 'react';
import {
  Platform,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  View,
} from 'react-native';

import {useThemeContext} from '../Theme.provider';
import Button from './base/Button';
import Row from './base/Row';
import Text from './base/Text';

interface ModalLayoutProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const styles = StyleSheet.create({
  modalContainer: {
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
  },
  modalFiller: {
    flex: 1,
  },
  modalCard: {
    flexShrink: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
});

export default function ModalLayout({children, closeModal}: ModalLayoutProps) {
  const {theme} = useThemeContext();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.modalContainer}>
        {/* Fill the empty space on top of the card with a transparent pressable */}
        <Pressable style={styles.modalFiller} onPress={closeModal} />
        {/* Modal card, which contains the content passed as a React node */}
        <View
          style={[
            styles.modalCard,
            {
              paddingHorizontal: theme.spacing.m,
              backgroundColor: theme.colors.background,
            },
          ]}>
          <Row justifyContent="flex-end">
            <Button onPress={closeModal}>Close</Button>
          </Row>
          {children}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
