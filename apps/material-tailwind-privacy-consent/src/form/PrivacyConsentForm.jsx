import { Input, Button, Textarea, Checkbox, Typography } from '@material-tailwind/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" className="mb-1 font-medium text-gray-900 dark:text-white">
          Full name
        </Typography>
        <Input
          id="material-tailwind-privacy-consent-fullName"
          name="fullName"
          type="text"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" className="mb-1 font-medium text-gray-900 dark:text-white">
          Email address
        </Typography>
        <Input
          id="material-tailwind-privacy-consent-email"
          name="email"
          type="email"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>

      <fieldset className="border border-gray-300 dark:border-gray-700 rounded-md p-4">
        <Typography as="legend" variant="small" className="font-medium text-gray-900 dark:text-white px-2">
          Communication channels
        </Typography>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="material-tailwind-privacy-consent-emailOptIn"
              name="emailOptIn"
              className="dark:border-gray-600"
            />
            <Typography variant="small" className="text-gray-900 dark:text-white">
              Email updates
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="material-tailwind-privacy-consent-smsOptIn"
              name="smsOptIn"
              className="dark:border-gray-600"
            />
            <Typography variant="small" className="text-gray-900 dark:text-white">
              SMS notifications
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="material-tailwind-privacy-consent-phoneOptIn"
              name="phoneOptIn"
              className="dark:border-gray-600"
            />
            <Typography variant="small" className="text-gray-900 dark:text-white">
              Phone calls
            </Typography>
          </div>
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 dark:border-gray-700 rounded-md p-4">
        <Typography as="legend" variant="small" className="font-medium text-gray-900 dark:text-white px-2">
          Privacy options
        </Typography>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="material-tailwind-privacy-consent-analytics"
              name="analytics"
              className="dark:border-gray-600"
            />
            <Typography variant="small" className="text-gray-900 dark:text-white">
              Allow analytics cookies
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="material-tailwind-privacy-consent-personalization"
              name="personalization"
              className="dark:border-gray-600"
            />
            <Typography variant="small" className="text-gray-900 dark:text-white">
              Allow personalized content
            </Typography>
          </div>
        </div>
      </fieldset>

      <div>
        <Typography variant="small" className="mb-1 font-medium text-gray-900 dark:text-white">
          Additional notes
        </Typography>
        <Textarea
          id="material-tailwind-privacy-consent-notes"
          name="notes"
          rows={3}
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>

      <Button type="submit" className="mt-2">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
