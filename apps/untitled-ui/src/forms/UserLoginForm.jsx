import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Email or username" name="identifier" isRequired />
      <Input label="Password" name="password" type="password" isRequired />
      <Checkbox label="Keep me signed in" name="remember" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Sign in
        </Button>
        <Button
          color="secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Button>
      </div>
    </Form>
  )
}

export default UserLoginForm
