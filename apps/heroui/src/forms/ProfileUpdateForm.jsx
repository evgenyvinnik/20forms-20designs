import { useState } from 'react'
import { Input, Button, Textarea } from '@heroui/react'

export default function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Display name"
        variant="bordered"
        defaultValue="Jane Doe"
        isRequired
        name="displayName"
      />
      <Input
        label="Public email"
        variant="bordered"
        defaultValue="jane@example.com"
        isRequired
        type="email"
        name="email"
      />
      <Textarea
        label="Bio"
        variant="bordered"
        defaultValue="Software developer based in San Francisco."
        minRows={3}
        name="bio"
      />
      <Button type="submit" color="primary" shadow>
        Save profile
      </Button>
    </form>
  )
}
