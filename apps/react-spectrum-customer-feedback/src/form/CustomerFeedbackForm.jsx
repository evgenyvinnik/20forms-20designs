import {
  Form,
  TextField,
  TextArea,
  Picker,
  Item,
  Checkbox,
  Button,
  Flex,
} from '@adobe/react-spectrum'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback sent!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField label="Name" name="name" type="text" isRequired />
        <TextField label="Email address" name="email" type="email" isRequired />
        <Picker label="Overall rating" name="rating" isRequired>
          <Item key="">Select rating</Item>
          <Item key="excellent">Excellent</Item>
          <Item key="good">Good</Item>
          <Item key="average">Average</Item>
          <Item key="poor">Poor</Item>
        </Picker>
        <TextArea label="Comments" name="comments" isRequired />
        <Checkbox name="followUp">I would like a follow-up</Checkbox>
        <Button type="submit" variant="accent">
          Send feedback
        </Button>
      </Flex>
    </Form>
  )
}

export default CustomerFeedbackForm
