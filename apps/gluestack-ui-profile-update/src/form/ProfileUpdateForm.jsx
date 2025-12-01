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
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack space="md">
        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>First name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-profile-first-name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Last name</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-profile-last-name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Email address</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-profile-email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Phone number</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              id="gluestack-ui-profile-phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText>Short bio</FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput
              id="gluestack-ui-profile-bio"
              name="bio"
              placeholder="Tell us about yourself"
            />
          </Textarea>
        </FormControl>

        <Button type="submit" action="primary">
          <ButtonText>Save changes</ButtonText>
        </Button>
      </VStack>
    </Box>
  )
}

export default ProfileUpdateForm
