import { Button, Input, Label, YStack, Select, Adapt, Sheet } from 'tamagui'
import { useState } from 'react'

function BillingInfoForm() {
  const [country, setCountry] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="cardName">Name on card</Label>
          <Input
            id="cardName"
            name="cardName"
            placeholder="Name on card"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            inputMode="numeric"
            placeholder="Card number"
            maxLength={19}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="expiration">Expiration date</Label>
          <Input
            id="expiration"
            name="expiration"
            placeholder="MM/YY"
            inputMode="numeric"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cvc">Security code</Label>
          <Input
            id="cvc"
            name="cvc"
            inputMode="numeric"
            placeholder="Security code"
            maxLength={4}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="address">Billing address</Label>
          <Input
            id="address"
            name="address"
            placeholder="Billing address"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="country">Country</Label>
          <Select id="country" value={country} onValueChange={setCountry}>
            <Select.Trigger>
              <Select.Value placeholder="Select country" />
            </Select.Trigger>
            <Adapt when="sm" platform="touch">
              <Sheet
                modal
                dismissOnSnapToBottom
                animationConfig={{
                  type: 'spring',
                  damping: 20,
                  mass: 1.2,
                  stiffness: 250,
                }}
              >
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </Sheet>
            </Adapt>
            <Select.Content zIndex={200000}>
              <Select.Viewport>
                <Select.Item index={0} value="US">
                  <Select.ItemText>United States</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="CA">
                  <Select.ItemText>Canada</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select>
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Save billing details
        </Button>
      </YStack>
    </form>
  )
}

export default BillingInfoForm
