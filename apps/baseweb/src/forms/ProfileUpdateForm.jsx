import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function ProfileUpdateForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bio, setBio] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <FormControl label="First name">
          <Input
            id="baseweb-profile-first-name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Last name">
          <Input
            id="baseweb-profile-last-name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-profile-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Phone number">
          <Input
            id="baseweb-profile-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Short bio">
          <Textarea
            id="baseweb-profile-bio"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit">Save changes</Button>
      </Block>
    </form>
  )
}

export default ProfileUpdateForm
