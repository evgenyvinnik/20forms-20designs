import * as Ariakit from '@ariakit/react'

function JobApplicationForm() {
  const updatesCheckbox = Ariakit.useCheckboxStore({ defaultValue: false })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-job-full-name" className="label">
          Full name
        </label>
        <input
          id="ariakit-job-full-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-job-email" className="label">
          Email address
        </label>
        <input
          id="ariakit-job-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-job-phone" className="label">
          Phone number
        </label>
        <input
          id="ariakit-job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-job-role" className="label">
          Role applied for
        </label>
        <input
          id="ariakit-job-role"
          name="role"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-job-resume" className="label">
          Resume link
        </label>
        <input
          id="ariakit-job-resume"
          name="resume"
          type="url"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-job-cover-letter" className="label">
          Cover letter
        </label>
        <textarea
          id="ariakit-job-cover-letter"
          name="coverLetter"
          rows="4"
          className="textarea"
          required
        />
      </div>
      <label className="checkbox-wrapper">
        <Ariakit.Checkbox
          store={updatesCheckbox}
          name="updates"
          className="checkbox"
        >
          <Ariakit.CheckboxCheck className="checkbox-check" />
        </Ariakit.Checkbox>
        <span className="checkbox-label">Keep me informed about future roles</span>
      </label>
      <Ariakit.Button type="submit" className="button button-primary">
        Submit application
      </Ariakit.Button>
    </form>
  )
}

export default JobApplicationForm
