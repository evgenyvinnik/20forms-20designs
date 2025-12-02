import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const ticketOptions = [
  { id: 'general', label: 'General admission' },
  { id: 'vip', label: 'VIP' },
  { id: 'student', label: 'Student' },
]

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState([])
  const [guestCount, setGuestCount] = useState(0)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-event-fullname"
          label="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-event-email"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-event-ticket"
          labels={{ label: 'Ticket type' }}
          options={ticketOptions}
          selection={ticketType}
          onSelect={(event, data) => setTicketType(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-event-guests"
          type="number"
          label="Number of guests"
          value={guestCount}
          onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
          min={0}
          max={20}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-event-newsletter"
          labels={{ label: 'Notify me about future events' }}
          checked={newsletter}
          onChange={() => setNewsletter(!newsletter)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Register" />
      </div>
    </form>
  )
}

export default EventRegistrationForm
