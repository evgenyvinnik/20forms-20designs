import * as Ariakit from '@ariakit/react'

function EventRegistrationForm() {
  const newsletterCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-event-name" className="label">
          Full name
        </label>
        <input
          id="ariakit-event-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-event-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-event-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-event-ticket" className="label">
          Ticket type
        </label>
        <select
          id="ariakit-event-ticket"
          name="ticketType"
          className="select"
          required
        >
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-event-guests" className="label">
          Number of guests
        </label>
        <input
          id="ariakit-event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          className="input"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={newsletterCheckbox}
          name="newsletter"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Notify me about future events</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Register
      </Ariakit.Button>
    </form>
  )
}

export default EventRegistrationForm
