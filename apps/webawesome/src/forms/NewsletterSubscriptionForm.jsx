import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Email address" name="email" type="email" required />
      <wa-select
        label="Frequency"
        name="frequency"
        placeholder="Select frequency"
        required
      >
        <wa-option value="weekly">Weekly</wa-option>
        <wa-option value="monthly">Monthly</wa-option>
        <wa-option value="quarterly">Quarterly</wa-option>
      </wa-select>
      <wa-checkbox name="agree">Receive product updates</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Subscribe
      </wa-button>
    </form>
  )
}

export default NewsletterSubscriptionForm
