import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-login-email">Email or username</Label>
        <Input id="shadcn-user-login-email" name="identifier" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-user-login-password">Password</Label>
        <Input id="shadcn-user-login-password" name="password" type="password" required />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="remember" />
        <Label htmlFor="remember" className="font-normal">Keep me signed in</Label>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Sign in</Button>
        <Button type="button" variant="outline" onClick={() => alert('Password reset link flow placeholder')}>
          Forgot password?
        </Button>
      </div>
    </form>
  )
}

export default UserLoginForm
