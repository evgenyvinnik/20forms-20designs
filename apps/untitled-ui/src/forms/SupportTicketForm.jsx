import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { InputFile } from '@/components/base/input/input-file'
import { Label } from '@/components/base/input/label'
import {
  RadioButton,
  RadioGroup,
} from '@/components/base/radio-buttons/radio-buttons'
import { TextArea } from '@/components/base/textarea/textarea'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Subject" name="subject" isRequired />
      <RadioGroup name="priority" isRequired>
        <Label isRequired>Priority</Label>
        <RadioButton label="Low" value="low" />
        <RadioButton label="Medium" value="medium" />
        <RadioButton label="High" value="high" />
      </RadioGroup>
      <TextArea
        label="Issue description"
        name="description"
        rows={4}
        isRequired
      />
      <InputFile label="Attachments" allowsMultiple />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Submit ticket
        </Button>
      </div>
    </Form>
  )
}

export default SupportTicketForm
