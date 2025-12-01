import { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from '@material-tailwind/react'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [teamSize, setTeamSize] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {step === 1 && (
        <section>
          <Typography
            variant="h6"
            className="mb-4 text-gray-900 dark:text-white"
          >
            Account
          </Typography>
          <div className="flex flex-col gap-4">
            <div>
              <Typography
                variant="small"
                className="mb-1 font-medium text-gray-900 dark:text-white"
              >
                Work email
              </Typography>
              <Input
                id="material-tailwind-onboarding-wizard-email"
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
                Password
              </Typography>
              <Input
                id="material-tailwind-onboarding-wizard-password"
                name="password"
                type="password"
                required
                minLength={8}
                className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
                labelProps={{ className: 'hidden' }}
              />
            </div>
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <Typography
            variant="h6"
            className="mb-4 text-gray-900 dark:text-white"
          >
            Team
          </Typography>
          <div className="flex flex-col gap-4">
            <div>
              <Typography
                variant="small"
                className="mb-1 font-medium text-gray-900 dark:text-white"
              >
                Team name
              </Typography>
              <Input
                id="material-tailwind-onboarding-wizard-teamName"
                name="teamName"
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
                Team size
              </Typography>
              <select
                id="material-tailwind-onboarding-wizard-teamSize"
                name="teamSize"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select size</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">50+</option>
              </select>
            </div>
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <Typography
            variant="h6"
            className="mb-4 text-gray-900 dark:text-white"
          >
            Preferences
          </Typography>
          <div className="flex flex-col gap-4">
            <div>
              <Typography
                variant="small"
                className="mb-1 font-medium text-gray-900 dark:text-white"
              >
                Primary goal
              </Typography>
              <Textarea
                id="material-tailwind-onboarding-wizard-goal"
                name="goal"
                rows={3}
                required
                className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
                labelProps={{ className: 'hidden' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="material-tailwind-onboarding-wizard-updates"
                name="updates"
                className="dark:border-gray-600"
              />
              <Typography
                variant="small"
                className="text-gray-900 dark:text-white"
              >
                Send me product tips
              </Typography>
            </div>
          </div>
        </section>
      )}

      <div className="flex gap-2 mt-4">
        {step > 1 && (
          <Button
            type="button"
            variant="outlined"
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button type="button" onClick={() => setStep(step + 1)}>
            Next
          </Button>
        ) : (
          <Button type="submit">Finish setup</Button>
        )}
      </div>
    </form>
  )
}

export default OnboardingWizardForm
