import { Button, Input, Label, YStack, TextArea } from 'tamagui'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full name"
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
          <Label htmlFor="date">Preferred date</Label>
          <input id="date" name="date" type="date" required />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="time">Preferred time</Label>
          <input id="time" name="time" type="time" required />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="reason">Reason for visit</Label>
          <TextArea
            id="reason"
            name="reason"
            placeholder="Reason for visit"
            rows={3}
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Request appointment
        </Button>
      </YStack>
    </form>
  )
}

export default AppointmentRequestForm
