import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea, Checkbox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'

const ratingOptions = [
  { text: 'Select rating', value: '' },
  { text: 'Excellent', value: 'excellent' },
  { text: 'Good', value: 'good' },
  { text: 'Average', value: 'average' },
  { text: 'Poor', value: 'poor' },
]

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

const FormDropDown = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange, data } = fieldRenderProps
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

function CustomerFeedbackForm() {
  const handleSubmit = () => {
    alert('Feedback submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-feedback-name"
            name="name"
            label="Name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-feedback-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-feedback-rating"
            name="rating"
            label="Overall rating"
            component={FormDropDown}
            data={ratingOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-feedback-comments"
            name="comments"
            label="Comments"
            component={FormTextArea}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-feedback-followup"
            name="followUp"
            label="I would like a follow-up"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Send feedback
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default CustomerFeedbackForm
