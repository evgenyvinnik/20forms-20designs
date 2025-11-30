import { useEffect } from 'react'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import '@atlaskit/css-reset'
import JobApplicationForm from './form/JobApplicationForm'

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
      <JobApplicationForm />
    </div>
  )
}

export default App
