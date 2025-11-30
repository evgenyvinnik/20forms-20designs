import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, Checkbox } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')

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

const FormCheckbox = (fieldRenderProps) => {
  const { label, value, onChange, id } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Checkbox id={id} label={label} value={value} onChange={onChange} />
    </div>
  )
}

function UserLoginForm() {
  const handleSubmit = (dataItem) => {
    alert('Login submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-user-login-email"
            name="identifier"
            label="Email or username"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-user-login-password"
            name="password"
            label="Password"
            type="password"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-user-login-remember"
            name="remember"
            label="Keep me signed in"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Sign in
            </Button>
            <Button
              type="button"
              fillMode="outline"
              onClick={() => alert('Password reset link flow placeholder')}
            >
              Forgot password?
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default UserLoginForm
