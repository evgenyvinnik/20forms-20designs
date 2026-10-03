import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'
import { TextArea } from '@/components/base/textarea/textarea'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Select
        label="Topic"
        name="topic"
        placeholder="Select topic"
        isRequired
        items={[
          { id: 'support', label: 'Support' },
          { id: 'sales', label: 'Sales' },
          { id: 'feedback', label: 'Feedback' },
          { id: 'other', label: 'Other' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <TextArea label="Message" name="message" rows={4} isRequired />
      <Checkbox label="Allow follow-up communication" name="consent" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Submit inquiry
        </Button>
      </div>
    </Form>
  )
}

export default ContactInquiryForm
