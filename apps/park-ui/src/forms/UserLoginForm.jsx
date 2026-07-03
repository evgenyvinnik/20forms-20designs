import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function UserLoginForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
      <Field.Label className="park-label">Email or username</Field.Label>
      <Field.Input className="park-input" name="identifier" type="text"     required />
      
    </Field.Root>
<Field.Root required className="park-field">
      <Field.Label className="park-label">Password</Field.Label>
      <Field.Input className="park-input" name="password" type="password"     required />
      
    </Field.Root>
<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
      <input type="checkbox" name="remember"   />
      Keep me signed in
    </label>
<button type="button" style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: '0.875rem' }} onClick={() => alert('Password reset link flow placeholder')}>
      Forgot password?
    </button>
<button type="submit" className="park-button">Sign in</button>
    </form>
  )
}