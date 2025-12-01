import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { ParagraphSmall } from 'baseui/typography'
import { useState } from 'react'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <ParagraphSmall>
          Enter the code from your authenticator app or SMS.
        </ParagraphSmall>
        <FormControl label="Verification code">
          <Input
            id="baseweb-two-factor-code"
            name="code"
            type="text"
            inputMode="numeric"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            required
          />
        </FormControl>
        <FormControl label="Backup code (optional)">
          <Input
            id="baseweb-two-factor-backup"
            name="backupCode"
            type="text"
            value={backupCode}
            onChange={(e) => setBackupCode(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Verify</Button>
        <Button
          type="button"
          kind="tertiary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </Block>
    </form>
  )
}

export default TwoFactorAuthForm
