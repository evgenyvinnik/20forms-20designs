import { Field, Label, Textarea } from '@headlessui/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-profile-update-firstname">
          First name
        </Label>
        <input
          id="headlessui-profile-update-firstname"
          name="firstName"
          type="text"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-profile-update-lastname">
          Last name
        </Label>
        <input
          id="headlessui-profile-update-lastname"
          name="lastName"
          type="text"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-profile-update-email">
          Email address
        </Label>
        <input
          id="headlessui-profile-update-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-profile-update-phone">
          Phone number
        </Label>
        <input
          id="headlessui-profile-update-phone"
          name="phone"
          type="tel"
          pattern="[+0-9\s-]{7,20}"
          inputMode="tel"
          className="input"
          required
        />
      </Field>
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-profile-update-bio">
          Short bio
        </Label>
        <Textarea id="headlessui-profile-update-bio" />
      </Field>
      <div className="form-row">
        <button type="submit" className="button button-primary">
          Save changes
        </button>
      </div>
    </form>
  )
}

export default ProfileUpdateForm
