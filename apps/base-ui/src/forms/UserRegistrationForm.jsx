import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function UserRegistrationForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
      <Field.Label className="base-label">Full name</Field.Label>
      <Field.Control className="base-input" name="fullName" type="text"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Email address</Field.Label>
      <Field.Control className="base-input" name="email" type="email"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Username</Field.Label>
      <Field.Control className="base-input" name="username" type="text"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Password</Field.Label>
      <Field.Control className="base-input" name="password" type="password"     required />
      
    </Field.Root>
<Field.Root required className="base-field">
      <Field.Label className="base-label">Confirm password</Field.Label>
      <Field.Control className="base-input" name="confirmPassword" type="password"     required />
      
    </Field.Root>
<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
      <input type="checkbox" name="terms"  required />
      I agree to the terms and conditions
    </label>
<button type="submit" className="base-button">Create account</button>
    </form>
  )
}