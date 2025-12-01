import {
  Field,
  Fieldset,
  Label,
  Legend,
  Radio,
  RadioGroup,
} from '@headlessui/react'
import { useState } from 'react'

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

function SupportTicketForm() {
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-ticket-subject">
          Subject
        </Label>
        <input
          id="headlessui-ticket-subject"
          name="subject"
          type="text"
          className="input"
          required
        />
      </Field>

      <Fieldset className="fieldset">
        <Legend className="legend">Priority</Legend>
        <RadioGroup
          value={priority}
          onChange={setPriority}
          name="priority"
          className="radio-group"
        >
          {priorities.map((p) => (
            <Field key={p.value} className="radio-wrapper">
              <Radio value={p.value} className="radio">
                <span className="radio-dot" />
              </Radio>
              <Label className="radio-label">{p.label}</Label>
            </Field>
          ))}
        </RadioGroup>
      </Fieldset>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-ticket-description">
          Issue description
        </Label>
        <textarea
          id="headlessui-ticket-description"
          name="description"
          rows="4"
          className="textarea"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-ticket-attachments">
          Attachments
        </Label>
        <input
          id="headlessui-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="file-input"
        />
      </Field>

      <button type="submit" className="button button-primary">
        Submit ticket
      </button>
    </form>
  )
}

export default SupportTicketForm
