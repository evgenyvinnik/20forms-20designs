import { Checkbox, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const ticketTypes = [
  { value: '', label: 'Select ticket' },
  { value: 'general', label: 'General admission' },
  { value: 'vip', label: 'VIP' },
  { value: 'student', label: 'Student' },
]

function EventRegistrationForm() {
  const [ticketType, setTicketType] = useState(ticketTypes[0])
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-event-name">
          Full name
        </Label>
        <input
          id="headlessui-event-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-event-email">
          Email address
        </Label>
        <input
          id="headlessui-event-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Ticket type</Label>
        <Listbox value={ticketType} onChange={setTicketType} name="ticketType">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{ticketType.label}</span>
              <svg className="select-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {ticketTypes.map((ticket) => (
                <ListboxOption key={ticket.value} value={ticket} className="select-option">
                  {ticket.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-event-guests">
          Number of guests
        </Label>
        <input
          id="headlessui-event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          className="input"
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={newsletter}
          onChange={setNewsletter}
          name="newsletter"
          className="checkbox"
        >
          {newsletter && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">Notify me about future events</Label>
      </Field>

      <button type="submit" className="button button-primary">
        Register
      </button>
    </form>
  )
}

export default EventRegistrationForm
