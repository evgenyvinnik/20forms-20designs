import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea } from '@progress/kendo-react-inputs'
import { DatePicker, TimePicker } from '@progress/kendo-react-dateinputs'
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
  const { label, id, valid, visited, validationMessage, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <TextArea id={id} value={value} onChange={onChange} rows={3} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormDatePicker = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <DatePicker id={id} value={value} onChange={onChange} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

const FormTimePicker = (fieldRenderProps) => {
  const { label, id, valid, visited, validationMessage, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <TimePicker id={id} value={value} onChange={onChange} />
      {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
    </div>
  )
}

function AppointmentRequestForm() {
  const handleSubmit = () => {
    alert('Appointment request submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-appointment-name"
            name="fullName"
            label="Full name"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-appointment-email"
            name="email"
            label="Email address"
            type="email"
            component={FormInput}
            validator={emailValidator}
          />

          <Field
            id="kendoreact-appointment-date"
            name="date"
            label="Preferred date"
            component={FormDatePicker}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-appointment-time"
            name="time"
            label="Preferred time"
            component={FormTimePicker}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-appointment-reason"
            name="reason"
            label="Reason for visit"
            component={FormTextArea}
            validator={requiredValidator}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Request appointment
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default AppointmentRequestForm
