import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { TextArea } from '@/components/base/textarea/textarea'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Input label="Preferred date" name="date" type="date" isRequired />
      <Input label="Preferred time" name="time" type="time" isRequired />
      <TextArea label="Reason for visit" name="reason" rows={3} isRequired />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Request appointment
        </Button>
      </div>
    </Form>
  )
}

export default AppointmentRequestForm
