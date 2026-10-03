import { Button, Input, InputArea } from '@cloudflare/kumo'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Input label="Preferred date" name="date" type="date" required />
      <Input label="Preferred time" name="time" type="time" required />
      <InputArea label="Reason for visit" name="reason" rows={3} required />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Request appointment
        </Button>
      </div>
    </form>
  )
}

export default AppointmentRequestForm
