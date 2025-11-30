import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ''
    : 'Please enter a valid email'

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

function PasswordResetForm() {
  const handleSubmit = (dataItem) => {
    alert('Password reset link requested!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <p style={{ marginBottom: '16px' }}>
            Request a password reset link via email.
          </p>

          <Field
            id="kendoreact-password-reset-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Send reset link
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default PasswordResetForm
