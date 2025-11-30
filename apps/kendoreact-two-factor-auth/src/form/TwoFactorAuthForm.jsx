import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const codeValidator = (value) =>
  value && /^\d{6}$/.test(value) ? '' : 'Please enter a 6-digit code'

const FormInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, ...others } =
    fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Input id={id} {...others} />
      {visited && !valid && (
        <div className="k-form-error">{validationMessage}</div>
      )}
    </div>
  )
}

function TwoFactorAuthForm() {
  const handleSubmit = () => {
    alert('Verification submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <p style={{ marginBottom: '16px' }}>
            Enter the code from your authenticator app or SMS.
          </p>

          <Field
            id="kendoreact-two-factor-code"
            name="code"
            label="Verification code"
            component={FormInput}
            maxLength={6}
            validator={codeValidator}
          />

          <Field
            id="kendoreact-two-factor-backup"
            name="backupCode"
            label="Backup code (optional)"
            component={FormInput}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Verify
            </Button>
            <Button
              type="button"
              fillMode="outline"
              onClick={() => alert('A new code has been sent!')}
            >
              Resend code
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default TwoFactorAuthForm
