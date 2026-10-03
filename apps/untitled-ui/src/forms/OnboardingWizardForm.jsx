import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'
import { TextArea } from '@/components/base/textarea/textarea'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold text-primary">Step 1: Account</h3>
        <Input label="Work email" name="email" type="email" isRequired />
        <Input
          label="Password"
          name="password"
          type="password"
          minLength={8}
          isRequired
        />
      </section>
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold text-primary">Step 2: Team</h3>
        <Input label="Team name" name="teamName" isRequired />
        <Select
          label="Team size"
          name="teamSize"
          placeholder="Select size"
          isRequired
          items={[
            { id: '1-5', label: '1-5' },
            { id: '6-20', label: '6-20' },
            { id: '21-50', label: '21-50' },
            { id: '50+', label: '50+' },
          ]}
        >
          {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
        </Select>
      </section>
      <section className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold text-primary">
          Step 3: Preferences
        </h3>
        <TextArea label="Primary goal" name="goal" rows={3} isRequired />
        <Checkbox label="Send me product tips" name="updates" />
      </section>
      <div className="flex gap-3">
        <Button
          color="secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit" color="primary">
          Finish setup
        </Button>
      </div>
    </Form>
  )
}

export default OnboardingWizardForm
