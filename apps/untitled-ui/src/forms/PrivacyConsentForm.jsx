import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { TextArea } from '@/components/base/textarea/textarea'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-sm font-medium text-secondary">
          Communication channels
        </legend>
        <Checkbox label="Email updates" name="emailOptIn" />
        <Checkbox label="SMS notifications" name="smsOptIn" />
        <Checkbox label="Phone calls" name="phoneOptIn" />
      </fieldset>
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-sm font-medium text-secondary">
          Privacy options
        </legend>
        <Checkbox label="Allow analytics cookies" name="analytics" />
        <Checkbox label="Allow personalized content" name="personalization" />
      </fieldset>
      <TextArea label="Additional notes" name="notes" rows={3} />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Save preferences
        </Button>
      </div>
    </Form>
  )
}

export default PrivacyConsentForm
