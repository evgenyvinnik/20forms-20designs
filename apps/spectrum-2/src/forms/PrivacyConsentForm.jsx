import {
  Button,
  ButtonGroup,
  Checkbox,
  Form,
  TextArea,
  TextField,
} from '@react-spectrum/s2'
import { style } from '@react-spectrum/s2/style' with { type: 'macro' }

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Full name" name="fullName" isRequired />
      <TextField label="Email address" name="email" type="email" isRequired />
      <fieldset
        className={style({
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          borderStyle: 'none',
          padding: 0,
          margin: 0,
          minWidth: 0,
        })}
      >
        <legend
          className={style({
            font: 'ui',
            color: 'neutral-subdued',
            padding: 0,
            marginBottom: 8,
          })}
        >
          Communication channels
        </legend>
        <Checkbox name="emailOptIn">Email updates</Checkbox>
        <Checkbox name="smsOptIn">SMS notifications</Checkbox>
        <Checkbox name="phoneOptIn">Phone calls</Checkbox>
      </fieldset>
      <fieldset
        className={style({
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          borderStyle: 'none',
          padding: 0,
          margin: 0,
          minWidth: 0,
        })}
      >
        <legend
          className={style({
            font: 'ui',
            color: 'neutral-subdued',
            padding: 0,
            marginBottom: 8,
          })}
        >
          Privacy options
        </legend>
        <Checkbox name="analytics">Allow analytics cookies</Checkbox>
        <Checkbox name="personalization">Allow personalized content</Checkbox>
      </fieldset>
      <TextArea label="Additional notes" name="notes" />
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Save preferences
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default PrivacyConsentForm
