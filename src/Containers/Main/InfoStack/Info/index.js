import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native'
import { Colors } from '@/Theme/Variables'
import InfoOptions from './Components/InfoOptions'
import { useTranslation } from 'react-i18next'
import { navigate, goBack } from '@/Navigators/utils'
import { WP } from '@/Theme/Responsive'
import RNExitApp from 'react-native-exit-app'
import { useState } from 'react'
import LanguageModal from './Components/LanguageModal'
import { CustomHeader } from '@/Components'

// import { Container } from './styles';

const Info = () => {
  const { t } = useTranslation()
  const [modalVisible, setModalVisible] = useState(false)

  const exitApp = () => {
    Alert.alert('', t('areYou'), [
      {
        text: t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: t('ok'), onPress: () => RNExitApp.exitApp() },
    ])
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CustomHeader title={t('info')} titleOnly={'titleOnly'} />
        <LanguageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <InfoOptions
          title={t('photoGallery')}
          onPress={() => navigate('PhotoGallery')}
        />
        <InfoOptions
          title={t('notification')}
          onPress={() => navigate('Notification')}
        />
        <InfoOptions
          title={t('mapNavigation')}
          onPress={() => navigate('MapNavigation')}
        />
        {/* <InfoOptions
          title={t('privacySecurity')}
          onPress={() => navigate('Privacy')}
        /> */}
        <InfoOptions
          title={t('helpSupport')}
          onPress={() => navigate('Support')}
        />
        <InfoOptions
          title={t('changeLanguage')}
          onPress={() => setModalVisible(true)}
        />
        {/* <InfoOptions title={t('about')} onPress={() => navigate('About')} /> */}
        <InfoOptions title={t('exit')} onPress={() => exitApp()} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appLight,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: WP('5'),
    backgroundColor: Colors.appLight,
  },
})

export default Info
