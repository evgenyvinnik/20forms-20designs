import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea, Checkbox } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'

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
  const { label, id, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <TextArea id={id} value={value} onChange={onChange} rows={3} />
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

function PrivacyConsentForm() {
  const handleSubmit = () => {
    alert('Privacy preferences saved!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-privacy-name"
            name="fullName"
            label="Full name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-privacy-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <fieldset className="k-form-fieldset">
            <legend className="k-form-legend">Communication channels</legend>
            <Field
              id="kendoreact-privacy-email-opt"
              name="emailOptIn"
              label="Email updates"
              component={FormCheckbox}
            />
            <Field
              id="kendoreact-privacy-sms-opt"
              name="smsOptIn"
              label="SMS notifications"
              component={FormCheckbox}
            />
            <Field
              id="kendoreact-privacy-phone-opt"
              name="phoneOptIn"
              label="Phone calls"
              component={FormCheckbox}
            />
          </fieldset>

          <fieldset className="k-form-fieldset">
            <legend className="k-form-legend">Privacy options</legend>
            <Field
              id="kendoreact-privacy-analytics"
              name="analytics"
              label="Allow analytics cookies"
              component={FormCheckbox}
            />
            <Field
              id="kendoreact-privacy-personalization"
              name="personalization"
              label="Allow personalized content"
              component={FormCheckbox}
            />
          </fieldset>

          <Field
            id="kendoreact-privacy-notes"
            name="notes"
            label="Additional notes"
            component={FormTextArea}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Save preferences
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default PrivacyConsentForm
