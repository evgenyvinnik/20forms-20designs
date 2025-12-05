import { Button, Label, TextInput, Textarea } from 'flowbite-react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-appointment-name">Full name</Label>
        </div>
        <TextInput
          id="flowbite-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-appointment-email">Email address</Label>
        </div>
        <TextInput
          id="flowbite-appointment-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-appointment-date">Preferred date</Label>
        </div>
        <TextInput
          id="flowbite-appointment-date"
          name="date"
          type="date"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-appointment-time">Preferred time</Label>
        </div>
        <TextInput
          id="flowbite-appointment-time"
          name="time"
          type="time"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-appointment-reason">Reason for visit</Label>
        </div>
        <Textarea
          id="flowbite-appointment-reason"
          name="reason"
          rows={3}
          required
        />
      </div>
      <Button type="submit">Request appointment</Button>
    </form>
  )
}

export default AppointmentRequestForm
