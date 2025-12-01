import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button } from '@shopify/polaris'

function AppointmentRequestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [notes, setNotes] = useState('')

  const serviceOptions = [
    { label: 'Select service', value: '' },
    { label: 'Consultation', value: 'consultation' },
    { label: 'Follow-up', value: 'follow-up' },
    { label: 'Initial assessment', value: 'initial' },
    { label: 'Annual review', value: 'annual' },
    { label: 'Other', value: 'other' },
  ]

  const timeOptions = [
    { label: 'Select time', value: '' },
    { label: '9:00 AM', value: '09:00' },
    { label: '10:00 AM', value: '10:00' },
    { label: '11:00 AM', value: '11:00' },
    { label: '12:00 PM', value: '12:00' },
    { label: '1:00 PM', value: '13:00' },
    { label: '2:00 PM', value: '14:00' },
    { label: '3:00 PM', value: '15:00' },
    { label: '4:00 PM', value: '16:00' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Full name"
          type="text"
          value={name}
          onChange={setName}
          autoComplete="name"
          requiredIndicator
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Phone number"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
          requiredIndicator
        />
        <Select
          label="Service type"
          options={serviceOptions}
          value={service}
          onChange={setService}
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="Preferred date"
            type="date"
            value={preferredDate}
            onChange={setPreferredDate}
            autoComplete="off"
            requiredIndicator
          />
          <Select
            label="Preferred time"
            options={timeOptions}
            value={preferredTime}
            onChange={setPreferredTime}
            requiredIndicator
          />
        </FormLayout.Group>
        <TextField
          label="Additional notes"
          value={notes}
          onChange={setNotes}
          multiline={3}
          autoComplete="off"
        />
        <Button submit variant="primary">
          Request appointment
        </Button>
      </FormLayout>
    </form>
  )
}

export default AppointmentRequestForm
