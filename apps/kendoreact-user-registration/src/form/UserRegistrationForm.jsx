import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'
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
  const { label, value, onChange, id, valid, visited, validationMessage } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Checkbox
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const termsValidator = (value) => (value ? '' : 'You must agree to the terms and conditions')

function UserRegistrationForm() {
  const handleSubmit = (dataItem) => {
    alert('Registration submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-user-registration-name"
            name="fullName"
            label="Full name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-user-registration-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-user-registration-username"
            name="username"
            label="Username"
            component={FormInput}
            validator={minLengthValidator(3)}
          />

          <Field
            id="kendoreact-user-registration-password"
            name="password"
            label="Password"
            type="password"
            component={FormInput}
            validator={minLengthValidator(8)}
          />

          <Field
            id="kendoreact-user-registration-confirm"
            name="confirmPassword"
            label="Confirm password"
            type="password"
            component={FormInput}
            validator={minLengthValidator(8)}
          />

          <Field
            id="kendoreact-user-registration-terms"
            name="terms"
            label="I agree to the terms and conditions"
            component={FormCheckbox}
            validator={termsValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Create account
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default UserRegistrationForm
