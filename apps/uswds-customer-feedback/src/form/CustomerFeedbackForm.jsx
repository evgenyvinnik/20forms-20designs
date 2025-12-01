import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function CustomerFeedbackForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Name
        </Label>
        <TextInput
          id="uswds-feedback-name"
          name="name"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-feedback-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-rating"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Overall rating
        </Label>
        <Select
          id="uswds-feedback-rating"
          name="rating"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-feedback-comments"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Comments
        </Label>
        <Textarea
          id="uswds-feedback-comments"
          name="comments"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-feedback-followup"
          name="followUp"
          label="I would like a follow-up"
        />
      </FormGroup>
      <Button type="submit">Send feedback</Button>
    </Form>
  )
}

export default CustomerFeedbackForm
