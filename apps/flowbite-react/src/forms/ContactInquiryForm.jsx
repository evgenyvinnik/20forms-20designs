import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from 'flowbite-react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Card className="mx-4 w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Contact Inquiry</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-contact-name">Full name</Label>
          </div>
          <TextInput
            id="flowbite-contact-name"
            name="fullName"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-contact-email">Email address</Label>
          </div>
          <TextInput
            id="flowbite-contact-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-contact-topic">Topic</Label>
          </div>
          <Select id="flowbite-contact-topic" name="topic" required>
            <option value="">Select topic</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-contact-message">Message</Label>
          </div>
          <Textarea
            id="flowbite-contact-message"
            name="message"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-contact-consent" name="consent" />
          <Label htmlFor="flowbite-contact-consent">
            Allow follow-up communication
          </Label>
        </div>
        <Button type="submit">Submit inquiry</Button>
      </form>
    </Card>
  )
}

export default ContactInquiryForm
