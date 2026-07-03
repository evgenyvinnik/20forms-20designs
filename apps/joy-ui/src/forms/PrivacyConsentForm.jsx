function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-privacy-name">Full name</label>
        <input id="nocss-privacy-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-privacy-email">Email address</label>
        <input id="nocss-privacy-email" name="email" type="email" required />
      </div>
      <fieldset>
        <legend>Communication channels</legend>
        <label>
          <input name="emailOptIn" type="checkbox" />
          Email updates
        </label>
        <label>
          <input name="smsOptIn" type="checkbox" />
          SMS notifications
        </label>
        <label>
          <input name="phoneOptIn" type="checkbox" />
          Phone calls
        </label>
      </fieldset>
      <fieldset>
        <legend>Privacy options</legend>
        <label>
          <input name="analytics" type="checkbox" />
          Allow analytics cookies
        </label>
        <label>
          <input name="personalization" type="checkbox" />
          Allow personalized content
        </label>
      </fieldset>
      <div>
        <label htmlFor="nocss-privacy-notes">Additional notes</label>
        <textarea id="nocss-privacy-notes" name="notes" rows="3" />
      </div>
      <button type="submit">Save preferences</button>
    </form>
  )
}

export default PrivacyConsentForm
