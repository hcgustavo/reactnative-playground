import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

type DarkBackgroundModalProps = {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  closeOnBackdropPress?: boolean;
  contentStyle?: ViewStyle;
};

const DarkBackgroundModal: React.FC<DarkBackgroundModalProps> = ({
  visible,
  onClose,
  children,
  title,
  closeOnBackdropPress = true,
  contentStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback
        onPress={closeOnBackdropPress ? onClose : undefined}
      >
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalContent, contentStyle]}>
              {title ? <Text style={styles.title}>{title}</Text> : null}
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DarkBackgroundModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // darkens background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
});