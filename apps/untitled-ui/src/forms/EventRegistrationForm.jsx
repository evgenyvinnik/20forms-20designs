import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { InputNumber } from '@/components/base/input/input-number'
import { Select } from '@/components/base/select/select'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Select
        label="Ticket type"
        name="ticketType"
        placeholder="Select ticket"
        isRequired
        items={[
          { id: 'general', label: 'General admission' },
          { id: 'vip', label: 'VIP' },
          { id: 'student', label: 'Student' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <InputNumber
        label="Number of guests"
        name="guestCount"
        minValue={0}
        maxValue={20}
        isRequired
      />
      <Checkbox label="Notify me about future events" name="newsletter" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Register
        </Button>
      </div>
    </Form>
  )
}

export default EventRegistrationForm
