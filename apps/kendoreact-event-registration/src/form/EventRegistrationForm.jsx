import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, NumericTextBox, Checkbox } from '@progress/kendo-react-inputs'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')
const emailValidator = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'

const ticketOptions = [
  { text: 'Select ticket', value: '' },
  { text: 'General admission', value: 'general' },
  { text: 'VIP', value: 'vip' },
  { text: 'Student', value: 'student' },
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

const FormNumericInput = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange, min, max } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <NumericTextBox
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        format="n0"
      />
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

function EventRegistrationForm() {
  const handleSubmit = () => {
    alert('Event registration submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-event-name"
            name="fullName"
            label="Full name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-event-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-event-ticket"
            name="ticketType"
            label="Ticket type"
            component={FormDropDown}
            data={ticketOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-event-guests"
            name="guestCount"
            label="Number of guests"
            component={FormNumericInput}
            min={0}
            max={20}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-event-newsletter"
            name="newsletter"
            label="Notify me about future events"
            component={FormCheckbox}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Register
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default EventRegistrationForm
