import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-input label="Phone number" name="phone" type="tel" required />
      <wa-input label="Role applied for" name="role" type="text" required />
      <wa-input label="Resume link" name="resume" type="url" required />
      <wa-textarea label="Cover letter" name="coverLetter" rows="4" required />
      <wa-checkbox name="updates">
        Keep me informed about future roles
      </wa-checkbox>
      <wa-button type="submit" variant="brand">
        Submit application
      </wa-button>
    </form>
  )
}

export default JobApplicationForm
