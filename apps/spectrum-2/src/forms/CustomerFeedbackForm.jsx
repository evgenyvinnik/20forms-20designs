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

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Name" name="name" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <Picker
        label="Overall rating"
        name="rating"
        placeholder="Select rating"
        isRequired
      >
        <PickerItem id="excellent">Excellent</PickerItem>
        <PickerItem id="good">Good</PickerItem>
        <PickerItem id="average">Average</PickerItem>
        <PickerItem id="poor">Poor</PickerItem>
      </Picker>
      <TextArea label="Comments" name="comments" isRequired />
      <Checkbox name="followUp">I would like a follow-up</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Send feedback
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default CustomerFeedbackForm
