import { Button, Input, Label, YStack } from 'tamagui'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="orderNumber">Order number</Label>
          <Input
            id="orderNumber"
            name="orderNumber"
            placeholder="Order number"
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
          <Label htmlFor="postalCode">Postal code</Label>
          <Input
            id="postalCode"
            name="postalCode"
            placeholder="Postal code"
            required
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Find order
        </Button>
      </YStack>
    </form>
  )
}

export default OrderTrackingForm
