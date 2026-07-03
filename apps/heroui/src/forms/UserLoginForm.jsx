import { useState } from 'react'
import { Input, Button, Checkbox } from '@heroui/react'

export default function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Email or username"
        variant="bordered"
        isRequired
        type="text"
        name="identifier"
      />
      <Input
        label="Password"
        variant="bordered"
        isRequired
        type="password"
        name="password"
      />
      <Checkbox defaultSelected name="remember">
        Keep me signed in
      </Checkbox>
      <Button type="submit" color="primary" shadow>
        Sign in
      </Button>
      <Button
        type="button"
        variant="light"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </form>
  )
}
