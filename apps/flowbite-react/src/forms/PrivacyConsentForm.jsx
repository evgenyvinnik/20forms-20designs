import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Textarea,
} from 'flowbite-react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Privacy Consent</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-privacy-name">Full name</Label>
          </div>
          <TextInput
            id="flowbite-privacy-name"
            name="fullName"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-privacy-email">Email address</Label>
          </div>
          <TextInput
            id="flowbite-privacy-email"
            name="email"
            type="email"
            required
          />
        </div>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Communication channels
          </legend>
          <div className="flex items-center gap-2">
            <Checkbox id="flowbite-privacy-email-opt" name="emailOptIn" />
            <Label htmlFor="flowbite-privacy-email-opt">Email updates</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="flowbite-privacy-sms-opt" name="smsOptIn" />
            <Label htmlFor="flowbite-privacy-sms-opt">SMS notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="flowbite-privacy-phone-opt" name="phoneOptIn" />
            <Label htmlFor="flowbite-privacy-phone-opt">Phone calls</Label>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Privacy options
          </legend>
          <div className="flex items-center gap-2">
            <Checkbox id="flowbite-privacy-analytics" name="analytics" />
            <Label htmlFor="flowbite-privacy-analytics">
              Allow analytics cookies
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="flowbite-privacy-personalization"
              name="personalization"
            />
            <Label htmlFor="flowbite-privacy-personalization">
              Allow personalized content
            </Label>
          </div>
        </fieldset>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-privacy-notes">Additional notes</Label>
          </div>
          <Textarea id="flowbite-privacy-notes" name="notes" rows={3} />
        </div>
        <Button type="submit">Save preferences</Button>
      </form>
    </Card>
  )
}

export default PrivacyConsentForm
