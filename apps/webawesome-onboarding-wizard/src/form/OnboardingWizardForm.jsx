import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const handleBack = () => {
    alert('Back action placeholder')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <section>
        <h3>Step 1: Account</h3>
        <div className="wa-stack wa-gap-m">
          <wa-input label="Work email" name="email" type="email" required />
          <wa-input
            label="Password"
            name="password"
            type="password"
            minlength="8"
            required
          />
        </div>
      </section>

      <section>
        <h3>Step 2: Team</h3>
        <div className="wa-stack wa-gap-m">
          <wa-input label="Team name" name="teamName" type="text" required />
          <wa-select
            label="Team size"
            name="teamSize"
            placeholder="Select size"
            required
          >
            <wa-option value="1-5">1-5</wa-option>
            <wa-option value="6-20">6-20</wa-option>
            <wa-option value="21-50">21-50</wa-option>
            <wa-option value="50+">50+</wa-option>
          </wa-select>
        </div>
      </section>

      <section>
        <h3>Step 3: Preferences</h3>
        <div className="wa-stack wa-gap-m">
          <wa-textarea label="Primary goal" name="goal" rows="3" required />
          <wa-checkbox name="updates">Send me product tips</wa-checkbox>
        </div>
      </section>

      <div className="wa-cluster wa-gap-s">
        <wa-button type="button" variant="neutral" onClick={handleBack}>
          Back
        </wa-button>
        <wa-button type="submit" variant="brand">
          Finish setup
        </wa-button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
