import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Name</Field.Label>
          <Input id="chakra-feedback-name" name="name" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-feedback-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Overall rating</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-feedback-rating" name="rating">
              <option value="">Select rating</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>Comments</Field.Label>
          <Textarea id="chakra-feedback-comments" name="comments" rows={4} />
        </Field.Root>
        <Checkbox.Root name="followUp">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>I would like a follow-up</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Send feedback
        </Button>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
