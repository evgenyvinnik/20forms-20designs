import { Button, Input, Label, YStack, TextArea } from 'tamagui'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First name"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last name"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"
            placeholder="Phone number"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="bio">Short bio</Label>
          <TextArea
            id="bio"
            name="bio"
            placeholder="Short bio"
            rows={3}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Save changes
        </Button>
      </YStack>
    </form>
  )
}

export default ProfileUpdateForm
