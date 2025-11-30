import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Inline } from '@atlaskit/primitives'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-user-login-email">Email or username</Label>
          <Textfield
            id="atlaskit-user-login-email"
            name="identifier"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-login-password">Password</Label>
          <Textfield
            id="atlaskit-user-login-password"
            name="password"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="remember"
            label="Keep me signed in"
          />
        </Box>
        <Inline space="space.100">
          <Button type="submit" appearance="primary">Sign in</Button>
          <Button
            appearance="subtle"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default UserLoginForm
