function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="job-full-name" className="label">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="job-full-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="job-email" className="label">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="job-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="job-phone" className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input
          id="job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="job-role" className="label">
          <span className="label-text">Role applied for</span>
        </label>
        <input
          id="job-role"
          name="role"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="job-resume" className="label">
          <span className="label-text">Resume link</span>
        </label>
        <input
          id="job-resume"
          name="resume"
          type="url"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="job-cover-letter" className="label">
          <span className="label-text">Cover letter</span>
        </label>
        <textarea
          id="job-cover-letter"
          name="coverLetter"
          rows="4"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="updates" type="checkbox" className="checkbox" />
          <span className="label-text">
            Keep me informed about future roles
          </span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Submit application
      </button>
    </form>
  )
}

export default JobApplicationForm
