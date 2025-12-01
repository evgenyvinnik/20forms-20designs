import * as Ariakit from '@ariakit/react'

function EventRegistrationForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      email: '',
      ticketType: '',
      guestCount: 0,
      newsletter: false,
    },
  })

  form.useSubmit(() => {
    alert('Event registration submitted!')
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
        <Ariakit.FormLabel name={form.names.ticketType} className="label">
          Ticket type
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.ticketType}
          render={
            <select className="select">
              <option value="">Select ticket</option>
              <option value="general">General admission</option>
              <option value="vip">VIP</option>
              <option value="student">Student</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.guestCount} className="label">
          Number of guests
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.guestCount}
          type="number"
          min={0}
          max={20}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox
          name={form.names.newsletter}
          className="checkbox"
        />
        <span className="checkbox-label">Notify me about future events</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Register
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default EventRegistrationForm
