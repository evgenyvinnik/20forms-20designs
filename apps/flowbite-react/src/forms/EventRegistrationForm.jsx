import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-event-name">Full name</Label>
        </div>
        <TextInput
          id="flowbite-event-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-event-email">Email address</Label>
        </div>
        <TextInput
          id="flowbite-event-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-event-ticket">Ticket type</Label>
        </div>
        <Select id="flowbite-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-event-guests">Number of guests</Label>
        </div>
        <TextInput
          id="flowbite-event-guests"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="flowbite-event-newsletter" name="newsletter" />
        <Label htmlFor="flowbite-event-newsletter">
          Notify me about future events
        </Label>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default EventRegistrationForm
