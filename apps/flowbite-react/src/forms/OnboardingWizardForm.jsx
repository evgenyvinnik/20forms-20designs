import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from 'flowbite-react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Card className="mx-4 w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Onboarding Wizard</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <section>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Step 1: Account
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="flowbite-onboarding-email">Work email</Label>
              </div>
              <TextInput
                id="flowbite-onboarding-email"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="flowbite-onboarding-password">Password</Label>
              </div>
              <TextInput
                id="flowbite-onboarding-password"
                name="password"
                type="password"
                minLength={8}
                required
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Step 2: Team
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="flowbite-onboarding-team-name">Team name</Label>
              </div>
              <TextInput
                id="flowbite-onboarding-team-name"
                name="teamName"
                type="text"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="flowbite-onboarding-size">Team size</Label>
              </div>
              <Select id="flowbite-onboarding-size" name="teamSize" required>
                <option value="">Select size</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">50+</option>
              </Select>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Step 3: Preferences
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="flowbite-onboarding-goal">Primary goal</Label>
              </div>
              <Textarea
                id="flowbite-onboarding-goal"
                name="goal"
                rows={3}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="flowbite-onboarding-updates" name="updates" />
              <Label htmlFor="flowbite-onboarding-updates">
                Send me product tips
              </Label>
            </div>
          </div>
        </section>
        <div className="flex gap-2">
          <Button
            type="button"
            color="light"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit">Finish setup</Button>
        </div>
      </form>
    </Card>
  )
}

export default OnboardingWizardForm
