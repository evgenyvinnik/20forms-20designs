import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const topicOptions = [
  { id: 'support', label: 'Support' },
  { id: 'sales', label: 'Sales' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'other', label: 'Other' },
]

function ContactInquiryForm({ theme }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState([])
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-contact-fullname"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-contact-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-contact-topic"
          labels={{ label: 'Topic' }}
          options={topicOptions}
          selection={topic}
          onSelect={(event, data) => setTopic(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Textarea
          id="slds-contact-message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-contact-consent"
          labels={{ label: 'Allow follow-up communication' }}
          checked={consent}
          onChange={() => setConsent(!consent)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Submit inquiry" />
      </div>
    </form>
  )
}

export default ContactInquiryForm
