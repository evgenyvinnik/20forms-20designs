function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="privacy-name">Full name</label>
        <input id="privacy-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="privacy-email">Email address</label>
        <input id="privacy-email" name="email" type="email" required />
      </div>
      <fieldset>
        <legend>Communication channels</legend>
        <label>
          <input name="emailOptIn" type="checkbox" />Email updates
        </label>
        <label>
          <input name="smsOptIn" type="checkbox" />SMS notifications
        </label>
        <label>
          <input name="phoneOptIn" type="checkbox" />Phone calls
        </label>
      </fieldset>
      <fieldset>
        <legend>Privacy options</legend>
        <label>
          <input name="analytics" type="checkbox" />Allow analytics cookies
        </label>
        <label>
          <input name="personalization" type="checkbox" />Allow personalized content
        </label>
      </fieldset>
      <div>
        <label htmlFor="privacy-notes">Additional notes</label>
        <textarea id="privacy-notes" name="notes" rows="3" />
      </div>
      <button type="submit">Save preferences</button>
    </form>
  )
}

export default PrivacyConsentForm
