import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import AdvancedSearchForm from './form/AdvancedSearchForm'

setGlobalTheme({ colorMode: 'light' })

function App() {
  return (
    <div
      style={{
        padding: token('space.300', '24px'),
        fontFamily: token(
          'font.family.sans',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
        ),
      }}
    >
      <AdvancedSearchForm />
    </div>
  )
}

export default App
