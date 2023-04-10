import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { navigate } from '@/Navigators/utils'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { CustomButton, Brand } from '@/Components'

const Onboarding = () => {
  const { Images } = useTheme()
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Brand />
      <View style={styles.imageContainer}>
        <Image source={Images.mosque} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={t('getStarted')}
          onPress={() => navigate('Login')}
        ></CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appLight,
  },
  title: {
    fontSize: WP('7'),
    color: Colors.appPrimary,
    fontWeight: '800',
    marginBottom: WP('10'),
  },
  imageContainer: {
    backgroundColor: Colors.appPrimary,
    width: WP('78'),
    height: WP('110'),
    borderRadius: WP('6'),
  },
  image: {
    width: WP('80'),
    height: WP('80'),
    marginTop: WP('25'),
    tintColor: Colors.white,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: WP('5'),
  },
})

export default Onboarding
