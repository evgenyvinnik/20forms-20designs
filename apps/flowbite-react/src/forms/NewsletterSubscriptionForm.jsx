import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
} from 'flowbite-react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Newsletter Subscription</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-newsletter-email" value="Email address" />
          </div>
          <TextInput
            id="flowbite-newsletter-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-newsletter-frequency" value="Frequency" />
          </div>
          <Select id="flowbite-newsletter-frequency" name="frequency" required>
            <option value="">Select frequency</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-newsletter-agree" name="agree" />
          <Label htmlFor="flowbite-newsletter-agree">
            Receive product updates
          </Label>
        </div>
        <Button type="submit">Subscribe</Button>
      </form>
    </Card>
  )
}

export default NewsletterSubscriptionForm
