function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h3>Step 1: Account</h3>
        <div>
          <label htmlFor="nocss-onboarding-email">Work email</label>
          <input
            id="nocss-onboarding-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="nocss-onboarding-password">Password</label>
          <input
            id="nocss-onboarding-password"
            name="password"
            type="password"
            minLength="8"
            required
          />
        </div>
      </section>
      <section>
        <h3>Step 2: Team</h3>
        <div>
          <label htmlFor="nocss-onboarding-team-name">Team name</label>
          <input
            id="nocss-onboarding-team-name"
            name="teamName"
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="nocss-onboarding-size">Team size</label>
          <select id="nocss-onboarding-size" name="teamSize" required>
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </section>
      <section>
        <h3>Step 3: Preferences</h3>
        <div>
          <label htmlFor="nocss-onboarding-goal">Primary goal</label>
          <textarea id="nocss-onboarding-goal" name="goal" rows="3" required />
        </div>
        <div>
          <label>
            <input name="updates" type="checkbox" />
            Send me product tips
          </label>
        </div>
      </section>
      <div>
        <button type="button" onClick={() => alert('Back action placeholder')}>
          Back
        </button>
        <button type="submit">Finish setup</button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
