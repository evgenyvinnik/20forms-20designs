import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function ProfileUpdateForm() {
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
        name="firstName"
        type="text"
        label="First name"
        defaultValue="Jane"
        required
      />
      <TextInput
        name="lastName"
        type="text"
        label="Last name"
        defaultValue="Doe"
        required
      />
      <TextInput
        name="email"
        type="email"
        label="Email address"
        defaultValue="jane@example.com"
        required
      />
      <TextInput name="phone" type="tel" label="Phone number" />
      <TextInput
        name="bio"
        label="Short bio"
        multiline
        rows={3}
        defaultValue="Software developer based in San Francisco."
      />
      <Button type="submit" variant="primary">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
