import * as Ariakit from '@ariakit/react'

function ContactInquiryForm() {
  const consentCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-contact-name" className="label">
          Full name
        </label>
        <input
          id="ariakit-contact-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-contact-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-contact-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-contact-topic" className="label">
          Topic
        </label>
        <select
          id="ariakit-contact-topic"
          name="topic"
          className="select"
          required
        >
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-contact-message" className="label">
          Message
        </label>
        <textarea
          id="ariakit-contact-message"
          name="message"
          rows="4"
          className="textarea"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={consentCheckbox}
          name="consent"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Allow follow-up communication</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Submit inquiry
      </Ariakit.Button>
    </form>
  )
}

export default ContactInquiryForm
