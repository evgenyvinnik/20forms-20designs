import { Button, Checkbox, Pane, SelectField, TextInputField, TextareaField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField id="evergreen-feedback-name" label="Name" name="name" type="text" required />
      <TextInputField id="evergreen-feedback-email" label="Email address" name="email" type="email" required />
      <SelectField id="evergreen-feedback-rating" label="Overall rating" name="rating" defaultValue="" required>
        <option value="">Select rating</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="poor">Poor</option>
      </SelectField>
      <TextareaField id="evergreen-feedback-comments" label="Comments" name="comments" rows={4} required />
      <Checkbox label="I would like a follow-up" name="followUp" />
      <Button appearance="primary" type="submit">
        Send feedback
      </Button>
    </Pane>
  )
}

export default CustomerFeedbackForm
