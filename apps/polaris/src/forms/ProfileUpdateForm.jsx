import { useState, useCallback } from 'react'
import { FormLayout, TextField, Button } from '@shopify/polaris'

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
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="First name"
          type="text"
          value={firstName}
          onChange={setFirstName}
          autoComplete="given-name"
          requiredIndicator
        />
        <TextField
          label="Last name"
          type="text"
          value={lastName}
          onChange={setLastName}
          autoComplete="family-name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Phone number"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          requiredIndicator
        />
        <TextField
          label="Short bio"
          value={bio}
          onChange={setBio}
          multiline={3}
          autoComplete="off"
          requiredIndicator
        />
        <Button submit variant="primary">
          Save changes
        </Button>
      </FormLayout>
    </form>
  )
}

export default ProfileUpdateForm
