import * as Ariakit from '@ariakit/react'

function OnboardingWizardForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      email: '',
      password: '',
      teamName: '',
      teamSize: '',
      goal: '',
      updates: false,
    },
  })

  form.useSubmit(() => {
    alert('Onboarding complete!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Step 1: Account
        </Ariakit.FormGroupLabel>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.email} className="label">
            Work email
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.email}
            type="email"
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
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Step 2: Team
        </Ariakit.FormGroupLabel>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.teamName} className="label">
            Team name
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.teamName}
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
                <option value="">Select size</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">50+</option>
              </select>
            }
            required
          />
        </Ariakit.FormGroup>
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="section">
        <Ariakit.FormGroupLabel className="section-title">
          Step 3: Preferences
        </Ariakit.FormGroupLabel>
        <Ariakit.FormGroup className="form-field">
          <Ariakit.FormLabel name={form.names.goal} className="label">
            Primary goal
          </Ariakit.FormLabel>
          <Ariakit.FormInput
            name={form.names.goal}
            render={<textarea className="textarea" rows={3} />}
            required
          />
        </Ariakit.FormGroup>
        <div className="checkbox-wrapper">
          <Ariakit.FormCheckbox
            name={form.names.updates}
            className="checkbox"
          />
          <label className="label">Send me product tips</label>
        </div>
      </Ariakit.FormGroup>
      <div className="button-group">
        <button
          type="button"
          className="button"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </button>
        <Ariakit.FormSubmit className="button button-primary">
          Finish setup
        </Ariakit.FormSubmit>
      </div>
    </Ariakit.Form>
  )
}

export default OnboardingWizardForm
