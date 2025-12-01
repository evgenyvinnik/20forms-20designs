import { Button, Field, Input, Stack, Textarea } from '@chakra-ui/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>First name</Field.Label>
          <Input id="chakra-profile-first-name" name="firstName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Last name</Field.Label>
          <Input id="chakra-profile-last-name" name="lastName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-profile-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Phone number</Field.Label>
          <Input
            id="chakra-profile-phone"
            name="phone"
            type="tel"
            pattern="[+0-9\s-]{7,20}"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Short bio</Field.Label>
          <Textarea id="chakra-profile-bio" name="bio" rows={3} />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Save changes
        </Button>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
