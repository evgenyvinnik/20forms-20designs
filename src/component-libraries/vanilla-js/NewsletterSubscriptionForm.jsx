function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="newsletter-frequency">Frequency</label>
        <select id="newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>
      <div>
        <label>
          <input name="agree" type="checkbox" />Receive product updates
        </label>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  )
}

export default NewsletterSubscriptionForm
