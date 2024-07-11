// import React, { useRef } from 'react'
// import { View, Text, StyleSheet, Dimensions } from 'react-native'
// import { Colors } from '@/Theme/Variables'
// import { WP } from '@/Theme/Responsive'
// import Pdf from 'react-native-pdf'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Modal } from 'react-native'
// import GetPageNoModal from '../../ReadBook/Components/GetPageNoModal'
// import PageStatusBar from '../../ReadBook/Components/PageStatusBar'
// import { CustomHeader, CustomLoader } from '@/Components'
// import { t } from 'i18next'

// let pages
// // import { Container } from './styles';

// const PhotoGallery = () => {
//   const pageRef = useRef(null)
//   const [showPageNumberModal, setShowPageNumberModal] = useState(false)
//   const [pagenumber, setPageNumber] = useState()
//   const source = { uri: 'bundle-assets://pdf/photoGallary.pdf' }

//   useEffect(() => {
//     console.log('pagerefff', pageRef.current)
//     pageRef?.current?.setPage(1)
//   }, [])

//   const onNextPress = () => {
//     pageRef?.current?.setPage(pages + 1)
//   }
//   const onBackPress = () => {
//     pageRef?.current?.setPage(pages - 1)
//   }
//   const onResetPagePress = () => {
//     pageRef?.current?.setPage(1)
//   }
//   const onPageNumberPress = () => {
//     setShowPageNumberModal(!showPageNumberModal)
//   }
//   const onCancelPress = () => {
//     setShowPageNumberModal(!showPageNumberModal)
//   }
//   const onSubmitPress = () => {
//     setShowPageNumberModal(!showPageNumberModal)
//     pageRef?.current?.setPage(parseInt(pagenumber))
//   }

//   return (
//     <View style={styles.container}>
//       <CustomHeader title={t('photoGallery')} />
//       <GetPageNoModal
//         showPageNumberModal={showPageNumberModal}
//         setShowPageNumberModal={setShowPageNumberModal}
//         number={pagenumber}
//         setNumber={setPageNumber}
//         onSubmitPress={onSubmitPress}
//         onCancelPress={onCancelPress}
//       />
//       <PageStatusBar
//         onNextPress={onNextPress}
//         onBackPress={onBackPress}
//         onResetPagePress={onResetPagePress}
//         onPageNumberPress={onPageNumberPress}
//       />
//       <Pdf
//         trustAllCerts={false}
//         ref={pageRef}
//         source={source}
//         enablePaging={true}
//         renderActivityIndicator={() => <CustomLoader />}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`Number of pages: ${numberOfPages}`)
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`Current page: ${page}`)
//           pages = page
//         }}
//         onError={error => {
//           console.log(error)
//         }}
//         onPressLink={uri => {
//           console.log(`Link pressed: ${uri}`)
//         }}
//         style={styles.pdf}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: Colors.appLight,
//     paddingTop: WP(5),
//   },
//   pdf: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
//   goToPageModal: {
//     width: WP('60'),
//     height: WP('90'),
//     borderRadius: 5,
//     marginHorizontal: 10,

//     backgroundColor: Colors.appLight,
//   },
// })

// export default PhotoGallery

// // export default PhotoGallery

import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PhotoGallery from './components/PhotoGallery'
import { CustomHeader } from '@/Components'
import { t } from 'i18next'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'

const PhotoGalleryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomHeader title={t('photoGallery')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PhotoGallery />
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
})

export default PhotoGalleryScreen
