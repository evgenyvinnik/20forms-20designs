import { Form, Field, FormElement } from '@progress/kendo-react-form'
import { Input, TextArea, RadioGroup } from '@progress/kendo-react-inputs'
import { Upload } from '@progress/kendo-react-upload'
import { Label } from '@progress/kendo-react-labels'
import { Button } from '@progress/kendo-react-buttons'

const requiredValidator = (value) => (value ? '' : 'This field is required')

const priorityOptions = [
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
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

const FormRadioGroup = (fieldRenderProps) => {
  const { label, valid, visited, validationMessage, value, onChange, data } = fieldRenderProps
  return (
    <div className="k-form-field">
      <fieldset className="k-form-fieldset">
        <legend className="k-form-legend">{label}</legend>
        <RadioGroup
          data={data}
          value={value}
          onChange={onChange}
          layout="vertical"
        />
        {visited && !valid && <div className="k-form-error">{validationMessage}</div>}
      </fieldset>
    </div>
  )
}

const FormUpload = (fieldRenderProps) => {
  const { label, id, value, onChange } = fieldRenderProps
  return (
    <div className="k-form-field">
      <Label editorId={id}>{label}</Label>
      <Upload
        id={id}
        batch={false}
        multiple={true}
        files={value}
        onAdd={(event) => onChange({ value: event.newState })}
        onRemove={(event) => onChange({ value: event.newState })}
        withCredentials={false}
        saveUrl={null}
        autoUpload={false}
      />
    </div>
  )
}

function SupportTicketForm() {
  const handleSubmit = () => {
    alert('Support ticket submitted!')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement>
          <Field
            id="kendoreact-ticket-subject"
            name="subject"
            label="Subject"
            component={FormInput}
            validator={requiredValidator}
          />

          <Field
            name="priority"
            label="Priority"
            component={FormRadioGroup}
            data={priorityOptions}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-ticket-description"
            name="description"
            label="Issue description"
            component={FormTextArea}
            validator={requiredValidator}
          />

          <Field
            id="kendoreact-ticket-attachments"
            name="attachments"
            label="Attachments"
            component={FormUpload}
          />

          <div className="k-form-buttons" style={{ marginTop: '16px' }}>
            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
              Submit ticket
            </Button>
          </div>
        </FormElement>
      )}
    />
  )
}

export default SupportTicketForm
