import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-input label="Preferred date" name="date" type="date" required />
      <wa-input label="Preferred time" name="time" type="time" required />
      <wa-textarea label="Reason for visit" name="reason" rows="3" required />
      <wa-button type="submit" variant="brand">
        Request appointment
      </wa-button>
    </form>
  )
}

export default AppointmentRequestForm
