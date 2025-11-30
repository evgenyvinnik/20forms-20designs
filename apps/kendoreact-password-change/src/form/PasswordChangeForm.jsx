import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const minLengthValidator = (minLength) => (value) =>
  value && value.length >= minLength ? '' : `Must be at least ${minLength} characters`

const FormInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, ...others } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Input id={id} {...others} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormCheckbox = (fieldRenderProps) => {
  const { label, value, onChange, id } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Checkbox
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function PasswordChangeForm() {
  const handleSubmit = () => {
    alert('Password change requested!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-password-change-current"
            name="currentPassword"
            label="Current password"
            type="password"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-password-change-new"
            name="newPassword"
            label="New password"
            type="password"
            component={FormInput}
            validator={minLengthValidator(8)}
          />

          <Field
            id="kendoreact-password-change-confirm"
            name="confirmPassword"
            label="Confirm new password"
            type="password"
            component={FormInput}
            validator={minLengthValidator(8)}
          />

          <Field
            id="kendoreact-password-change-logout"
            name="logoutOthers"
            label="Sign out of other devices"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Update password
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default PasswordChangeForm
