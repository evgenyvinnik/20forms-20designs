import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-privacy-name">Full name</Label>
          <Textfield
            id="atlaskit-privacy-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-privacy-email">Email address</Label>
          <Textfield
            id="atlaskit-privacy-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Text as="strong">Communication channels</Text>
          <Stack space="space.100">
            <Checkbox
              name="emailOptIn"
              label="Email updates"
            />
            <Checkbox
              name="smsOptIn"
              label="SMS notifications"
            />
            <Checkbox
              name="phoneOptIn"
              label="Phone calls"
            />
          </Stack>
        </Box>
        <Box>
          <Text as="strong">Privacy options</Text>
          <Stack space="space.100">
            <Checkbox
              name="analytics"
              label="Allow analytics cookies"
            />
            <Checkbox
              name="personalization"
              label="Allow personalized content"
            />
          </Stack>
        </Box>
        <Box>
          <Label htmlFor="atlaskit-privacy-notes">Additional notes</Label>
          <TextArea
            id="atlaskit-privacy-notes"
            name="notes"
          />
        </Box>
        <Button type="submit" appearance="primary">Save preferences</Button>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
