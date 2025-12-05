import { Button, Label, TextInput, Textarea } from 'flowbite-react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-profile-first-name">First name</Label>
        </div>
        <TextInput
          id="flowbite-profile-first-name"
          name="firstName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-profile-last-name">Last name</Label>
        </div>
        <TextInput
          id="flowbite-profile-last-name"
          name="lastName"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-profile-email">Email address</Label>
        </div>
        <TextInput
          id="flowbite-profile-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-profile-phone">Phone number</Label>
        </div>
        <TextInput
          id="flowbite-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-profile-bio">Short bio</Label>
        </div>
        <Textarea id="flowbite-profile-bio" name="bio" rows={3} required />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}

export default ProfileUpdateForm
