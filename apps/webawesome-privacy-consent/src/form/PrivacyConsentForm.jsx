import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <p style={{ marginBottom: '8px' }}>
        We value your privacy. Please review and manage your consent preferences below.
      </p>
      <wa-checkbox name="essential" checked disabled>
        Essential cookies (required)
      </wa-checkbox>
      <wa-checkbox name="analytics">
        Analytics cookies
      </wa-checkbox>
      <wa-checkbox name="marketing">
        Marketing cookies
      </wa-checkbox>
      <wa-checkbox name="personalization">
        Personalization cookies
      </wa-checkbox>
      <wa-checkbox name="thirdParty">
        Third-party cookies
      </wa-checkbox>
      <wa-checkbox name="terms" required>
        I have read and agree to the Privacy Policy
      </wa-checkbox>
      <div className="wa-cluster wa-gap-s">
        <wa-button type="submit" variant="brand">
          Save preferences
        </wa-button>
        <wa-button type="button" variant="neutral">
          Reject all
        </wa-button>
      </div>
    </form>
  )
}

export default PrivacyConsentForm
