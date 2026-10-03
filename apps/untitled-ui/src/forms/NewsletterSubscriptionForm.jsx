import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Email address" name="email" type="email" isRequired />
      <Select
        label="Frequency"
        name="frequency"
        placeholder="Select frequency"
        isRequired
        items={[
          { id: 'weekly', label: 'Weekly' },
          { id: 'monthly', label: 'Monthly' },
          { id: 'quarterly', label: 'Quarterly' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Checkbox label="Receive product updates" name="agree" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Subscribe
        </Button>
      </div>
    </Form>
  )
}

export default NewsletterSubscriptionForm
