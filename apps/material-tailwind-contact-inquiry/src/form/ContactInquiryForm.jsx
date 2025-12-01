import { Input, Textarea, Select, Option, Checkbox, Button, Typography } from '@material-tailwind/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Full name
        </Typography>
        <Input
          id="material-tailwind-contact-inquiry-fullname"
          name="fullName"
          type="text"
          required
          placeholder="Enter your full name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-contact-inquiry-email"
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
          Topic
        </Typography>
        <Select
          name="topic"
          label="Select topic"
          className="dark:text-white"
        >
          <Option value="support">Support</Option>
          <Option value="sales">Sales</Option>
          <Option value="feedback">Feedback</Option>
          <Option value="other">Other</Option>
        </Select>
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Message
        </Typography>
        <Textarea
          id="material-tailwind-contact-inquiry-message"
          name="message"
          required
          rows={4}
          placeholder="Enter your message"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <Checkbox
        name="consent"
        label={
          <Typography variant="small" color="gray" className="font-normal dark:text-gray-300">
            Allow follow-up communication
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button type="submit" color="blue">
        Submit inquiry
      </Button>
    </form>
  )
}

export default ContactInquiryForm
