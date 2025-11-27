function AppointmentRequestForm() {
  return (
    <form>
      <div>
        <label htmlFor="appointment-name">Full name</label>
        <input id="appointment-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="appointment-email">Email address</label>
        <input id="appointment-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="appointment-date">Preferred date</label>
        <input id="appointment-date" name="date" type="date" />
      </div>
      <div>
        <label htmlFor="appointment-time">Preferred time</label>
        <input id="appointment-time" name="time" type="time" />
      </div>
      <div>
        <label htmlFor="appointment-reason">Reason for visit</label>
        <textarea id="appointment-reason" name="reason" rows="3" />
      </div>
      <button type="submit">Request appointment</button>
    </form>
  )
}

export default AppointmentRequestForm
