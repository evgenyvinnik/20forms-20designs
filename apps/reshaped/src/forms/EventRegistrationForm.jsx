import {
  Button,
  Checkbox,
  FormControl,
  NumberField,
  Select,
  TextField,
  View,
} from 'reshaped'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
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
          <FormControl.Label>Ticket type</FormControl.Label>
          <Select
            name="ticketType"
            placeholder="Select ticket"
            inputAttributes={{ required: true }}
          >
            <option value="general">General admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Number of guests</FormControl.Label>
          <NumberField
            name="guestCount"
            min={0}
            max={20}
            increaseAriaLabel="Increase"
            decreaseAriaLabel="Decrease"
            inputAttributes={{ required: true }}
          />
        </FormControl>
        <Checkbox name="newsletter">Notify me about future events</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Register
          </Button>
        </View>
      </View>
    </form>
  )
}

export default EventRegistrationForm
