import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'
import { TextArea } from '@/components/base/textarea/textarea'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Name" name="name" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Select
        label="Overall rating"
        name="rating"
        placeholder="Select rating"
        isRequired
        items={[
          { id: 'excellent', label: 'Excellent' },
          { id: 'good', label: 'Good' },
          { id: 'average', label: 'Average' },
          { id: 'poor', label: 'Poor' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <TextArea label="Comments" name="comments" rows={4} isRequired />
      <Checkbox label="I would like a follow-up" name="followUp" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Send feedback
        </Button>
      </div>
    </Form>
  )
}

export default CustomerFeedbackForm
