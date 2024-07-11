import React, { useState, useRef } from 'react'
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'
import i18n from '@/Translations'
import { CustomButton } from '@/Components'
import { useDispatch, useSelector } from 'react-redux'
import { myLanguage } from '@/Store/Action'

const LanguageModal = ({
  modalVisible,
  setModalVisible,
  userStatus,
  onLogoutPress,
}) => {
  const [activeWindow, setActiveWindow] = useState(1)
  const pan = useRef(new Animated.Value(0)).current
  const { t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const dispatch = useDispatch()
  const language = useSelector(state => state.user?.myLanguage)
  const handleLanguageSelect = language => {
    setSelectedLanguage(language)
  }

  const handleLanguageConfirm = () => {
    console.log('Selected Language:', selectedLanguage)
    if (selectedLanguage == 'Urdu') {
      i18n.changeLanguage('ur')
      dispatch(myLanguage('ur'))
      setModalVisible(false)
    } else {
      i18n.changeLanguage('en')
      dispatch(myLanguage('en'))
      setModalVisible(false)
    }
  }

  const toggleModal = () => {
    setVisible(!visible)
  }

  const handleWindowChange = windowNumber => {
    setActiveWindow(windowNumber)
  }

  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={[styles.closeBtn, { right: 10, top: 10 }]}
            onPress={() => setModalVisible(false)}
          >
            {/* <FontAwesome5 name="times-circle" size={30} color="#222" /> */}
            <Text style={styles.buttonText}> X </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}> {t('changeLanguage')} </Text>
          </View>
          <View>
            <Text style={styles.ModalText}> {t('pleaseSelectLanguage')} </Text>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.radioOption,
                (selectedLanguage === 'Urdu' && styles.selected) ||
                  (language === 'ur' && styles.selected),
              ]}
              onPress={() => {
                handleLanguageSelect('Urdu'),
                  dispatch(myLanguage('ur')),
                  setModalVisible(false)
              }}
            >
              <Text style={styles.optionText}>{t('urd')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioOption,
                (selectedLanguage === 'English' && styles.selected) ||
                  (language === 'en' && styles.selected),
              ]}
              onPress={() => {
                handleLanguageSelect('English'),
                  dispatch(myLanguage('en')),
                  setModalVisible(false)
              }}
            >
              <Text style={styles.optionText}> {t('eng')}</Text>
            </TouchableOpacity>
            {/* <CustomButton
              title="Confirm"
              onPress={handleLanguageConfirm}
              disabled={!selectedLanguage}
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: WP(7),
    marginVertical: WP(10),
    borderRadius: 20,
    alignSelf: 'center',
    width: '90%',
  },
  modalContent: {
    backgroundColor: Colors.appQuaternary,
    padding: 20,
    width: '100%',
    borderRadius: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 5,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: 'bold',
  },
  ModalText: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'center',
    color: Colors.appPrimary,
    marginBottom: WP(4),
  },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 8,
  },

  selected: {
    backgroundColor: Colors.appPrimary, // Highlight selected option
  },

  confirmButton: {
    backgroundColor: Colors.appPrimary,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  optionText: {
    color: Colors.white,
    padding: WP(4),
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonText: {
    color: Colors.white,
    padding: WP(1),
  },
  closeBtn: {
    zIndex: 99999999999999,
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: Colors.appPrimary,
    borderRadius: 12,
  },
})

export default LanguageModal
