import { Input, Select, Option, Button, Typography } from '@material-tailwind/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Name on card
        </Typography>
        <Input
          id="material-tailwind-billing-info-cardname"
          name="cardName"
          type="text"
          required
          placeholder="Enter name on card"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Card number
        </Typography>
        <Input
          id="material-tailwind-billing-info-cardnumber"
          name="cardNumber"
          type="text"
          required
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          placeholder="Enter card number"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
            Expiration date
          </Typography>
          <Input
            id="material-tailwind-billing-info-expiration"
            name="expiration"
            type="text"
            required
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            inputMode="numeric"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
            labelProps={{ className: "hidden" }}
          />
        </div>
        <div className="flex-1">
          <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
            Security code
          </Typography>
          <Input
            id="material-tailwind-billing-info-cvc"
            name="cvc"
            type="text"
            required
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
            placeholder="CVC"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
            labelProps={{ className: "hidden" }}
          />
        </div>
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Billing address
        </Typography>
        <Input
          id="material-tailwind-billing-info-address"
          name="address"
          type="text"
          required
          placeholder="Enter billing address"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: "hidden" }}
        />
      </div>
      <div>
        <Typography variant="small" color="blue-gray" className="mb-1 font-medium dark:text-white">
          Country
        </Typography>
        <Select
          name="country"
          label="Select country"
          className="dark:text-white"
        >
          <Option value="us">United States</Option>
          <Option value="ca">Canada</Option>
        </Select>
      </div>
      <Button type="submit" color="blue">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
