import { Input, Button, Typography } from '@material-tailwind/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification code submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Typography
        variant="paragraph"
        color="gray"
        className="dark:text-gray-300"
      >
        Enter the code from your authenticator app or SMS.
      </Typography>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Verification code
        </Typography>
        <Input
          id="material-tailwind-two-factor-auth-code"
          name="code"
          type="text"
          required
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          placeholder="Enter 6-digit code"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Backup code (optional)
        </Typography>
        <Input
          id="material-tailwind-two-factor-auth-backup"
          name="backupCode"
          type="text"
          pattern="[A-Za-z0-9]{6,12}"
          placeholder="Enter backup code"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit" color="blue">
          Verify
        </Button>
        <Button
          type="button"
          variant="text"
          onClick={() => alert('Resend code placeholder')}
        >
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
