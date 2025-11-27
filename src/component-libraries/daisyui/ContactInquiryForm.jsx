function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="contact-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="contact-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="contact-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="contact-topic" className="label">
          <span className="label-text">Topic</span>
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="contact-message" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="consent" type="checkbox" className="checkbox" />
          <span className="label-text">Allow follow-up communication</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit inquiry
      </button>
    </form>
  )
}

export default ContactInquiryForm
