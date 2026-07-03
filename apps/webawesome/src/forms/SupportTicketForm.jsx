import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js'
import '@awesome.me/webawesome/dist/components/radio/radio.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Subject" name="subject" type="text" required />
      <wa-radio-group label="Priority" name="priority" required>
        <wa-radio value="low">Low</wa-radio>
        <wa-radio value="medium">Medium</wa-radio>
        <wa-radio value="high">High</wa-radio>
      </wa-radio-group>
      <wa-textarea
        label="Issue description"
        name="description"
        rows="4"
        required
      />
      <div className="wa-stack wa-gap-xs">
        <label>Attachments</label>
        <input type="file" name="attachments" multiple />
      </div>
      <wa-button type="submit" variant="brand">
        Submit ticket
      </wa-button>
    </form>
  )
}

export default SupportTicketForm
