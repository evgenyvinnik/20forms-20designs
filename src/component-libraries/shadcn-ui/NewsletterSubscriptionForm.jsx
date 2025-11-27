import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-newsletter-email">Email address</Label>
        <Input id="shadcn-newsletter-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-newsletter-frequency">Frequency</Label>
        <Select id="shadcn-newsletter-frequency" name="frequency" required>
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="agree" />
        <Label htmlFor="agree" className="font-normal">Receive product updates</Label>
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
