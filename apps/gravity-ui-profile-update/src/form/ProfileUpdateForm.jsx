import { Button, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, formStackStyle } from './common.jsx'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-profile-first-name"
        label="First name"
        name="firstName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-profile-last-name"
        label="Last name"
        name="lastName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-profile-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-profile-phone"
        label="Phone number"
        name="phone"
        type="tel"
        controlProps={{
          required: true,
          inputMode: 'tel',
          pattern: '[+0-9\\s-]{7,20}',
        }}
      />
      <Field label="Short bio" htmlFor="gravity-profile-bio">
        <TextArea
          id="gravity-profile-bio"
          name="bio"
          rows={3}
          controlProps={{ required: true }}
        />
      </Field>
      <Button view="action" type="submit">
        Save changes
      </Button>
    </form>
  )
}

export default ProfileUpdateForm
