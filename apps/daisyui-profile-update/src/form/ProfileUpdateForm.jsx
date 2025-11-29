function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-profile-first-name">
          <span className="label-text">First name</span>
        </label>
        <input
          id="daisyui-profile-first-name"
          name="firstName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-profile-last-name">
          <span className="label-text">Last name</span>
        </label>
        <input
          id="daisyui-profile-last-name"
          name="lastName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-profile-email">
          <span className="label-text">Email address</span>
        </label>
        <input
          id="daisyui-profile-email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-profile-phone">
          <span className="label-text">Phone number</span>
        </label>
        <input
          id="daisyui-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-profile-bio">
          <span className="label-text">Short bio</span>
        </label>
        <textarea
          id="daisyui-profile-bio"
          name="bio"
          rows="3"
          required
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save changes
      </button>
    </form>
  )
}

export default ProfileUpdateForm
