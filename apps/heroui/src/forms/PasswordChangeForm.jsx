import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Current password"
        variant="bordered"
        isRequired
        type="password"
        name="currentPassword"
      />
      <Input
        label="New password"
        variant="bordered"
        isRequired
        type="password"
        minLength={8}
        name="newPassword"
      />
      <Input
        label="Confirm new password"
        variant="bordered"
        isRequired
        type="password"
        minLength={8}
        name="confirmPassword"
      />
      <Button type="submit" color="primary" shadow>
        Update password
      </Button>
    </form>
  )
}
