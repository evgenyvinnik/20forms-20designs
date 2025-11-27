import { Button, Checkbox, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, SingleSelectField, formStackStyle } from './common.jsx'

const topicOptions = [
  { value: 'support', content: 'Support' },
  { value: 'sales', content: 'Sales' },
  { value: 'feedback', content: 'Feedback' },
  { value: 'other', content: 'Other' },
]

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-contact-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-contact-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-contact-topic"
        label="Topic"
        name="topic"
        options={topicOptions}
        placeholder="Select topic"
      />
      <Field label="Message" htmlFor="gravity-contact-message">
        <TextArea
          id="gravity-contact-message"
          name="message"
          rows={4}
          controlProps={{ required: true }}
        />
      </Field>
      <Checkbox
        name="consent"
        value="true"
        content="Allow follow-up communication"
      />
      <Button view="action" type="submit">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
