function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-profile-first-name">First name</label>
        <input
          id="nocss-profile-first-name"
          name="firstName"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-profile-last-name">Last name</label>
        <input
          id="nocss-profile-last-name"
          name="lastName"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-profile-email">Email address</label>
        <input id="nocss-profile-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="nocss-profile-phone">Phone number</label>
        <input
          id="nocss-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-profile-bio">Short bio</label>
        <textarea id="nocss-profile-bio" name="bio" rows="3" required />
      </div>
      <button type="submit">Save changes</button>
    </form>
  )
}

export default ProfileUpdateForm
