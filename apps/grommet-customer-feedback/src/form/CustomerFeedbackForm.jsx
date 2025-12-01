import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  TextArea,
  TextInput,
} from 'grommet'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        htmlFor="grommet-feedback-name"
        required
      >
        <TextInput id="grommet-feedback-name" name="name" type="text" />
      </FormField>
      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-feedback-email"
        required
      >
        <TextInput id="grommet-feedback-email" name="email" type="email" />
      </FormField>
      <FormField
        label="Overall rating"
        name="rating"
        htmlFor="grommet-feedback-rating"
        required
      >
        <Select
          id="grommet-feedback-rating"
          name="rating"
          options={['Excellent', 'Good', 'Average', 'Poor']}
          placeholder="Select rating"
        />
      </FormField>
      <FormField
        label="Comments"
        name="comments"
        htmlFor="grommet-feedback-comments"
        required
      >
        <TextArea id="grommet-feedback-comments" name="comments" rows={4} />
      </FormField>
      <FormField name="followUp" htmlFor="grommet-feedback-followup">
        <CheckBox
          id="grommet-feedback-followup"
          name="followUp"
          label="I would like a follow-up"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Send feedback" />
      </Box>
    </Form>
  )
}

export default CustomerFeedbackForm
