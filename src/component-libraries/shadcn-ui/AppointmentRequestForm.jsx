import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-appointment-name">Full name</Label>
        <Input
          id="shadcn-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-appointment-email">Email address</Label>
        <Input
          id="shadcn-appointment-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-appointment-date">Preferred date</Label>
        <Input id="shadcn-appointment-date" name="date" type="date" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-appointment-time">Preferred time</Label>
        <Input id="shadcn-appointment-time" name="time" type="time" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-appointment-reason">Reason for visit</Label>
        <Textarea
          id="shadcn-appointment-reason"
          name="reason"
          rows="3"
          required
        />
      </div>
      <Button type="submit">Request appointment</Button>
    </form>
  )
}

export default AppointmentRequestForm
