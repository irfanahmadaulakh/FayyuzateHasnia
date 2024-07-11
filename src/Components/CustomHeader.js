import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '../Hooks'
import { goBack } from '../Navigators/utils'

// import { Container } from './styles';

const CustomHeader = ({ title, showBell, onDelPress, titleOnly }) => {
  const { Images } = useTheme()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => goBack()}>
        {!titleOnly && <Image source={Images.backIcon} style={styles.icon} />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {showBell && (
        <TouchableOpacity style={styles.iconContainerSec} onPress={onDelPress}>
          <Image source={Images.resetIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
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
  iconContainerSec: {
    position: 'absolute',
    top: WP('1.4'),
    right: WP('12'),
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
