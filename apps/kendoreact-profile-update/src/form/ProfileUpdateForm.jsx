import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'
const phoneValidator = (value) =>
  value && /^[+0-9\s-]{7,20}$/.test(value) ? '' : 'Please enter a valid phone number'

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

const FormTextArea = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <TextArea id={id} value={value} onChange={onChange} rows={3} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

function ProfileUpdateForm() {
  const handleSubmit = () => {
    alert('Profile updated!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-profile-first-name"
            name="firstName"
            label="First name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-profile-last-name"
            name="lastName"
            label="Last name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-profile-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-profile-phone"
            name="phone"
            label="Phone number"
            type="tel"
            component={FormInput}
            validator={phoneValidator}
          />

          <Field
            id="kendoreact-profile-bio"
            name="bio"
            label="Short bio"
            component={FormTextArea}
            validator={requiredValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Save changes
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default ProfileUpdateForm
