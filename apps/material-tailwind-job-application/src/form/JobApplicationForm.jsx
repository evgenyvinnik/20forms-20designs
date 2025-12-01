import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from '@material-tailwind/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Job application submitted!')
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
          id="material-tailwind-job-application-fullName"
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
          id="material-tailwind-job-application-email"
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
          Phone number
        </Typography>
        <Input
          id="material-tailwind-job-application-phone"
          name="phone"
          type="tel"
          required
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Role applied for
        </Typography>
        <Input
          id="material-tailwind-job-application-role"
          name="role"
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
          Resume link
        </Typography>
        <Input
          id="material-tailwind-job-application-resume"
          name="resume"
          type="url"
          required
          placeholder="https://..."
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Cover letter
        </Typography>
        <Textarea
          id="material-tailwind-job-application-coverLetter"
          name="coverLetter"
          rows={4}
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="material-tailwind-job-application-updates"
          name="updates"
          className="dark:border-gray-600"
        />
        <Typography variant="small" className="text-gray-900 dark:text-white">
          Keep me informed about future roles
        </Typography>
      </div>
      <Button type="submit" className="mt-2">
        Submit application
      </Button>
    </form>
  )
}

export default JobApplicationForm
