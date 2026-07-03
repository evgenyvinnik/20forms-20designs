function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-event-name">Full name</label>
        <input id="nocss-event-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-event-email">Email address</label>
        <input id="nocss-event-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="nocss-event-ticket">Ticket type</label>
        <select id="nocss-event-ticket" name="ticketType" required>
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <label htmlFor="nocss-event-guests">Number of guests</label>
        <input
          id="nocss-event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          required
        />
      </div>
      <div>
        <label>
          <input name="newsletter" type="checkbox" />
          Notify me about future events
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default EventRegistrationForm
