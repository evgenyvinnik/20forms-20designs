import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
} from '@radix-ui/themes'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    document.querySelector('form').reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="3">
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="search-keywords">
            Keywords
          </Text>
          <TextField.Root
            id="search-keywords"
            name="keywords"
            type="text"
            placeholder="Enter search keywords"
          />
        </Box>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="search-category">
            Category
          </Text>
          <Select.Root name="category">
            <Select.Trigger id="search-category" placeholder="All categories" />
            <Select.Content>
              <Select.Item value="all">All Categories</Select.Item>
              <Select.Item value="electronics">Electronics</Select.Item>
              <Select.Item value="clothing">Clothing</Select.Item>
              <Select.Item value="books">Books</Select.Item>
              <Select.Item value="home">Home & Garden</Select.Item>
            </Select.Content>
          </Select.Root>
        </Box>
        <Flex gap="3">
          <Box style={{ flex: 1 }}>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="search-min-price"
            >
              Min price
            </Text>
            <TextField.Root
              id="search-min-price"
              name="minPrice"
              type="number"
              placeholder="0"
              min="0"
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="search-max-price"
            >
              Max price
            </Text>
            <TextField.Root
              id="search-max-price"
              name="maxPrice"
              type="number"
              placeholder="1000"
              min="0"
            />
          </Box>
        </Flex>
        <Flex gap="3">
          <Box style={{ flex: 1 }}>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="search-date-from"
            >
              Date from
            </Text>
            <input
              id="search-date-from"
              name="dateFrom"
              type="date"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" htmlFor="search-date-to">
              Date to
            </Text>
            <input
              id="search-date-to"
              name="dateTo"
              type="date"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </Box>
        </Flex>
        <Box>
          <Text as="label" size="2" weight="medium" htmlFor="search-sort">
            Sort by
          </Text>
          <Select.Root name="sortBy" defaultValue="relevance">
            <Select.Trigger id="search-sort" />
            <Select.Content>
              <Select.Item value="relevance">Relevance</Select.Item>
              <Select.Item value="date-newest">Date (Newest First)</Select.Item>
              <Select.Item value="date-oldest">Date (Oldest First)</Select.Item>
              <Select.Item value="price-low">Price (Low to High)</Select.Item>
              <Select.Item value="price-high">Price (High to Low)</Select.Item>
            </Select.Content>
          </Select.Root>
        </Box>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox name="inStock" />
            In stock only
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox name="onSale" />
            On sale
          </Flex>
        </Text>
        <Flex gap="3">
          <Button type="submit">Search</Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default AdvancedSearchForm
