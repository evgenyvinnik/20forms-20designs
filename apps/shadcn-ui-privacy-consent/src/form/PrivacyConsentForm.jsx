import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="shadcn-privacy-name">Full name</Label>
        <Input id="shadcn-privacy-name" name="fullName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-privacy-email">Email address</Label>
        <Input id="shadcn-privacy-email" name="email" type="email" required />
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Communication channels</legend>
        <div className="flex items-center space-x-2">
          <Checkbox id="shadcn-privacy-email-opt" name="emailOptIn" />
          <Label
            htmlFor="shadcn-privacy-email-opt"
            className="text-sm font-normal"
          >
            Email updates
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="shadcn-privacy-sms" name="smsOptIn" />
          <Label htmlFor="shadcn-privacy-sms" className="text-sm font-normal">
            SMS notifications
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="shadcn-privacy-phone" name="phoneOptIn" />
          <Label htmlFor="shadcn-privacy-phone" className="text-sm font-normal">
            Phone calls
          </Label>
        </div>
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Privacy options</legend>
        <div className="flex items-center space-x-2">
          <Checkbox id="shadcn-privacy-analytics" name="analytics" />
          <Label
            htmlFor="shadcn-privacy-analytics"
            className="text-sm font-normal"
          >
            Allow analytics cookies
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="shadcn-privacy-personalization"
            name="personalization"
          />
          <Label
            htmlFor="shadcn-privacy-personalization"
            className="text-sm font-normal"
          >
            Allow personalized content
          </Label>
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
