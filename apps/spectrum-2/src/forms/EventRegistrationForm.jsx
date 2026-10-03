import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  NumberField,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <Picker
        label="Ticket type"
        name="ticketType"
        placeholder="Select ticket"
        isRequired
      >
        <PickerItem id="general">General admission</PickerItem>
        <PickerItem id="vip">VIP</PickerItem>
        <PickerItem id="student">Student</PickerItem>
      </Picker>
      <NumberField
        label="Number of guests"
        name="guestCount"
        minValue={0}
        maxValue={20}
        isRequired
      />
      <Checkbox name="newsletter">Notify me about future events</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Register
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default EventRegistrationForm
