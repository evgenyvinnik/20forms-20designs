import * as Ariakit from '@ariakit/react'

function ProfileUpdateForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bio: '',
    },
  })

  form.useSubmit(() => {
    alert('Profile updated!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.firstName} className="label">
          First name
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.firstName}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.lastName} className="label">
          Last name
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.lastName}
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
        <Ariakit.FormLabel name={form.names.phone} className="label">
          Phone number
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.phone}
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.bio} className="label">
          Short bio
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.bio}
          render={<textarea rows={3} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Save changes
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default ProfileUpdateForm
