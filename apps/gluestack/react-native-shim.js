import * as RNW from 'react-native-web'
import React from 'react'

const defaultObj = RNW.default || RNW

export default defaultObj

export const findNodeHandle = (node) => node
export const processColor = (color) => color
export const InputAccessoryView = RNW.View || 'div'
export const KeyboardAvoidingView =
  RNW.KeyboardAvoidingView || RNW.View || 'div'
export const VirtualizedList = RNW.FlatList || RNW.View || 'div'

export const requireNativeComponent = (name) => {
  const Dummy = (props) => React.createElement('div', props)
  Dummy.displayName = name
  return Dummy
}

export const codegenNativeComponent = (name) => {
  const Dummy = (props) => React.createElement('div', props)
  Dummy.displayName = name
  return Dummy
}

export const Animated = RNW.Animated || {
  View: RNW.View || 'div',
  Text: RNW.Text || 'span',
  createAnimatedComponent: (c) => c,
  Value: function () {
    return { setValue: () => {} }
  },
  timing: () => ({ start: (cb) => cb && cb() }),
}

export const TurboModuleRegistry = {
  get: () => null,
  getEnforcing: () => ({}),
}

export const {
  ActivityIndicator,
  Button,
  CheckBox,
  Image,
  ImageBackground,
  Modal,
  Picker,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  NativeModules,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  VirtualisedList,
  FlatList,
  AccessibilityInfo,
  AppRegistry,
  AppState,
  Appearance,
  AppearanceProvider,
  AsyncStorage,
  BackHandler,
  Clipboard,
  DeviceInfo,
  Dimensions,
  Easing,
  EscapeRow,
  I18nManager,
  InteractionManager,
  Keyboard,
  LayoutAnimation,
  Linking,
  NativeEventEmitter,
  PanResponder,
  PixelRatio,
  Platform,
  Share,
  StyleSheet,
  UIManager,
  Vibration,
  animated,
  useColorScheme,
  useWindowDimensions,
} = RNW
