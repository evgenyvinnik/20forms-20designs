import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

function UserLoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-login-email"
          label="Email or username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-login-password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-user-login-remember"
          labels={{ label: 'Keep me signed in' }}
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Sign in" />
        <Button
          type="button"
          variant="neutral"
          label="Forgot password?"
          onClick={() => alert('Password reset link flow placeholder')}
          className="slds-m-left_x-small"
        />
      </div>
    </form>
  )
}

export default UserLoginForm
