import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Full name" name="fullName" isRequired />
      <Input label="Email address" name="email" type="email" isRequired />
      <Input label="Username" name="username" minLength={3} isRequired />
      <Input
        label="Password"
        name="password"
        type="password"
        minLength={8}
        isRequired
      />
      <Input
        label="Confirm password"
        name="confirmPassword"
        type="password"
        minLength={8}
        isRequired
      />
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
        isRequired
      />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Create account
        </Button>
      </div>
    </Form>
  )
}

export default UserRegistrationForm
