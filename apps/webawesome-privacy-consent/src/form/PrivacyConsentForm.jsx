import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Full name" name="fullName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />

      <fieldset
        style={{
          border: '1px solid var(--wa-color-neutral-300)',
          padding: '1rem',
          borderRadius: '4px',
        }}
      >
        <legend style={{ fontWeight: 'bold' }}>Communication channels</legend>
        <div className="wa-stack wa-gap-s">
          <wa-checkbox name="emailOptIn">Email updates</wa-checkbox>
          <wa-checkbox name="smsOptIn">SMS notifications</wa-checkbox>
          <wa-checkbox name="phoneOptIn">Phone calls</wa-checkbox>
        </div>
      </fieldset>

      <fieldset
        style={{
          border: '1px solid var(--wa-color-neutral-300)',
          padding: '1rem',
          borderRadius: '4px',
        }}
      >
        <legend style={{ fontWeight: 'bold' }}>Privacy options</legend>
        <div className="wa-stack wa-gap-s">
          <wa-checkbox name="analytics">Allow analytics cookies</wa-checkbox>
          <wa-checkbox name="personalization">
            Allow personalized content
          </wa-checkbox>
        </div>
      </fieldset>

      <wa-textarea label="Additional notes" name="notes" rows="3" />

      <wa-button type="submit" variant="brand">
        Save preferences
      </wa-button>
    </form>
  )
}

export default PrivacyConsentForm
