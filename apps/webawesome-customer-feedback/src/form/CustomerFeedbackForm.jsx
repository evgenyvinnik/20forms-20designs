import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Name" name="name" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-select
        label="Overall rating"
        name="rating"
        placeholder="Select rating"
        required
      >
        <wa-option value="excellent">Excellent</wa-option>
        <wa-option value="good">Good</wa-option>
        <wa-option value="average">Average</wa-option>
        <wa-option value="poor">Poor</wa-option>
      </wa-select>
      <wa-textarea label="Comments" name="comments" rows="4" required />
      <wa-checkbox name="followUp">I would like a follow-up</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Send feedback
      </wa-button>
    </form>
  )
}

export default CustomerFeedbackForm
