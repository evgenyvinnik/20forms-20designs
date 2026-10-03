import {
  Button,
  Checkbox,
  FormControl,
  Select,
  TextField,
  View,
} from 'reshaped'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Search query</FormControl.Label>
          <TextField
            name="query"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Category</FormControl.Label>
          <Select
            name="category"
            defaultValue="all"
            inputAttributes={{ required: true }}
          >
            <option value="all">All</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="people">People</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormControl.Label>Date from</FormControl.Label>
          <TextField name="dateFrom" inputAttributes={{ type: 'date' }} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Date to</FormControl.Label>
          <TextField name="dateTo" inputAttributes={{ type: 'date' }} />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Sort by</FormControl.Label>
          <Select
            name="sort"
            defaultValue="relevance"
            inputAttributes={{ required: true }}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </Select>
        </FormControl>
        <Checkbox name="includeArchived">Include archived</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Search
          </Button>
        </View>
      </View>
    </form>
  )
}

export default AdvancedSearchForm
