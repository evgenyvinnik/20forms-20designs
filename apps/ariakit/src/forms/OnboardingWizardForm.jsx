import * as Ariakit from '@ariakit/react'

function OnboardingWizardForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      companyName: '',
      teamSize: '',
      role: '',
      terms: false,
    },
  })

  form.useSubmit(() => {
    alert('Onboarding completed!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Personal information
        </Ariakit.FormGroupLabel>
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
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Company details
        </Ariakit.FormGroupLabel>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.companyName} className="label">
            Company name
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.companyName}
            className="input"
            required
          />
        </Ariakit.FormGroup>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.teamSize} className="label">
            Team size
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.teamSize}
            render={
              <select className="select">
                <option value="" disabled>
                  Select team size
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            }
            required
          />
        </Ariakit.FormGroup>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Preferences
        </Ariakit.FormGroupLabel>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.role} className="label">
            Role
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.role}
            render={
              <select className="select">
                <option value="" disabled>
                  Select role
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            }
            required
          />
        </Ariakit.FormGroup>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.terms}
            className="checkbox"
            required
          />
          <label className="label">I agree to the Terms of Service</label>
        </div>
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Complete onboarding
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default OnboardingWizardForm
