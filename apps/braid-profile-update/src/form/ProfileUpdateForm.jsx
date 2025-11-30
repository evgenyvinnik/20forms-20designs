import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Textarea, Button } from 'braid-design-system'

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
      <Stack space="medium">
        <TextField
          id="braid-profile-first-name"
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <TextField
          id="braid-profile-last-name"
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <TextField
          id="braid-profile-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          id="braid-profile-phone"
          label="Phone number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          required
        />

        <Textarea
          id="braid-profile-bio"
          label="Short bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          lines={3}
          required
        />

        <Box>
          <Button type="submit">Save changes</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
