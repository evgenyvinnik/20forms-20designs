import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  Picker,
  PickerItem,
  TextArea,
  TextField,
} from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section className={style({ display: 'contents' })}>
        <h3 className={style({ font: 'title-lg', margin: 0 })}>
          Step 1: Account
        </h3>
        <TextField label="Work email" name="email" type="email" isRequired />
        <TextField
          label="Password"
          name="password"
          type="password"
          minLength={8}
          isRequired
        />
      </section>
      <section className={style({ display: 'contents' })}>
        <h3 className={style({ font: 'title-lg', margin: 0 })}>Step 2: Team</h3>
        <TextField label="Team name" name="teamName" isRequired />
        <Picker
          label="Team size"
          name="teamSize"
          placeholder="Select size"
          isRequired
        >
          <PickerItem id="1-5">1-5</PickerItem>
          <PickerItem id="6-20">6-20</PickerItem>
          <PickerItem id="21-50">21-50</PickerItem>
          <PickerItem id="50+">50+</PickerItem>
        </Picker>
      </section>
      <section className={style({ display: 'contents' })}>
        <h3 className={style({ font: 'title-lg', margin: 0 })}>
          Step 3: Preferences
        </h3>
        <TextArea label="Primary goal" name="goal" isRequired />
        <Checkbox name="updates">Send me product tips</Checkbox>
      </section>
      <ButtonGroup>
        <Button
          variant="secondary"
          onPress={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit" variant="accent">
          Finish setup
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default OnboardingWizardForm
