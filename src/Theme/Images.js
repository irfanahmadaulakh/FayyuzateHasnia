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

    // Tab Icons
    tabBarIcon: {
      home: require('@/Assets/Icons/Home.png'),
      readBook: require('@/Assets/Icons/ReadBook.png'),
      info: require('@/Assets/Icons/info.png'),
    },
  }
}
