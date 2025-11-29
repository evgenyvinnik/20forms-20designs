import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-contact-name">Full name</Label>
        <Input id="shadcn-contact-name" name="fullName" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-contact-email">Email address</Label>
        <Input id="shadcn-contact-email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-contact-topic">Topic</Label>
        <Select id="shadcn-contact-topic" name="topic" required>
          <option value="">Select topic</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-contact-message">Message</Label>
        <Textarea
          id="shadcn-contact-message"
          name="message"
          rows="4"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="shadcn-contact-consent" name="consent" />
        <Label htmlFor="shadcn-contact-consent" className="text-sm font-normal">
          Allow follow-up communication
        </Label>
      </div>
      <Button type="submit">Submit inquiry</Button>
    </form>
  )
}

export default ContactInquiryForm
