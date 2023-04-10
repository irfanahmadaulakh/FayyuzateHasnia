import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'

// import { Container } from './styles';

const PhotoGallery = () => {
  return (
    <View style={styles.container}>
      <Text>PhotoGallery</Text>
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
})

export default PhotoGallery
