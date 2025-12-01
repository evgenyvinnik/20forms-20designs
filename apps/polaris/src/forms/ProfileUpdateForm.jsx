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
    alert('Profile updated successfully!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <FormLayout.Group>
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
        </FormLayout.Group>
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
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={setBio}
          multiline={4}
          autoComplete="off"
        />
        <Button submit variant="primary">
          Update profile
        </Button>
      </FormLayout>
    </form>
  )
}

export default ProfileUpdateForm
