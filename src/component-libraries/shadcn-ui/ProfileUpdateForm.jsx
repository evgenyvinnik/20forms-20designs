import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-profile-first-name">First name</Label>
        <Input id="shadcn-profile-first-name" name="firstName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-profile-last-name">Last name</Label>
        <Input id="shadcn-profile-last-name" name="lastName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-profile-email">Email address</Label>
        <Input id="shadcn-profile-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-profile-phone">Phone number</Label>
        <Input
          id="shadcn-profile-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-profile-bio">Short bio</Label>
        <Textarea id="shadcn-profile-bio" name="bio" rows="3" required />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}

export default ProfileUpdateForm
