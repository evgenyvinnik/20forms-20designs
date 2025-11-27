import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Step 1: Account</h3>
        <div className="space-y-2">
          <Label htmlFor="shadcn-onboarding-email">Work email</Label>
          <Input
            id="shadcn-onboarding-email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shadcn-onboarding-password">Password</Label>
          <Input
            id="shadcn-onboarding-password"
            name="password"
            type="password"
            minLength="8"
            required
          />
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Step 2: Team</h3>
        <div className="space-y-2">
          <Label htmlFor="shadcn-onboarding-team-name">Team name</Label>
          <Input
            id="shadcn-onboarding-team-name"
            name="teamName"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shadcn-onboarding-size">Team size</Label>
          <Select id="shadcn-onboarding-size" name="teamSize" required>
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </Select>
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Step 3: Preferences</h3>
        <div className="space-y-2">
          <Label htmlFor="shadcn-onboarding-goal">Primary goal</Label>
          <Textarea id="shadcn-onboarding-goal" name="goal" rows="3" required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="updates" />
          <Label htmlFor="updates" className="font-normal">
            Send me product tips
          </Label>
        </div>
      </section>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit">Finish setup</Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
