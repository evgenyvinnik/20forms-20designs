import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import RadioGroup from '@salesforce/design-system-react/components/radio-group'
import Radio from '@salesforce/design-system-react/components/radio-group/radio'
import Button from '@salesforce/design-system-react/components/button'

function SupportTicketForm({ theme }) {
  const [subject, setSubject] = useState('')
  const [priority, setPriority] = useState('medium')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-ticket-subject"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <fieldset className="slds-form-element slds-m-bottom_small">
        <legend className="slds-form-element__legend slds-form-element__label">
          Priority
        </legend>
        <div className="slds-form-element__control">
          <RadioGroup onChange={(e) => setPriority(e.target.value)}>
            <Radio
              id="slds-ticket-priority-low"
              labels={{ label: 'Low' }}
              value="low"
              checked={priority === 'low'}
              variant="base"
            />
            <Radio
              id="slds-ticket-priority-medium"
              labels={{ label: 'Medium' }}
              value="medium"
              checked={priority === 'medium'}
              variant="base"
            />
            <Radio
              id="slds-ticket-priority-high"
              labels={{ label: 'High' }}
              value="high"
              checked={priority === 'high'}
              variant="base"
            />
          </RadioGroup>
        </div>
      </fieldset>

      <div className="slds-form-element slds-m-bottom_small">
        <Textarea
          id="slds-ticket-description"
          label="Issue description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <label
          className="slds-form-element__label"
          htmlFor="slds-ticket-attachments"
        >
          Attachments
        </label>
        <div className="slds-form-element__control">
          <input
            type="file"
            id="slds-ticket-attachments"
            multiple
            className="slds-input"
          />
        </div>
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Submit ticket" />
      </div>
    </form>
  )
}

export default SupportTicketForm
