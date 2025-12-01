import * as Ariakit from '@ariakit/react'

function UserRegistrationForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  })

  form.useSubmit(() => {
    alert('Registration submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.fullName} className="label">
          Full name
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.fullName}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.email} className="label">
          Email address
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.email}
          type="email"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.username} className="label">
          Username
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.username}
          minLength={3}
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
          minLength={8}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.confirmPassword} className="label">
          Confirm password
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.confirmPassword}
          type="password"
          minLength={8}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox
          name={form.names.terms}
          className="checkbox"
          required
        />
        <span className="checkbox-label">
          I agree to the terms and conditions
        </span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Create account
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default UserRegistrationForm
