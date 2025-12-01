import * as Ariakit from '@ariakit/react'

function UserLoginForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      identifier: '',
      password: '',
      remember: false,
    },
  })

  form.useSubmit(() => {
    alert('Login submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.identifier} className="label">
          Email or username
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.identifier}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.password} className="label">
          Password
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.password}
          type="password"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox name={form.names.remember} className="checkbox" />
        <span className="checkbox-label">Keep me signed in</span>
      </label>
      <div className="form-row">
        <Ariakit.FormSubmit className="button button-primary">
          Sign in
        </Ariakit.FormSubmit>
        <Ariakit.Button
          type="button"
          className="button button-secondary"
          onClick={() => alert('Password reset link flow placeholder')}
        >
          Forgot password?
        </Ariakit.Button>
      </div>
    </Ariakit.Form>
  )
}

export default UserLoginForm
