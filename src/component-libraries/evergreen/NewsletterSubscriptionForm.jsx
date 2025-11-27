import { Button, Checkbox, Pane, SelectField, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-newsletter-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <SelectField
        id="evergreen-newsletter-frequency"
        label="Frequency"
        name="frequency"
        defaultValue=""
        required
      >
        <option value="">Select frequency</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
      </SelectField>
      <Checkbox label="Receive product updates" name="agree" />
      <Button appearance="primary" type="submit">
        Subscribe
      </Button>
    </Pane>
  )
}

export default NewsletterSubscriptionForm
