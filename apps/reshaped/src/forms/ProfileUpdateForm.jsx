import { Button, FormControl, TextArea, TextField, View } from 'reshaped'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>First name</FormControl.Label>
          <TextField
            name="firstName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Last name</FormControl.Label>
          <TextField
            name="lastName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Phone number</FormControl.Label>
          <TextField
            name="phone"
            inputAttributes={{
              type: 'tel',
              pattern: '[+0-9\\s-]{7,20}',
              inputMode: 'tel',
              required: true,
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Short bio</FormControl.Label>
          <TextArea name="bio" />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Save changes
          </Button>
        </View>
      </View>
    </form>
  )
}

export default ProfileUpdateForm
