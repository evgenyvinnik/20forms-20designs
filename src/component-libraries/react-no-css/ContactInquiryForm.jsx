function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="contact-topic">Topic</label>
        <select id="contact-topic" name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" required />
      </div>
      <div>
        <label>
          <input name="consent" type="checkbox" />Allow follow-up communication
        </label>
      </div>
      <button type="submit">Submit inquiry</button>
    </form>
  )
}

export default ContactInquiryForm
