import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea, Checkbox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ''
    : 'Please enter a valid email'
const minLengthValidator = (minLength) => (value) =>
  value && value.length >= minLength
    ? ''
    : `Must be at least ${minLength} characters`

const teamSizeOptions = [
  { text: 'Select size', value: '' },
  { text: '1-5', value: '1-5' },
  { text: '6-20', value: '6-20' },
  { text: '21-50', value: '21-50' },
  { text: '50+', value: '50+' },
]

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

const FormTextArea = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange } =
    fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <TextArea id={id} value={value} onChange={onChange} rows={3} />
      {visited && !valid && (
        <div className="k-form-error">{validationMessage}</div>
      )}
    </div>
  )
}

const FormDropDown = (fieldRenderProps) => {
  const {
    label,
    id,
    valid,
    visited,
    validationMessage,
    value,
    onChange,
    data,
  } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DropDownList
        id={id}
        data={data}
        textField="text"
        dataItemKey="value"
        value={data.find((item) => item.value === value) || data[0]}
        onChange={(e) => onChange({ value: e.target.value.value })}
      />
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

function OnboardingWizardForm() {
  const handleSubmit = () => {
    alert('Onboarding complete!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Step 1: Account</h3>
            <Field
              id="kendoreact-onboarding-email"
              name="email"
              label="Work email"
              type="email"
              component={FormInput}
              validator={emailValidator}
            />
            <Field
              id="kendoreact-onboarding-password"
              name="password"
              label="Password"
              type="password"
              component={FormInput}
              validator={minLengthValidator(8)}
            />
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Step 2: Team</h3>
            <Field
              id="kendoreact-onboarding-team-name"
              name="teamName"
              label="Team name"
              component={FormInput}
              validator={requiredValidator}
            />
            <Field
              id="kendoreact-onboarding-size"
              name="teamSize"
              label="Team size"
              component={FormDropDown}
              data={teamSizeOptions}
              validator={requiredValidator}
            />
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Step 3: Preferences</h3>
            <Field
              id="kendoreact-onboarding-goal"
              name="goal"
              label="Primary goal"
              component={FormTextArea}
              validator={requiredValidator}
            />
            <Field
              id="kendoreact-onboarding-updates"
              name="updates"
              label="Send me product tips"
              component={FormCheckbox}
            />
          </section>

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button
              type="button"
              fillMode="outline"
              onClick={() => alert('Back action placeholder')}
            >
              Back
            </Button>
            <Button
              type="submit"
              themeColor="primary"
              disabled={!formRenderProps.allowSubmit}
            >
              Finish setup
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default OnboardingWizardForm
