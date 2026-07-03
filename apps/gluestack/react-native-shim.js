import * as RNW from 'react-native-web'

module.exports = {
  ...RNW,
  InputAccessoryView: RNW.View,
  TurboModuleRegistry: {
    get: () => null,
    getEnforcing: () => ({}),
  },
  __esModule: true,
}
