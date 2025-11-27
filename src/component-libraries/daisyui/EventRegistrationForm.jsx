function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="event-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="event-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="event-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="event-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="event-ticket" className="label">
          <span className="label-text">Ticket type</span>
        </label>
        <select
          id="event-ticket"
          name="ticketType"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="event-guests" className="label">
          <span className="label-text">Number of guests</span>
        </label>
        <input
          id="event-guests"
          name="guestCount"
          type="number"
          min="0"
          max="20"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="newsletter" type="checkbox" className="checkbox" />
          <span className="label-text">Notify me about future events</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Register
      </button>
    </form>
  )
}

export default EventRegistrationForm
