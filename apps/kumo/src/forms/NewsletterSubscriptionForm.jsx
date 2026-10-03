import { Button, Checkbox, Input, Select } from '@cloudflare/kumo'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Email address" name="email" type="email" required />
      <Select
        label="Frequency"
        name="frequency"
        placeholder="Select frequency"
        items={[
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'quarterly', label: 'Quarterly' },
        ]}
        required
        className="kumo-select"
      />
      <Checkbox label="Receive product updates" name="agree" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </div>
    </form>
  )
}

export default NewsletterSubscriptionForm
