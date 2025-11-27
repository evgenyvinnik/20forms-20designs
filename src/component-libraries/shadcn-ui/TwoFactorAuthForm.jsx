import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-slate-600">Enter the code from your authenticator app or SMS.</p>
      <div className="space-y-2">
        <Label htmlFor="shadcn-two-factor-code">Verification code</Label>
        <Input
          id="shadcn-two-factor-code"
          name="code"
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength="6"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-two-factor-backup">Backup code (optional)</Label>
        <Input id="shadcn-two-factor-backup" name="backupCode" type="text" pattern="[A-Za-z0-9]{6,12}" />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Verify</Button>
        <Button type="button" variant="outline" onClick={() => alert('A new code has been sent!')}>
          Resend code
        </Button>
      </div>
    </form>
  )
}

export default TwoFactorAuthForm
