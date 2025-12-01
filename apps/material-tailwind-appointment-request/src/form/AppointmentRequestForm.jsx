import { Input, Button, Textarea, Typography } from '@material-tailwind/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
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
          id="material-tailwind-appointment-request-fullName"
          name="fullName"
          type="text"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
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
          id="material-tailwind-appointment-request-email"
          name="email"
          type="email"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Preferred date
        </Typography>
        <Input
          id="material-tailwind-appointment-request-date"
          name="date"
          type="date"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Preferred time
        </Typography>
        <Input
          id="material-tailwind-appointment-request-time"
          name="time"
          type="time"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Reason for visit
        </Typography>
        <Textarea
          id="material-tailwind-appointment-request-reason"
          name="reason"
          rows={3}
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <Button type="submit" className="mt-2">
        Request appointment
      </Button>
    </form>
  )
}

export default AppointmentRequestForm
