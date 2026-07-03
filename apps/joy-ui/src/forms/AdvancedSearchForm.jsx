import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function AdvancedSearchForm() {
  const [formData, setFormData] = useState({
    query: '',
    category: 'all',
    sortBy: 'relevance',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Advanced Search
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Search executed!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Search Keywords</FormLabel>
        <Input
          type="text"
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          placeholder="Search..."
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={formData.category}
            onChange={(_, val) => setFormData({ ...formData, category: val })}
          >
            <Option value="all">All Categories</Option>
            <Option value="articles">Articles</Option>
            <Option value="products">Products</Option>
            <Option value="users">Users</Option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sort By</FormLabel>
          <Select
            value={formData.sortBy}
            onChange={(_, val) => setFormData({ ...formData, sortBy: val })}
          >
            <Option value="relevance">Relevance</Option>
            <Option value="newest">Newest First</Option>
            <Option value="popular">Most Popular</Option>
          </Select>
        </FormControl>
      </Box>
      <Button type="submit" color="primary">
        Execute Search
      </Button>
    </Box>
  )
}
