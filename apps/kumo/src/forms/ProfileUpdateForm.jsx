import { Button, Input, InputArea } from '@cloudflare/kumo'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="First name" name="firstName" type="text" required />
      <Input label="Last name" name="lastName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        required
      />
      <InputArea label="Short bio" name="bio" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Save changes
        </Button>
      </div>
    </form>
  )
}

export default ProfileUpdateForm
