import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="Email address"
        labelFor="blueprint-newsletter-email"
      >
        <InputGroup
          id="blueprint-newsletter-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Frequency" labelFor="blueprint-newsletter-frequency">
        <HTMLSelect
          id="blueprint-newsletter-frequency"
          name="frequency"
          required
          fill
          options={[
            { label: 'Select frequency', value: '' },
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
            { label: 'Quarterly', value: 'quarterly' },
          ]}
        />
      </FormGroup>
      <Checkbox label="Receive product updates" name="agree" />
      <Button intent="primary" type="submit">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
