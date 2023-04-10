import React from 'react'
import { ActivityIndicator, StyleSheet, View, Modal } from 'react-native'
import { Colors } from '../Theme/Variables'

const CustomLoader = () => {
  return (
    <Modal transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <ActivityIndicator size="large" color={Colors.appPrimary} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalInner: {
    // backgroundColor: '#ffff',
    shadowOpacity: 0.2,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomLoader
