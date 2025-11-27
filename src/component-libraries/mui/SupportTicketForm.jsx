import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

function SupportTicketForm() {
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  const handleFileChange = (event) => {
    const files = event.target.files ? Array.from(event.target.files) : []
    setSelectedFiles(files.map((file) => file.name))
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="ticket-subject" name="subject" label="Subject" type="text" required />
      <FormControl required>
        <FormLabel id="ticket-priority-label">Priority</FormLabel>
        <RadioGroup
          aria-labelledby="ticket-priority-label"
          name="priority"
          defaultValue=""
          row
        >
          <FormControlLabel value="low" control={<Radio />} label="Low" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="high" control={<Radio />} label="High" />
        </RadioGroup>
      </FormControl>
      <TextField id="ticket-description" name="description" label="Issue description" multiline rows={4} required />
      <FormControl>
        <FormLabel htmlFor="ticket-attachments">Attachments</FormLabel>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          sx={{ mt: 1 }}
        >
          <Button variant="outlined" component="label">
            Choose files
            <input
              id="ticket-attachments"
              name="attachments"
              type="file"
              multiple
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <Typography variant="body2" color="text.secondary">
            {selectedFiles.length > 0
              ? selectedFiles.join(', ')
              : 'Optional supporting files (images, PDFs).'}
          </Typography>
        </Stack>
      </FormControl>
      <Button type="submit" variant="contained">
        Submit ticket
      </Button>
    </Box>
  )
}

export default SupportTicketForm
