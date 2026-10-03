import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="text-sm text-tertiary">
        Request a password reset link via email.
      </p>
      <Input label="Email address" name="email" type="email" isRequired />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Send reset link
        </Button>
      </div>
    </Form>
  )
}

export default PasswordResetForm
