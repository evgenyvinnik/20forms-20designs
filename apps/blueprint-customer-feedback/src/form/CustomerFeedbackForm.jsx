import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
  TextArea,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Name" labelFor="blueprint-feedback-name">
        <InputGroup
          id="blueprint-feedback-name"
          name="name"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-feedback-email">
        <InputGroup
          id="blueprint-feedback-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Overall rating" labelFor="blueprint-feedback-rating">
        <HTMLSelect
          id="blueprint-feedback-rating"
          name="rating"
          required
          fill
          options={[
            { label: 'Select rating', value: '' },
            { label: 'Excellent', value: 'excellent' },
            { label: 'Good', value: 'good' },
            { label: 'Average', value: 'average' },
            { label: 'Poor', value: 'poor' },
          ]}
        />
      </FormGroup>
      <FormGroup label="Comments" labelFor="blueprint-feedback-comments">
        <TextArea
          id="blueprint-feedback-comments"
          name="comments"
          rows={4}
          required
          fill
        />
      </FormGroup>
      <Checkbox label="I would like a follow-up" name="followUp" />
      <Button intent="primary" type="submit">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
