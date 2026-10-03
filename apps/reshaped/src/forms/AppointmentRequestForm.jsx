import { Button, FormControl, TextArea, TextField, View } from 'reshaped'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Full name</FormControl.Label>
          <TextField
            name="fullName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Preferred date</FormControl.Label>
          <TextField
            name="date"
            inputAttributes={{ type: 'date', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Preferred time</FormControl.Label>
          <TextField
            name="time"
            inputAttributes={{ type: 'time', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Reason for visit</FormControl.Label>
          <TextArea
            name="reason"
            inputAttributes={{ rows: 3, required: true }}
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Request appointment
          </Button>
        </View>
      </View>
    </form>
  )
}

export default AppointmentRequestForm
