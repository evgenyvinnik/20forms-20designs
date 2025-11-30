import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack, Inline, Text } from '@atlaskit/primitives'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Text as="p">Enter the code from your authenticator app or SMS.</Text>
        <Box>
          <Label htmlFor="atlaskit-two-factor-code">Verification code</Label>
          <Textfield
            id="atlaskit-two-factor-code"
            name="code"
            maxLength={6}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-two-factor-backup">Backup code (optional)</Label>
          <Textfield
            id="atlaskit-two-factor-backup"
            name="backupCode"
          />
        </Box>
        <Inline space="space.100">
          <Button type="submit" appearance="primary">Verify</Button>
          <Button
            appearance="subtle"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
