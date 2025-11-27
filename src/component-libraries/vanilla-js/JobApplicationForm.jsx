function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="job-full-name">Full name</label>
        <input id="job-full-name" name="fullName" type="text" required />
      </div>
      <div>
        <label htmlFor="job-email">Email address</label>
        <input id="job-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="job-phone">Phone number</label>
        <input
          id="job-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div>
        <label htmlFor="job-role">Role applied for</label>
        <input id="job-role" name="role" type="text" required />
      </div>
      <div>
        <label htmlFor="job-resume">Resume link</label>
        <input id="job-resume" name="resume" type="url" required />
      </div>
      <div>
        <label htmlFor="job-cover-letter">Cover letter</label>
        <textarea id="job-cover-letter" name="coverLetter" rows="4" required />
      </div>
      <div>
        <label>
          <input name="updates" type="checkbox" />Keep me informed about future roles
        </label>
      </div>
      <button type="submit">Submit application</button>
    </form>
  )
}

export default JobApplicationForm
