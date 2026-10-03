import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { TextArea } from '@/components/base/textarea/textarea'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="First name" name="firstName" isRequired />
      <Input label="Last name" name="lastName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        pattern="[+0-9\s-]{7,20}"
        inputMode="tel"
        isRequired
      />
      <TextArea label="Short bio" name="bio" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Save changes
        </Button>
      </div>
    </Form>
  )
}

export default ProfileUpdateForm
