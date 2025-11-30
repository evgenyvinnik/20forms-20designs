import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input
        label="Full name"
        name="name"
        type="text"
        required
      />
      <wa-input
        label="Email"
        name="email"
        type="email"
        required
      />
      <wa-input
        label="Phone"
        name="phone"
        type="tel"
        required
      />
      <wa-select
        label="Service"
        name="service"
        placeholder="Select a service"
        required
      >
        <wa-option value="consultation">General Consultation</wa-option>
        <wa-option value="followup">Follow-up Visit</wa-option>
        <wa-option value="specialist">Specialist Referral</wa-option>
        <wa-option value="checkup">Annual Checkup</wa-option>
      </wa-select>
      <wa-input
        label="Preferred date"
        name="date"
        type="date"
        required
      />
      <wa-select
        label="Preferred time"
        name="time"
        placeholder="Select a time slot"
        required
      >
        <wa-option value="9:00">9:00 AM</wa-option>
        <wa-option value="10:00">10:00 AM</wa-option>
        <wa-option value="11:00">11:00 AM</wa-option>
        <wa-option value="13:00">1:00 PM</wa-option>
        <wa-option value="14:00">2:00 PM</wa-option>
        <wa-option value="15:00">3:00 PM</wa-option>
        <wa-option value="16:00">4:00 PM</wa-option>
      </wa-select>
      <wa-textarea
        label="Additional notes"
        name="notes"
        rows="3"
      />
      <wa-button type="submit" variant="brand">
        Request appointment
      </wa-button>
    </form>
  )
}

export default AppointmentRequestForm
