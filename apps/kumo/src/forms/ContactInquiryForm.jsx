import { Button, Checkbox, Input, InputArea, Select } from '@cloudflare/kumo'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Select
        label="Topic"
        name="topic"
        placeholder="Select topic"
        items={[
          { value: 'support', label: 'Support' },
          { value: 'sales', label: 'Sales' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'other', label: 'Other' },
        ]}
        required
        className="kumo-select"
      />
      <InputArea label="Message" name="message" rows={4} required />
      <Checkbox label="Allow follow-up communication" name="consent" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Submit inquiry
        </Button>
      </div>
    </form>
  )
}

export default ContactInquiryForm
