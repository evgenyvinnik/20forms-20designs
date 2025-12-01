import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { DatePicker } from 'baseui/datepicker'
import { TimePicker } from 'baseui/timepicker'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function AppointmentRequestForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState([])
  const [time, setTime] = useState(null)
  const [reason, setReason] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Full name">
          <Input
            id="baseweb-appointment-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-appointment-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Preferred date">
          <DatePicker
            value={date}
            onChange={({ date: newDate }) =>
              setDate(Array.isArray(newDate) ? newDate : [newDate])
            }
          />
        </FormControl>
        <FormControl label="Preferred time">
          <TimePicker value={time} onChange={(newTime) => setTime(newTime)} />
        </FormControl>
        <FormControl label="Reason for visit">
          <Textarea
            id="baseweb-appointment-reason"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit">Request appointment</Button>
      </Block>
    </form>
  )
}

export default AppointmentRequestForm
