function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="profile-first-name">First name</label>
        <input id="profile-first-name" name="firstName" type="text" required />
      </div>
      <div>
        <label htmlFor="profile-last-name">Last name</label>
        <input id="profile-last-name" name="lastName" type="text" required />
      </div>
      <div>
        <label htmlFor="profile-email">Email address</label>
        <input id="profile-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="profile-phone">Phone number</label>
        <input
          id="profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div>
        <label htmlFor="profile-bio">Short bio</label>
        <textarea id="profile-bio" name="bio" rows="3" required />
      </div>
      <button type="submit">Save changes</button>
    </form>
  )
}

export default ProfileUpdateForm
