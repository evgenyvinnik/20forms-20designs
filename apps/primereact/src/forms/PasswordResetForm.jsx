import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <p style={{ marginBottom: '1rem' }}>
        Request a password reset link via email.
      </p>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-password-reset-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-password-reset-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" label="Send reset link" />
    </form>
  )
}

export default PasswordResetForm
