import { Button, Label, TextInput } from 'flowbite-react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Enter the code from your authenticator app or SMS.
      </p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-two-factor-code">Verification code</Label>
        </div>
        <TextInput
          id="flowbite-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-two-factor-backup">
            Backup code (optional)
          </Label>
        </div>
        <TextInput
          id="flowbite-two-factor-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Verify</Button>
        <Button
          type="button"
          color="light"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
