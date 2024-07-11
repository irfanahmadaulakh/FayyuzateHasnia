import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { Brand } from '@/Components'
import { CustomTextInput, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAuth } from '@/Store/Action'

const Login = () => {
  const { t } = useTranslation()
  const { Images } = useTheme()
  const dispatch = useDispatch()

  const [name, setName] = useState()

  const onLoginPress = () => {
    dispatch(userAuth(name))
    navigate('Main')
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.imageBackground}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Brand />
        <View style={styles.secondaryContainer}>
          <Text style={styles.subTitle}>{t('enterName')}</Text>
          <CustomTextInput
            placeholder={t('name')}
            value={name}
            onChangeText={text => setName(text)}
          />
          <CustomButton title={t('submit')} onPress={onLoginPress} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    width: WP('90'),
    marginTop: WP('10'),
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: WP('7'),
    color: Colors.appSecondary,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: WP('6'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    fontWeight: '400',
    marginBottom: WP('3'),
  },
})

export default Login
