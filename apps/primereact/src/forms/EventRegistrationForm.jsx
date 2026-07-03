import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const ticketOptions = [
  { label: 'Select ticket', value: '' },
  { label: 'General admission', value: 'general' },
  { label: 'VIP', value: 'vip' },
  { label: 'Student', value: 'student' },
]

function EventRegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [ticketType, setTicketType] = useState('')
  const [guestCount, setGuestCount] = useState(0)
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-event-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Full name
        </label>
        <InputText
          id="primereact-event-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-event-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-event-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-event-ticket"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Ticket type
        </label>
        <Dropdown
          id="primereact-event-ticket"
          name="ticketType"
          value={ticketType}
          options={ticketOptions}
          onChange={(e) => setTicketType(e.value)}

          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-event-guests"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Number of guests
        </label>
        <InputNumber
          id="primereact-event-guests"
          name="guestCount"
          value={guestCount}
          onValueChange={(e) => setGuestCount(e.value)}
          min={0}
          max={20}
          showButtons
          required
        />
      </div>
      <div
        className="field-checkbox"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Checkbox
          inputId="primereact-event-newsletter"
          name="newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.checked)}
        />
        <label htmlFor="primereact-event-newsletter">
          Notify me about future events
        </label>
      </div>
      <Button type="submit" label="Register" />
    </form>
  )
}

export default EventRegistrationForm
