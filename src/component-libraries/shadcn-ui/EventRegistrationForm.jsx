import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Checkbox } from './ui/checkbox'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-event-name">Full name</Label>
        <Input id="shadcn-event-name" name="fullName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-event-email">Email address</Label>
        <Input id="shadcn-event-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-event-ticket">Ticket type</Label>
        <Select id="shadcn-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-event-guests">Number of guests</Label>
        <Input id="shadcn-event-guests" name="guestCount" type="number" min="0" max="20" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="newsletter" />
        <Label htmlFor="newsletter" className="font-normal">Notify me about future events</Label>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default EventRegistrationForm
