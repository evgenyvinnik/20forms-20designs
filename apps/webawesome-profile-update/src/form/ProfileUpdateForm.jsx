import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/textarea/textarea.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="First name" name="firstName" type="text" required />
      <wa-input label="Last name" name="lastName" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-input label="Phone number" name="phone" type="tel" required />
      <wa-textarea label="Short bio" name="bio" rows="3" required />
      <wa-button type="submit" variant="brand">
        Save changes
      </wa-button>
    </form>
  )
}

export default ProfileUpdateForm
