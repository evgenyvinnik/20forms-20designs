import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { TextArea } from '@/components/base/textarea/textarea'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        isRequired
      />
      <Input label="Role applied for" name="role" isRequired />
      <Input label="Resume link" name="resume" type="url" isRequired />
      <TextArea label="Cover letter" name="coverLetter" rows={4} isRequired />
      <Checkbox label="Keep me informed about future roles" name="updates" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Submit application
        </Button>
      </div>
    </Form>
  )
}

export default JobApplicationForm
