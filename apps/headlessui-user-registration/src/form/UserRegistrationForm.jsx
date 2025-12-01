import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'

function UserRegistrationForm() {
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-user-registration-fullname"
        >
          Full name
        </Label>
        <input
          id="headlessui-user-registration-fullname"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-user-registration-email">
          Email address
        </Label>
        <input
          id="headlessui-user-registration-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-user-registration-username"
        >
          Username
        </Label>
        <input
          id="headlessui-user-registration-username"
          name="username"
          type="text"
          className="input"
          minLength={3}
          required
        />
      </Field>

      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-user-registration-password"
        >
          Password
        </Label>
        <input
          id="headlessui-user-registration-password"
          name="password"
          type="password"
          className="input"
          minLength={8}
          required
        />
      </Field>

      <Field className="form-field">
        <Label
          className="label"
          htmlFor="headlessui-user-registration-confirm-password"
        >
          Confirm password
        </Label>
        <input
          id="headlessui-user-registration-confirm-password"
          name="confirmPassword"
          type="password"
          className="input"
          minLength={8}
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={agreeTerms}
          onChange={setAgreeTerms}
          name="agreeTerms"
          className="checkbox"
        >
          {agreeTerms && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">
          I agree to the terms and conditions
        </Label>
      </Field>

      <button type="submit" className="button button-primary">
        Create account
      </button>
    </form>
  )
}

export default UserRegistrationForm
