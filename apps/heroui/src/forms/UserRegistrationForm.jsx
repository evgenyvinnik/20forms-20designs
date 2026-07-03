import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

export default function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input label="Full name" variant="bordered" isRequired name="fullName" />
      <Input
        label="Email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Input
        label="Username"
        variant="bordered"
        isRequired
        minLength={3}
        name="username"
      />
      <Input
        label="Password"
        variant="bordered"
        isRequired
        type="password"
        minLength={8}
        name="password"
      />
      <Input
        label="Confirm password"
        variant="bordered"
        isRequired
        type="password"
        minLength={8}
        name="confirmPassword"
      />
      <Checkbox isRequired name="terms">
        I agree to the terms and conditions
      </Checkbox>
      <Button type="submit" color="primary" shadow>
        Create account
      </Button>
    </form>
  )
}
