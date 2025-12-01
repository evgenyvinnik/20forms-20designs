import * as Ariakit from '@ariakit/react'

function PasswordChangeForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      logoutOthers: false,
    },
  })

  form.useSubmit(() => {
    alert('Password change requested!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.currentPassword} className="label">
          Current password
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.currentPassword}
          type="password"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.newPassword} className="label">
          New password
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.newPassword}
          type="password"
          minLength={8}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.confirmPassword} className="label">
          Confirm new password
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
          name={form.names.logoutOthers}
          className="checkbox"
        />
        <span className="checkbox-label">Sign out of other devices</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Update password
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default PasswordChangeForm
