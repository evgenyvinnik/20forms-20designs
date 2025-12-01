import * as Ariakit from '@ariakit/react'

function TwoFactorAuthForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      code: '',
      backupCode: '',
    },
  })

  form.useSubmit(() => {
    alert('Verification submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <p className="description">
        Enter the code from your authenticator app or SMS.
      </p>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.code} className="label">
          Verification code
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.code}
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.backupCode} className="label">
          Backup code (optional)
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.backupCode}
          pattern="[A-Za-z0-9]{6,12}"
          className="input"
        />
      </Ariakit.FormGroup>
      <div className="form-row">
        <Ariakit.FormSubmit className="button button-primary">
          Verify
        </Ariakit.FormSubmit>
        <Ariakit.Button
          type="button"
          className="button button-secondary"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Ariakit.Button>
      </div>
    </Ariakit.Form>
  )
}

export default TwoFactorAuthForm
