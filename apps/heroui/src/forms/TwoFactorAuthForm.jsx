import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

export default function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('2FA code submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="6-digit security code"
        variant="bordered"
        isRequired
        maxLength={6}
        placeholder="123456"
        name="code"
        description="Enter the code from your authenticator app."
      />
      <Checkbox name="trustDevice">Trust this browser for 30 days</Checkbox>
      <Button type="submit" color="primary" shadow>
        Verify code
      </Button>
    </form>
  )
}
