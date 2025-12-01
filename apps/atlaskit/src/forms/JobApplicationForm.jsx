import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-job-full-name">Full name</Label>
          <Textfield
            id="atlaskit-job-full-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-email">Email address</Label>
          <Textfield
            id="atlaskit-job-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-phone">Phone number</Label>
          <Textfield
            id="atlaskit-job-phone"
            name="phone"
            type="tel"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-role">Role applied for</Label>
          <Textfield
            id="atlaskit-job-role"
            name="role"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-resume">Resume link</Label>
          <Textfield
            id="atlaskit-job-resume"
            name="resume"
            type="url"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-cover-letter">Cover letter</Label>
          <TextArea
            id="atlaskit-job-cover-letter"
            name="coverLetter"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="updates"
            label="Keep me informed about future roles"
          />
        </Box>
        <Button type="submit" appearance="primary">Submit application</Button>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
