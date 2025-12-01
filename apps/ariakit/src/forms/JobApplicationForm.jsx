import * as Ariakit from '@ariakit/react'

function JobApplicationForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      role: '',
      resume: '',
      coverLetter: '',
      updates: false,
    },
  })

  form.useSubmit(() => {
    alert('Application submitted!')
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
        <Ariakit.FormLabel name={form.names.role} className="label">
          Role applied for
        </Ariakit.FormLabel>
        <Ariakit.FormInput name={form.names.role} className="input" required />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.resume} className="label">
          Resume link
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.resume}
          type="url"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.coverLetter} className="label">
          Cover letter
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.coverLetter}
          render={<textarea rows={4} className="textarea" />}
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox name={form.names.updates} className="checkbox" />
        <span className="checkbox-label">
          Keep me informed about future roles
        </span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Submit application
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default JobApplicationForm
