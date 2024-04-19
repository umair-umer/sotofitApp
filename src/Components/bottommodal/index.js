import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomModal, ModalContent } from 'react-native-modals';

const Bmodal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.showModalButton}
      >
        <Text>Show Bottom Modal</Text>
      </TouchableOpacity>
      
      <BottomModal
        visible={visible}
        onTouchOutside={() => setVisible(false)}
        height={0.4} // Height of the modal: 0.4 times the screen height
        width={1} // Width of the modal: full width
        onSwipeOut={() => setVisible(false)}
        // modalTitle={<ModalTitle title="Demo Bottom Modal" />}
      >
        <ModalContent>
          {/* Your content here */}
          <Text>This is a bottom modal!</Text>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.closeModalButton}
          >
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModalButton: {
    padding: 10,
    backgroundColor: '#4f83cc',
    borderRadius: 5,
  },
  closeModalButton: {
    padding: 10,
    backgroundColor: '#f95f62',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Bmodal;
