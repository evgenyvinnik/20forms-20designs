import { Input, Button, Typography } from '@material-tailwind/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order tracking submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Order number
        </Typography>
        <Input
          id="material-tailwind-order-tracking-orderNumber"
          name="orderNumber"
          type="text"
          required
          pattern="[A-Za-z0-9-]{6,20}"
          placeholder="e.g., ORD-123456"
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Email address
        </Typography>
        <Input
          id="material-tailwind-order-tracking-email"
          name="email"
          type="email"
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Postal code
        </Typography>
        <Input
          id="material-tailwind-order-tracking-postalCode"
          name="postalCode"
          type="text"
          required
          size="lg"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
          containerProps={{ className: 'min-w-0' }}
        />
      </div>
      <Button type="submit" className="mt-2" fullWidth>
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
