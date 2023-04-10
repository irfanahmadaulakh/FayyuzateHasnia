import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '../Hooks'
import { goBack } from '../Navigators/utils'

// import { Container } from './styles';

const CustomHeader = ({ title }) => {
  const { Images } = useTheme()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => goBack()}>
        <Image source={Images.backIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WP('100'),
    height: WP('10'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: WP('5.5'),
    fontWeight: 'bold',
    color: Colors.appPrimary,
  },
  iconContainer: {
    position: 'absolute',
    top: WP('1.4'),
    left: WP('12'),
    width: WP('8'),
    height: WP('8'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: WP('6'),
    height: WP('6'),
    resizeMode: 'contain',
  },
})

export default CustomHeader
