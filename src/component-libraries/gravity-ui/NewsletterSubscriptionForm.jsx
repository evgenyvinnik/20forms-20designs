import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { SingleSelectField, formStackStyle } from './common.jsx'

const frequencyOptions = [
  { value: 'weekly', content: 'Weekly' },
  { value: 'monthly', content: 'Monthly' },
  { value: 'quarterly', content: 'Quarterly' },
]

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-newsletter-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-newsletter-frequency"
        label="Frequency"
        name="frequency"
        options={frequencyOptions}
        placeholder="Select frequency"
      />
      <Checkbox
        name="agree"
        value="updates"
        content="Receive product updates"
      />
      <Button view="action" type="submit">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
