import { Button, Input, Label, YStack, XStack } from 'tamagui'
import { useState } from 'react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
        <YStack gap="$1">
          <Label htmlFor="email">Email for receipt</Label>
          <Input
            id="email"
            name="email"
            type="email"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"

            required
          />
        </YStack>

        <XStack gap="$3">
          <YStack flex={1} gap="$1">
            <Label htmlFor="expiration">Expiration</Label>
            <Input
              id="expiration"
              name="expiration"
              placeholder="MM/YY"
              required
            />
          </YStack>
          <YStack flex={1} gap="$1">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" name="cvc" required />
          </YStack>
        </XStack>

        <Button themeInverse type="submit">
          Place order
        </Button>
      </YStack>
    </form>
  )
}

export default CheckoutPaymentForm
