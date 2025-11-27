import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="search-query" name="query" label="Search query" type="text" required />

      <TextField
        id="search-category"
        name="category"
        label="Category"
        select
        defaultValue="all"
        required
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="articles">Articles</MenuItem>
        <MenuItem value="products">Products</MenuItem>
        <MenuItem value="people">People</MenuItem>
      </TextField>

      <TextField id="search-date-from" name="dateFrom" label="Date from" type="date" InputLabelProps={{ shrink: true }} />

      <TextField id="search-date-to" name="dateTo" label="Date to" type="date" InputLabelProps={{ shrink: true }} />

      <TextField id="search-sort" name="sort" label="Sort by" select defaultValue="relevance" required>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
      </TextField>

      <FormControlLabel control={<Checkbox name="includeArchived" />} label="Include archived" />

      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  )
}

export default AdvancedSearchForm
