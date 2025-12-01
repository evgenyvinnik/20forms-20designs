import {
  InputField,
  Button,
  Checkbox,
  Stack,
  ButtonLink,
} from '@kiwicom/orbit-components'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField
          label="Email or username"
          name="identifier"
          type="text"
          required
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          required
        />
        <Checkbox
          label="Keep me signed in"
          name="remember"
        />
        <Stack direction="row" spacing="small">
          <Button type="primary" submit>
            Sign in
          </Button>
          <ButtonLink
            type="secondary"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </ButtonLink>
        </Stack>
      </Stack>
    </form>
  )
}

export default UserLoginForm
