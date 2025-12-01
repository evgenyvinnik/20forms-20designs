import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { DatePicker, TimePicker } from '@atlaskit/datetime-picker'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-appointment-name">Full name</Label>
          <Textfield
            id="atlaskit-appointment-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-email">Email address</Label>
          <Textfield
            id="atlaskit-appointment-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-date">Preferred date</Label>
          <DatePicker
            id="atlaskit-appointment-date"
            name="date"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-time">Preferred time</Label>
          <TimePicker
            id="atlaskit-appointment-time"
            name="time"
            placeholder="Select a time"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-reason">Reason for visit</Label>
          <TextArea
            id="atlaskit-appointment-reason"
            name="reason"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Request appointment</Button>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
