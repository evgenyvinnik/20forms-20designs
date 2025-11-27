import {
  Button,
  Checkbox,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Search query</FormLabel>
            <Input name="query" type="text" placeholder="Enter search terms" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select name="category">
              <option value="all">All</option>
              <option value="articles">Articles</option>
              <option value="products">Products</option>
              <option value="people">People</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Date from</FormLabel>
            <Input name="dateFrom" type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>Date to</FormLabel>
            <Input name="dateTo" type="date" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sort by</FormLabel>
            <Select name="sort">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </Select>
          </FormControl>
          <Checkbox name="includeArchived">Include archived</Checkbox>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default AdvancedSearchForm
