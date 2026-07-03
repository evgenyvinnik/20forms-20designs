import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [reason, setReason] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-appointment-name"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Full name
        </label>
        <InputText
          id="primereact-appointment-name"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-appointment-email"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Email address
        </label>
        <InputText
          id="primereact-appointment-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-appointment-date"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Preferred date
        </label>
        <Calendar
          id="primereact-appointment-date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.value)}
          dateFormat="yy-mm-dd"
          showIcon
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-appointment-time"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Preferred time
        </label>
        <Calendar
          id="primereact-appointment-time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.value)}
          timeOnly
          hourFormat="24"
          showIcon
          required
        />
      </div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-appointment-reason"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Reason for visit
        </label>
        <InputTextarea
          id="primereact-appointment-reason"
          name="reason"
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <Button type="submit" label="Request appointment" />
    </form>
  )
}

export default AppointmentRequestForm
