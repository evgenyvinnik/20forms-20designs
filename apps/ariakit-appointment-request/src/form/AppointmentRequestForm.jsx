import * as Ariakit from '@ariakit/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-appointment-name" className="label">
          Full name
        </label>
        <input
          id="ariakit-appointment-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-appointment-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-appointment-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-appointment-date" className="label">
          Preferred date
        </label>
        <input
          id="ariakit-appointment-date"
          name="date"
          type="date"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-appointment-time" className="label">
          Preferred time
        </label>
        <input
          id="ariakit-appointment-time"
          name="time"
          type="time"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-appointment-reason" className="label">
          Reason for visit
        </label>
        <textarea
          id="ariakit-appointment-reason"
          name="reason"
          rows="3"
          className="textarea"
          required
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Request appointment
      </Ariakit.Button>
    </form>
  )
}

export default AppointmentRequestForm
