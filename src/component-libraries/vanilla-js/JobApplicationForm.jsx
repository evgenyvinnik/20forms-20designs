function JobApplicationForm() {
  return (
    <form>
      <div>
        <label htmlFor="job-full-name">Full name</label>
        <input id="job-full-name" name="fullName" type="text" />
      </div>
      <div>
        <label htmlFor="job-email">Email address</label>
        <input id="job-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="job-phone">Phone number</label>
        <input id="job-phone" name="phone" type="tel" />
      </div>
      <div>
        <label htmlFor="job-role">Role applied for</label>
        <input id="job-role" name="role" type="text" />
      </div>
      <div>
        <label htmlFor="job-resume">Resume link</label>
        <input id="job-resume" name="resume" type="url" />
      </div>
      <div>
        <label htmlFor="job-cover-letter">Cover letter</label>
        <textarea id="job-cover-letter" name="coverLetter" rows="4" />
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
