import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { ParagraphSmall } from 'baseui/typography'
import { useState } from 'react'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <ParagraphSmall>
          Request a password reset link via email.
        </ParagraphSmall>
        <FormControl label="Email address">
          <Input
            id="baseweb-password-reset-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit">Send reset link</Button>
      </Block>
    </form>
  )
}

export default PasswordResetForm
