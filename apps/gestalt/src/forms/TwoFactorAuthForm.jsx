import { useState } from 'react'
import { Box, Button, Flex, Text, TextField } from 'gestalt'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <Text>Enter the code from your authenticator app or SMS.</Text>
        <TextField
          id="gestalt-two-factor-code"
          label="Verification code"
          onChange={({ value }) => setCode(value)}

          type="text"
          value={code}
        />
        <TextField
          id="gestalt-two-factor-backup"
          label="Backup code (optional)"
          onChange={({ value }) => setBackupCode(value)}
          type="text"
          value={backupCode}
        />
        <Flex gap={2}>
          <Button color="red" text="Verify" type="submit" />
          <Button
            onClick={() => alert('A new code has been sent!')}
            text="Resend code"
            type="button"
          />
        </Flex>
      </Flex>
    </form>
  )
}

export default TwoFactorAuthForm
