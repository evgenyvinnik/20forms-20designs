import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

function UserRegistrationForm({ theme }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-registration-fullname"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-registration-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-registration-username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength={3}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-registration-password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-user-registration-confirm-password"
          type="password"
          label="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-user-registration-terms"
          labels={{ label: 'I agree to the terms and conditions' }}
          checked={terms}
          onChange={() => setTerms(!terms)}
          required
        />
      </div>

      <div className="slds-form-element">
        <Button
          type="submit"
          variant="brand"
          label="Create account"
        />
      </div>
    </form>
  )
}

export default UserRegistrationForm
