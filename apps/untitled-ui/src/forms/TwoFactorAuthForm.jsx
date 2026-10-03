import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="text-sm text-tertiary">
        Enter the code from your authenticator app or SMS.
      </p>
      <Input
        label="Verification code"
        name="code"
        maxLength={6}
        pattern="\d{6}"
        inputMode="numeric"
        isRequired
      />
      <Input
        label="Backup code (optional)"
        name="backupCode"
        pattern="[A-Za-z0-9]{6,12}"
      />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Verify
        </Button>
        <Button
          color="secondary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </div>
    </Form>
  )
}

export default TwoFactorAuthForm
