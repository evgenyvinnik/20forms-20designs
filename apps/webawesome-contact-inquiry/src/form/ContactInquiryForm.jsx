import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-select label="Topic" name="topic" placeholder="Select topic" required>
        <wa-option value="support">Support</wa-option>
        <wa-option value="sales">Sales</wa-option>
        <wa-option value="feedback">Feedback</wa-option>
        <wa-option value="other">Other</wa-option>
      </wa-select>
      <wa-textarea label="Message" name="message" rows="4" required />
      <wa-checkbox name="consent">Allow follow-up communication</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Submit inquiry
      </wa-button>
    </form>
  )
}

export default ContactInquiryForm
