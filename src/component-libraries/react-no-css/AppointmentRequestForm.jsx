function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appointment-name">Full name</label>
        <input id="appointment-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="appointment-email">Email address</label>
        <input id="appointment-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="appointment-date">Preferred date</label>
        <input id="appointment-date" name="date" type="date" required />
      </div>
      <div>
        <label htmlFor="appointment-time">Preferred time</label>
        <input id="appointment-time" name="time" type="time" required />
      </div>
      <div>
        <label htmlFor="appointment-reason">Reason for visit</label>
        <textarea id="appointment-reason" name="reason" rows="3" required />
      </div>
      <button type="submit">Request appointment</button>
    </form>
  )
}

export default AppointmentRequestForm
