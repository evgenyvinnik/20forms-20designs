import { useState } from 'react'
import {
  Box,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  ChevronDownIcon,
} from '@gluestack-ui/themed'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Recipient name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-shipping-full-name"
              name="fullName"
              type="text"
              placeholder="Enter recipient name"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Street address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-shipping-street"
              name="street"
              type="text"
              placeholder="Enter street address"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Apartment, suite, etc.</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-shipping-street-2"
              name="street2"
              type="text"
              placeholder="Apt, suite, etc. (optional)"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>City</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-shipping-city"
              name="city"
              type="text"
              placeholder="Enter city"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Country</FormControlLabelText>
          </FormControlLabel>
          <Select selectedValue={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectInput placeholder="Select country" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {COUNTRIES.map(({ value, label }) => (
                  <SelectItem key={value} label={label} value={value} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>
              State / Province / Territory
            </FormControlLabelText>
          </FormControlLabel>
          <Select>
            <SelectTrigger>
              <SelectInput placeholder="Select an option" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {regionOptions.map((region) => (
                  <SelectItem key={region} label={region} value={region} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Postal code</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-shipping-postal"
              name="postalCode"
              type="text"
              placeholder="Enter postal code"
            />
          </Input>
        </FormControl>

        <Checkbox name="default" value="default">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Use as default shipping address</CheckboxLabel>
        </Checkbox>

        <Button type="submit" action="primary">
          <ButtonText>Save address</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default ShippingAddressForm
