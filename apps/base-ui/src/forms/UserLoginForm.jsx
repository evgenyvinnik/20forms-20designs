import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function UserLoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Email or username</Field.Label>
        <Field.Control
          className="base-input"
          name="identifier"
          type="text"
          required
        />
      </Field.Root>
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Password</Field.Label>
        <Field.Control
          className="base-input"
          name="password"
          type="password"
          required
        />
      </Field.Root>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="remember" />
        Keep me signed in
      </label>
      <button
        type="button"
        style={{
          background: 'none',
          border: 'none',
          color: '#2563eb',
          cursor: 'pointer',
          fontSize: '0.875rem',
        }}
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </button>
      <button type="submit" className="base-button">
        Sign in
      </button>
    </form>
  )
}
