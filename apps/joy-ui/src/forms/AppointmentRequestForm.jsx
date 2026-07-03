function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-appointment-name">Full name</label>
        <input
          id="nocss-appointment-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-appointment-email">Email address</label>
        <input
          id="nocss-appointment-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-appointment-date">Preferred date</label>
        <input id="nocss-appointment-date" name="date" type="date" required />
      </div>
      <div>
        <label htmlFor="nocss-appointment-time">Preferred time</label>
        <input id="nocss-appointment-time" name="time" type="time" required />
      </div>
      <div>
        <label htmlFor="nocss-appointment-reason">Reason for visit</label>
        <textarea
          id="nocss-appointment-reason"
          name="reason"
          rows="3"
          required
        />
      </div>
      <button type="submit">Request appointment</button>
    </form>
  )
}

export default AppointmentRequestForm
