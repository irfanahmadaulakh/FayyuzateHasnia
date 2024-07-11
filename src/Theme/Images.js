/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/logo.png'),
    mosque: require('@/Assets/Images/mosque_bg.png'),
    imageBackground: require('@/Assets/Images/imgBackground.png'),
    settings: require('@/Assets/Icons/Settings.png'),
    backIcon: require('@/Assets/Icons/BackIcon.png'),
    mapIcon: require('@/Assets/Icons/mapIcon.png'),
    backPageIcon: require('@/Assets/Icons/back.png'),
    nextIcon: require('@/Assets/Icons/next.png'),
    resetIcon: require('@/Assets/Icons/reset.png'),
    page_numberIcon: require('@/Assets/Icons/page_number.png'),
    homeBookIcon: require('@/Assets/Icons/bookIcon.png'),
    homeBookImage: require('@/Assets/Images/homeBookImage.jpg'),
    bell: require('@/Assets/Icons/bell.png'),
    // Tab Icons   bell.png
    tabBarIcon: {
      home: require('@/Assets/Icons/Home.png'),
      readBook: require('@/Assets/Icons/ReadBook.png'),
      info: require('@/Assets/Icons/info.png'),
    },
  }
}
