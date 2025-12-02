import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Button from '@salesforce/design-system-react/components/button'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link sent!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="slds-m-bottom_medium" style={{ color: '#16325c' }}>
        Request a password reset link via email.
      </p>

      <div className="slds-form-element slds-m-bottom_medium">
        <Input
          id="slds-password-reset-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Send reset link" />
      </div>
    </form>
  )
}

export default PasswordResetForm
