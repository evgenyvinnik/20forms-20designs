import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Email address" name="email" type="email" isRequired />
      <Picker
        label="Frequency"
        name="frequency"
        placeholder="Select frequency"
        isRequired
      >
        <PickerItem id="weekly">Weekly</PickerItem>
        <PickerItem id="monthly">Monthly</PickerItem>
        <PickerItem id="quarterly">Quarterly</PickerItem>
      </Picker>
      <Checkbox name="agree">Receive product updates</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Subscribe
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default NewsletterSubscriptionForm
