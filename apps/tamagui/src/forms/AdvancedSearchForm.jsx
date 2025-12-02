import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  Adapt,
  Sheet,
} from 'tamagui'
import { useState } from 'react'

function AdvancedSearchForm() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="query">Search query</Label>
          <Input id="query" name="query" placeholder="Search query" required />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="category">Category</Label>
          <Select id="category" value={category} onValueChange={setCategory}>
            <Select.Trigger>
              <Select.Value placeholder="All" />
            </Select.Trigger>
            <Adapt when="sm" platform="touch">
              <Sheet
                modal
                dismissOnSnapToBottom
                animationConfig={{
                  type: 'spring',
                  damping: 20,
                  mass: 1.2,
                  stiffness: 250,
                }}
              >
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </Sheet>
            </Adapt>
            <Select.Content zIndex={200000}>
              <Select.Viewport>
                <Select.Item index={0} value="all">
                  <Select.ItemText>All</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="articles">
                  <Select.ItemText>Articles</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="products">
                  <Select.ItemText>Products</Select.ItemText>
                </Select.Item>
                <Select.Item index={3} value="people">
                  <Select.ItemText>People</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="dateFrom">Date from</Label>
          <input id="dateFrom" name="dateFrom" type="date" />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="dateTo">Date to</Label>
          <input id="dateTo" name="dateTo" type="date" />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="sort">Sort by</Label>
          <Select id="sort" value={sort} onValueChange={setSort}>
            <Select.Trigger>
              <Select.Value placeholder="Relevance" />
            </Select.Trigger>
            <Adapt when="sm" platform="touch">
              <Sheet
                modal
                dismissOnSnapToBottom
                animationConfig={{
                  type: 'spring',
                  damping: 20,
                  mass: 1.2,
                  stiffness: 250,
                }}
              >
                <Sheet.Frame>
                  <Sheet.ScrollView>
                    <Adapt.Contents />
                  </Sheet.ScrollView>
                </Sheet.Frame>
                <Sheet.Overlay
                  animation="lazy"
                  enterStyle={{ opacity: 0 }}
                  exitStyle={{ opacity: 0 }}
                />
              </Sheet>
            </Adapt>
            <Select.Content zIndex={200000}>
              <Select.Viewport>
                <Select.Item index={0} value="relevance">
                  <Select.ItemText>Relevance</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="newest">
                  <Select.ItemText>Newest</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="oldest">
                  <Select.ItemText>Oldest</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select>
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="includeArchived"
            checked={includeArchived}
            onCheckedChange={setIncludeArchived}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="includeArchived">Include archived</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Search
        </Button>
      </YStack>
    </form>
  )
}

export default AdvancedSearchForm
