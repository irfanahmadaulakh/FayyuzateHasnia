import React from 'react'
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { CustomHeader } from '@/Components'
import { t } from 'i18next'

// import { Container } from './styles';

const Support = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomHeader title={t('helpSupport')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            {t('helpSupportText')}
            <Text
              style={styles.linkedText}
              onPress={() => Linking.openURL('mailto:irfanoulakh@gmail.com')}
            >
              {t('myEmail')}
            </Text>
          </Text>
        </ScrollView>
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
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    margin: WP('7'),
    width: WP('85'),
    borderRadius: WP('5'),
    padding: WP('3'),
    backgroundColor: Colors.white,
  },
  description: {
    margin: WP('3'),
    lineHeight: WP('5'),
    textAlign: 'center',
  },
  linkedText: {
    color: Colors.blue,
    textDecorationLine: 'underline',
  },
})

export default Support
