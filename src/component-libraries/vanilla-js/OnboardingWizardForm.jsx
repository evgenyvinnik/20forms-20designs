function OnboardingWizardForm() {
  return (
    <form>
      <section>
        <h3>Step 1: Account</h3>
        <div>
          <label htmlFor="onboarding-email">Work email</label>
          <input id="onboarding-email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="onboarding-password">Password</label>
          <input id="onboarding-password" name="password" type="password" />
        </div>
      </section>
      <section>
        <h3>Step 2: Team</h3>
        <div>
          <label htmlFor="onboarding-team-name">Team name</label>
          <input id="onboarding-team-name" name="teamName" type="text" />
        </div>
        <div>
          <label htmlFor="onboarding-size">Team size</label>
          <select id="onboarding-size" name="teamSize">
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
          <label htmlFor="onboarding-goal">Primary goal</label>
          <textarea id="onboarding-goal" name="goal" rows="3" />
        </div>
        <div>
          <label>
            <input name="updates" type="checkbox" />Send me product tips
          </label>
        </div>
      </section>
      <div>
        <button type="button">Back</button>
        <button type="submit">Finish setup</button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
