import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

function ProfileUpdateForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Profile updated!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="First name">
            <EuiFieldText
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Last name">
            <EuiFieldText
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFormRow label="Email address">
        <EuiFieldText
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Phone number">
        <EuiFieldText
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Short bio">
        <EuiTextArea
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save changes
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default ProfileUpdateForm
