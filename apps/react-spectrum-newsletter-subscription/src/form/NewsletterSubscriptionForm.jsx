import { Form, TextField, Picker, Item, Checkbox, Button, Flex } from '@adobe/react-spectrum'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscribed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Email address"
          name="email"
          type="email"
          isRequired
        />
        <Picker label="Frequency" name="frequency" isRequired>
          <Item key="">Select frequency</Item>
          <Item key="weekly">Weekly</Item>
          <Item key="monthly">Monthly</Item>
          <Item key="quarterly">Quarterly</Item>
        </Picker>
        <Checkbox name="agree">Receive product updates</Checkbox>
        <Button type="submit" variant="accent">
          Subscribe
        </Button>
      </Flex>
    </Form>
  )
}

export default NewsletterSubscriptionForm
