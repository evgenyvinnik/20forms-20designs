import React from 'react'
import ReactDOM from 'react-dom/client'
import { appendIconComponentCache } from '@elastic/eui/es/components/icon/icon'

// Pre-cache commonly used icons to avoid dynamic import issues with Vite base path
import { icon as arrowDown } from '@elastic/eui/es/components/icon/assets/arrow_down'
import { icon as arrowUp } from '@elastic/eui/es/components/icon/assets/arrow_up'
import { icon as arrowLeft } from '@elastic/eui/es/components/icon/assets/arrow_left'
import { icon as arrowRight } from '@elastic/eui/es/components/icon/assets/arrow_right'
import { icon as calendar } from '@elastic/eui/es/components/icon/assets/calendar'
import { icon as clock } from '@elastic/eui/es/components/icon/assets/clock'
import { icon as check } from '@elastic/eui/es/components/icon/assets/check'
import { icon as cross } from '@elastic/eui/es/components/icon/assets/cross'
import { icon as eye } from '@elastic/eui/es/components/icon/assets/eye'
import { icon as eyeClosed } from '@elastic/eui/es/components/icon/assets/eye_closed'
import { icon as empty } from '@elastic/eui/es/components/icon/assets/empty'
import { icon as warning } from '@elastic/eui/es/components/icon/assets/warning'

appendIconComponentCache({
  arrowDown,
  arrowUp,
  arrowLeft,
  arrowRight,
  calendar,
  clock,
  check,
  cross,
  eye,
  eyeClosed,
  empty,
  warning,
  alert: warning,
})

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
