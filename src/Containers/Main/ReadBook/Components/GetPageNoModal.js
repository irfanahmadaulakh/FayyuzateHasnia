import { CustomButton, CustomTextInput } from '@/Components'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'
import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, View, Text, StyleSheet } from 'react-native'

const GetPageNoModal = ({
  showPageNumberModal,
  setShowPageNumberModal,
  number,
  setNumber,
  onSubmitPress,
  onCancelPress,
}) => {
  const { t } = useTranslation()
  return (
    <Modal
      visible={showPageNumberModal}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.subTitle}>{t('enterPageNo')}</Text>
          <CustomTextInput
            placeholder={t('pageNumber')}
            value={number}
            onChangeText={text => setNumber(text)}
            keyboardType="numeric"
          />
          <CustomButton title={t('submit')} onPress={onSubmitPress} />
          <CustomButton title={t('cancel')} onPress={onCancelPress} />
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  subTitle: {
    fontSize: WP('6'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    fontWeight: '400',
    marginBottom: WP('3'),
    alignItems: 'center',
  },
})
export default GetPageNoModal
