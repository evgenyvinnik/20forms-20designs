import { useState } from 'react'
import { TextInput, TextArea, Button } from '@astryxdesign/core'

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
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-profile-first-name"
        name="firstName"
        type="text"
        label="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-profile-last-name"
        name="lastName"
        type="text"
        label="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-profile-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        id="astryx-profile-phone"
        name="phone"
        type="tel"
        label="Phone number"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <TextArea
        id="astryx-profile-bio"
        name="bio"
        label="Short bio"
        rows={3}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
      />

      <Button type="submit" variant="primary">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
