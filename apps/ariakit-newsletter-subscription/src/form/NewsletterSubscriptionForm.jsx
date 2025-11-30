import * as Ariakit from '@ariakit/react'

function NewsletterSubscriptionForm() {
  const agreeCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-newsletter-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-newsletter-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-newsletter-frequency" className="label">
          Frequency
        </label>
        <select
          id="ariakit-newsletter-frequency"
          name="frequency"
          className="select"
          required
        >
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={agreeCheckbox}
          name="agree"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Receive product updates</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Subscribe
      </Ariakit.Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
