function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Step 1: Account</h3>
        <div className="form-control">
          <label htmlFor="onboarding-email" className="label">
            <span className="label-text">Work email</span>
          </label>
          <input
            id="onboarding-email"
            name="email"
            type="email"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="onboarding-password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="onboarding-password"
            name="password"
            type="password"
            minLength="8"
            required
            className="input input-bordered w-full"
          />
        </div>
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Step 2: Team</h3>
        <div className="form-control">
          <label htmlFor="onboarding-team-name" className="label">
            <span className="label-text">Team name</span>
          </label>
          <input
            id="onboarding-team-name"
            name="teamName"
            type="text"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="onboarding-size" className="label">
            <span className="label-text">Team size</span>
          </label>
          <select
            id="onboarding-size"
            name="teamSize"
            required
            className="select select-bordered w-full"
          >
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </section>
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">Step 3: Preferences</h3>
        <div className="form-control">
          <label htmlFor="onboarding-goal" className="label">
            <span className="label-text">Primary goal</span>
          </label>
          <textarea
            id="onboarding-goal"
            name="goal"
            rows="3"
            required
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input name="updates" type="checkbox" className="checkbox" />
            <span className="label-text">Send me product tips</span>
          </label>
        </div>
      </section>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => alert('Back action placeholder')}
          className="btn btn-ghost flex-1"
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary flex-1">
          Finish setup
        </button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
