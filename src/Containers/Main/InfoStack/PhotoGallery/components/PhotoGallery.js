import PageStatusBar from '@/Containers/Main/ReadBook/Components/PageStatusBar'
import { useTheme } from '@/Hooks'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'
import React, { useState } from 'react'
import { View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'

const images = [
  require('../../../../../Assets/PhotoGallary/image1.jpg'),
  require('../../../../../Assets/PhotoGallary/image2.jpg'),
  require('../../../../../Assets/PhotoGallary/image3.jpg'),
  require('../../../../../Assets/PhotoGallary/image4.jpg'),
  require('../../../../../Assets/PhotoGallary/image5.jpg'),
  require('../../../../../Assets/PhotoGallary/image6.jpg'),
]

const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handleBack = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }
  const { Images } = useTheme()
  return (
    <View style={styles.container}>
      <Image source={images[currentImageIndex]} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View style={styles.containerIcons}>
          <TouchableOpacity
            style={styles.round}
            onPress={handleBack}
            disabled={currentImageIndex === 0}
          >
            <Image source={Images.backPageIcon} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.round}
            onPress={handleNext}
            disabled={currentImageIndex === images.length - 1}
          >
            {/* <Text style={styles.textStyle}> Next</Text> */}
            <Image source={Images.nextIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: WP('10'),
  },
  image: {
    width: 320,
    height: 380,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: WP('100'),
  },
  containerIcons: {
    flexDirection: 'row',
    width: WP('80'),
    justifyContent: 'space-between',
    paddingHorizontal: WP('5'),
    borderRadius: WP('3'),
  },
  round: {
    width: WP('13'),
    height: WP('13'),
    borderRadius: WP('100'),
    backgroundColor: Colors.appQuaternary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: WP('9'),
    height: WP('9'),
  },
})

export default PhotoGallery
