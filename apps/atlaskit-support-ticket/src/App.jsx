import '@atlaskit/css-reset'
import { setGlobalTheme, token } from '@atlaskit/tokens'
import SupportTicketForm from './form/SupportTicketForm'

setGlobalTheme({ light: 'light', dark: 'dark', colorMode: 'auto' })

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: token('space.200', '16px'),
        backgroundColor: token('elevation.surface', '#FFFFFF'),
        color: token('color.text', '#172B4D'),
      }}
    >
      <SupportTicketForm />
    </div>
  )
}

export default App
