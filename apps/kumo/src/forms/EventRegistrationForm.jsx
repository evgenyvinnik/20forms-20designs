import { Button, Checkbox, Input, Select } from '@cloudflare/kumo'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Select
        label="Ticket type"
        name="ticketType"
        placeholder="Select ticket"
        items={[
          { value: 'general', label: 'General admission' },
          { value: 'vip', label: 'VIP' },
          { value: 'student', label: 'Student' },
        ]}
        required
        className="kumo-select"
      />
      <Input
        label="Number of guests"
        name="guestCount"
        type="number"
        min={0}
        max={20}
        required
      />
      <Checkbox label="Notify me about future events" name="newsletter" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Register
        </Button>
      </div>
    </form>
  )
}

export default EventRegistrationForm
