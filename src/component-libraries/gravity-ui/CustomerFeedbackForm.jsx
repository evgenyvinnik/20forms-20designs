import { Button, Checkbox, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, SingleSelectField, formStackStyle } from './common.jsx'

const ratingOptions = [
  { value: 'excellent', content: 'Excellent' },
  { value: 'good', content: 'Good' },
  { value: 'average', content: 'Average' },
  { value: 'poor', content: 'Poor' },
]

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-feedback-name"
        label="Name"
        name="name"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-feedback-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-feedback-rating"
        label="Overall rating"
        name="rating"
        options={[{ value: '', content: 'Select rating' }, ...ratingOptions]}
        placeholder="Select rating"
      />
      <Field label="Comments" htmlFor="gravity-feedback-comments">
        <TextArea
          id="gravity-feedback-comments"
          name="comments"
          rows={4}
          controlProps={{ required: true }}
        />
      </Field>
      <Checkbox
        name="followUp"
        value="yes"
        content="I would like a follow-up"
      />
      <Button view="action" type="submit">
        Send feedback
      </Button>
    </form>
  )
}

export default CustomerFeedbackForm
