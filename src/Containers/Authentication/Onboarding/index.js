import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { navigate } from '@/Navigators/utils'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '@/Hooks'
import { useTranslation } from 'react-i18next'
import { CustomButton, Brand } from '@/Components'
import { changeLanguage } from 'i18next'
import i18n from '@/Translations'
import { useDispatch } from 'react-redux'
import { myLanguage } from '@/Store/Action/users'

const Onboarding = () => {
  const { Images } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const changeLanguage = () => {
    navigate('Login')
    i18n.changeLanguage('ur')
    dispatch(myLanguage('ur'))
  }
  const changeLanguageEng = () => {
    navigate('Login')
    i18n.changeLanguage('en')
    dispatch(myLanguage('en'))
  }

  return (
    <View style={styles.container}>
      <Brand />
      <View style={styles.imageContainer}>
        <Image source={Images.mosque} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={t('eng')}
          onPress={() => changeLanguageEng()}
          width={'3'}
        />
        <CustomButton
          title={t('urd')}
          onPress={() => changeLanguage()}
          width={'3'}
        />
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
    marginTop: WP('-4'),
    flexDirection: 'row',
    width: WP('75'),
    justifyContent: 'space-evenly',
    paddingHorizontal: WP('2'),
  },
})

export default Onboarding
