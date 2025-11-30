import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-select
        label="Ticket type"
        name="ticketType"
        placeholder="Select ticket"
        required
      >
        <wa-option value="general">General admission</wa-option>
        <wa-option value="vip">VIP</wa-option>
        <wa-option value="student">Student</wa-option>
      </wa-select>
      <wa-input
        label="Number of guests"
        name="guestCount"
        type="number"
        min="0"
        max="20"
        required
      />
      <wa-checkbox name="newsletter">Notify me about future events</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Register
      </wa-button>
    </form>
  )
}

export default EventRegistrationForm
