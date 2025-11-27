import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-privacy-name">Full name</Label>
        <Input id="shadcn-privacy-name" name="fullName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-privacy-email">Email address</Label>
        <Input id="shadcn-privacy-email" name="email" type="email" required />
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Communication channels</legend>
        <div className="flex items-center space-x-2">
          <Checkbox name="emailOptIn" />
          <Label htmlFor="emailOptIn" className="font-normal">Email updates</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="smsOptIn" />
          <Label htmlFor="smsOptIn" className="font-normal">SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="phoneOptIn" />
          <Label htmlFor="phoneOptIn" className="font-normal">Phone calls</Label>
        </div>
      </fieldset>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Privacy options</legend>
        <div className="flex items-center space-x-2">
          <Checkbox name="analytics" />
          <Label htmlFor="analytics" className="font-normal">Allow analytics cookies</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="personalization" />
          <Label htmlFor="personalization" className="font-normal">Allow personalized content</Label>
        </div>
      </fieldset>
      <div className="space-y-2">
        <Label htmlFor="shadcn-privacy-notes">Additional notes</Label>
        <Textarea id="shadcn-privacy-notes" name="notes" rows="3" />
      </div>
      <Button type="submit">Save preferences</Button>
    </form>
  )
}

export default PrivacyConsentForm
