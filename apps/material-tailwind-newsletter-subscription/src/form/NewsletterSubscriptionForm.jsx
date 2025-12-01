import { Input, Select, Option, Checkbox, Button, Typography } from '@material-tailwind/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-newsletter-subscription-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Frequency
        </Typography>
        <Select
          name="frequency"
          label="Select frequency"
          className="dark:text-white"
        >
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="quarterly">Quarterly</Option>
        </Select>
      </div>
      <Checkbox
        name="agree"
        label={
          <Typography variant="small" color="gray" className="font-normal dark:text-gray-300">
            Receive product updates
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button type="submit" color="blue">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
