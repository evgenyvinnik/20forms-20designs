import * as Ariakit from '@ariakit/react'

function PasswordResetForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      email: '',
    },
  })

  form.useSubmit(() => {
    alert('Password reset link requested!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <p className="description">Request a password reset link via email.</p>
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
      <Ariakit.FormSubmit className="button button-primary">
        Send reset link
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default PasswordResetForm
