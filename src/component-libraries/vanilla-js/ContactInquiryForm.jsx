function ContactInquiryForm() {
  return (
    <form>
      <div>
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="contact-topic">Topic</label>
        <select id="contact-topic" name="topic">
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" />
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
