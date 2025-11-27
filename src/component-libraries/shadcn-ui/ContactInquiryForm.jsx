import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'

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
        <Textarea id="shadcn-contact-message" name="message" rows="4" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="consent" />
        <Label htmlFor="consent" className="font-normal">Allow follow-up communication</Label>
      </div>
      <Button type="submit">Submit inquiry</Button>
    </form>
  )
}

export default ContactInquiryForm
