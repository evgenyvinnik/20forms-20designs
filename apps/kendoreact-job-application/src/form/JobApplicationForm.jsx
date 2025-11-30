import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea, Checkbox } from '@progress/kendo-react-inputs'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'
const phoneValidator = (value) =>
  value && /^[+0-9\s-]{7,20}$/.test(value) ? '' : 'Please enter a valid phone number'
const urlValidator = (value) =>
  value && /^https?:\/\/.+/.test(value) ? '' : 'Please enter a valid URL'

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
      <TextArea id={id} value={value} onChange={onChange} rows={4} />
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

function JobApplicationForm() {
  const handleSubmit = () => {
    alert('Application submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-job-full-name"
            name="fullName"
            label="Full name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-job-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-job-phone"
            name="phone"
            label="Phone number"
            type="tel"
            component={FormInput}
            validator={phoneValidator}
          />

          <Field
            id="kendoreact-job-role"
            name="role"
            label="Role applied for"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-job-resume"
            name="resume"
            label="Resume link"
            type="url"
            component={FormInput}
            validator={urlValidator}
          />

          <Field
            id="kendoreact-job-cover-letter"
            name="coverLetter"
            label="Cover letter"
            component={FormTextArea}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-job-updates"
            name="updates"
            label="Keep me informed about future roles"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Submit application
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default JobApplicationForm
