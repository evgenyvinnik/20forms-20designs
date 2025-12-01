import { Form, TextField, TextArea, Picker, Item, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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
        <Picker label="Topic" name="topic" isRequired>
          <Item key="">Select topic</Item>
          <Item key="support">Support</Item>
          <Item key="sales">Sales</Item>
          <Item key="feedback">Feedback</Item>
          <Item key="other">Other</Item>
        </Picker>
        <TextArea
          label="Message"
          name="message"
          isRequired
        />
        <Checkbox name="consent">Allow follow-up communication</Checkbox>
        <Button type="submit" variant="accent">
          Submit inquiry
        </Button>
      </Flex>
    </Form>
  )
}

export default ContactInquiryForm
