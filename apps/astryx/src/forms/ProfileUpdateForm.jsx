import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        name="displayName"
        type="text"
        label="Display name"
        defaultValue="Jane Doe"
        required
      />
      <TextInput
        name="email"
        type="email"
        label="Public email"
        defaultValue="jane@example.com"
        required
      />
      <TextInput
        name="bio"
        label="Bio"
        multiline
        rows={3}
        defaultValue="Software developer based in San Francisco."
      />
      <Button type="submit" variant="primary">
        Save profile
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
