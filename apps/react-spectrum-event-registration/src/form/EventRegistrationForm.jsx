import { Form, TextField, NumberField, Picker, Item, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registered!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          isRequired
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          isRequired
        />
        <Picker label="Ticket type" name="ticketType" isRequired>
          <Item key="">Select ticket</Item>
          <Item key="general">General admission</Item>
          <Item key="vip">VIP</Item>
          <Item key="student">Student</Item>
        </Picker>
        <NumberField
          label="Number of guests"
          name="guestCount"
          minValue={0}
          maxValue={20}
          isRequired
        />
        <Checkbox name="newsletter">Notify me about future events</Checkbox>
        <Button type="submit" variant="accent">
          Register
        </Button>
      </Flex>
    </Form>
  )
}

export default EventRegistrationForm
