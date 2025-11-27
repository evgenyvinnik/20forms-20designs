function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="privacy-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="privacy-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="privacy-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="privacy-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <fieldset className="border p-4 rounded-lg">
        <legend className="text-lg font-bold px-2">
          Communication channels
        </legend>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input name="emailOptIn" type="checkbox" className="checkbox" />
            <span className="label-text">Email updates</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input name="smsOptIn" type="checkbox" className="checkbox" />
            <span className="label-text">SMS notifications</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input name="phoneOptIn" type="checkbox" className="checkbox" />
            <span className="label-text">Phone calls</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="border p-4 rounded-lg">
        <legend className="text-lg font-bold px-2">Privacy options</legend>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input name="analytics" type="checkbox" className="checkbox" />
            <span className="label-text">Allow analytics cookies</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input
              name="personalization"
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text">Allow personalized content</span>
          </label>
        </div>
      </fieldset>
      <div className="form-control">
        <label htmlFor="privacy-notes" className="label">
          <span className="label-text">Additional notes</span>
        </label>
        <textarea
          id="privacy-notes"
          name="notes"
          rows="3"
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Save preferences
      </button>
    </form>
  )
}

export default PrivacyConsentForm
