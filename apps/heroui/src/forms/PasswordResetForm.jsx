import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Account email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
        description="Instructions will be sent to this address if an account exists."
      />
      <Button type="submit" color="primary" shadow>
        Send reset instructions
      </Button>
    </form>
  )
}
