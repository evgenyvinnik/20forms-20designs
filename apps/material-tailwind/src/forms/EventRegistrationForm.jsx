import { useState } from 'react'
import { Input, Button, Checkbox, Select, Option, Typography } from '@material-tailwind/react'

function EventRegistrationForm() {
  const [ticketType, setTicketType] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Full name
        </Typography>
        <Input
          id="material-tailwind-event-registration-fullName"
          name="fullName"
          type="text"
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Email address
        </Typography>
        <Input
          id="material-tailwind-event-registration-email"
          name="email"
          type="email"
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Ticket type
        </Typography>
        <select
          id="material-tailwind-event-registration-ticketType"
          name="ticketType"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          required
          className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select ticket</option>
          <option value="general">General admission</option>
          <option value="vip">VIP</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Number of guests
        </Typography>
        <Input
          id="material-tailwind-event-registration-guestCount"
          name="guestCount"
          type="number"
          min={0}
          max={20}
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="material-tailwind-event-registration-newsletter"
          name="newsletter"
          className="dark:border-gray-600"
        />
        <Typography variant="small" className="text-gray-900 dark:text-white">
          Notify me about future events
        </Typography>
      </div>
      <Button type="submit" className="mt-2" fullWidth>
        Register
      </Button>
    </form>
  )
}

export default EventRegistrationForm
