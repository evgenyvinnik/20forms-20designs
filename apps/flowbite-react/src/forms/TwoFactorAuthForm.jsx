import { Button, Card, Label, TextInput } from 'flowbite-react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Two Factor Auth</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          Enter the code from your authenticator app or SMS.
        </p>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-two-factor-code"
              value="Verification code"
            />
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
            <Label
              htmlFor="flowbite-two-factor-backup"
              value="Backup code (optional)"
            />
          </div>
          <TextInput
            id="flowbite-two-factor-backup"
            name="backupCode"
            type="text"
            pattern="[A-Za-z0-9]{6,12}"
          />
        </div>
        <Button type="submit">Verify</Button>
        <Button
          type="button"
          color="light"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </form>
    </Card>
  )
}

export default TwoFactorAuthForm
