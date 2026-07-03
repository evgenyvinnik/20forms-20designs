function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-newsletter-email">Email address</label>
        <input id="nocss-newsletter-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="nocss-newsletter-frequency">Frequency</label>
        <select id="nocss-newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>
      <div>
        <label>
          <input name="agree" type="checkbox" />
          Receive product updates
        </label>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  )
}

export default NewsletterSubscriptionForm
