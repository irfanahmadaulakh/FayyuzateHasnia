import React from 'react'
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { CustomButton, CustomHeader } from '@/Components'
import { t } from 'i18next'

// import { Container } from './styles';

const MapNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomHeader title={t('mapNavigation')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textView}>
            <Text style={styles.addresStyle}>{t('addressHeading')}</Text>
            <Text style={styles.description}>{t('address')}</Text>
          </Text>
          <CustomButton
            isIcon
            title={t('See on Google map')}
            onPress={() =>
              Linking.openURL(
                'google.navigation:q=31.171603867062004+71.02901550443933',
              )
            }
          />
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
  addresStyle: {
    margin: WP('3'),
    lineHeight: WP('5'),
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.black,
  },
  textView: {
    flexDirection: 'row',
    marginTop: WP('10'),
  },
})

export default MapNavigation
