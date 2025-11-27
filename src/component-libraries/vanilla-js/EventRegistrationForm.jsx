function EventRegistrationForm() {
  return (
    <form>
      <div>
        <label htmlFor="event-name">Full name</label>
        <input id="event-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="event-email">Email address</label>
        <input id="event-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="event-ticket">Ticket type</label>
        <select id="event-ticket" name="ticketType">
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <label htmlFor="event-guests">Number of guests</label>
        <input id="event-guests" name="guestCount" type="number" min="0" />
      </div>
      <div>
        <label>
          <input name="newsletter" type="checkbox" />Notify me about future events
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default EventRegistrationForm
