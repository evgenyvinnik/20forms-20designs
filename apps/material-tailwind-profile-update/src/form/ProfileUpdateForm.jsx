import { Input, Textarea, Button, Typography } from '@material-tailwind/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          First name
        </Typography>
        <Input
          id="material-tailwind-profile-update-firstname"
          name="firstName"
          type="text"
          required
          placeholder="Enter your first name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Last name
        </Typography>
        <Input
          id="material-tailwind-profile-update-lastname"
          name="lastName"
          type="text"
          required
          placeholder="Enter your last name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-profile-update-email"
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
          Phone number
        </Typography>
        <Input
          id="material-tailwind-profile-update-phone"
          name="phone"
          type="tel"
          required
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          placeholder="Enter your phone number"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Short bio
        </Typography>
        <Textarea
          id="material-tailwind-profile-update-bio"
          name="bio"
          required
          rows={3}
          placeholder="Tell us about yourself"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <Button type="submit" color="blue">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
