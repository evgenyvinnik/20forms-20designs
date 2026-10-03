import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  Picker,
  PickerItem,
  TextArea,
  TextField,
} from '@react-spectrum/s2'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <Picker label="Topic" name="topic" placeholder="Select topic" isRequired>
        <PickerItem id="support">Support</PickerItem>
        <PickerItem id="sales">Sales</PickerItem>
        <PickerItem id="feedback">Feedback</PickerItem>
        <PickerItem id="other">Other</PickerItem>
      </Picker>
      <TextArea label="Message" name="message" isRequired />
      <Checkbox name="consent">Allow follow-up communication</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Submit inquiry
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default ContactInquiryForm
