import { useState } from 'react'
import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Recipient name</FormLabel>
            <Input name="fullName" type="text" placeholder="Full name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Street address</FormLabel>
            <Input name="street" type="text" placeholder="Street address" />
          </FormControl>
          <FormControl>
            <FormLabel>Apartment, suite, etc.</FormLabel>
            <Input name="street2" type="text" placeholder="Apt, suite, etc." />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input name="city" type="text" placeholder="City" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State / Province / Territory</FormLabel>
            <Select name="region" placeholder="Select an option">
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Postal code</FormLabel>
            <Input name="postalCode" type="text" placeholder="Postal code" />
          </FormControl>
          <Checkbox name="default">Use as default shipping address</Checkbox>
          <Button type="submit" colorScheme="blue">
            Save address
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default ShippingAddressForm
