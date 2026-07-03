import { useState } from 'react'
import { Box, Button, Flex, TextArea, TextField } from 'gestalt'

function ProfileUpdateForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-profile-first-name"
          label="First name"
          onChange={({ value }) => setFirstName(value)}
          type="text"
          value={firstName}
        />
        <TextField
          id="gestalt-profile-last-name"
          label="Last name"
          onChange={({ value }) => setLastName(value)}
          type="text"
          value={lastName}
        />
        <TextField
          id="gestalt-profile-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-profile-phone"
          label="Phone number"
          onChange={({ value }) => setPhone(value)}
          type="tel"
          value={phone}
        />
        <TextArea
          id="gestalt-profile-bio"
          label="Short bio"
          onChange={({ value }) => setBio(value)}

          rows={3}
          value={bio}
        />
        <Box>
          <Button color="red" text="Save changes" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default ProfileUpdateForm
