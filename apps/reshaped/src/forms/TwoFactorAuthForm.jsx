import { Button, FormControl, Text, TextField, View } from 'reshaped'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <Text variant="body-2" color="neutral-faded">
          Enter the code from your authenticator app or SMS.
        </Text>
        <FormControl required>
          <FormControl.Label>Verification code</FormControl.Label>
          <TextField
            name="code"
            inputAttributes={{
              type: 'text',
              maxLength: 6,
              pattern: '\\d{6}',
              inputMode: 'numeric',
              required: true,
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Backup code (optional)</FormControl.Label>
          <TextField
            name="backupCode"
            inputAttributes={{ type: 'text', pattern: '[A-Za-z0-9]{6,12}' }}
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Verify
          </Button>
          <Button
            type="button"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </View>
      </View>
    </form>
  )
}

export default TwoFactorAuthForm
