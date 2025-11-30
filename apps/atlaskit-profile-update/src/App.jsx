import { useEffect } from 'react'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import ProfileUpdateForm from './form/ProfileUpdateForm'

function App() {
  useEffect(() => {
    setGlobalTheme({ colorMode: 'light' })
  }, [])

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
      <ProfileUpdateForm />
    </div>
  )
}

export default App
