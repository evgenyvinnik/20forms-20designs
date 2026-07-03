function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>
      <div className="form-control w-full">
        <label className="label" htmlFor="daisyui-checkout-promo">
          <span className="label-text">Promo code</span>
        </label>
        <input
          id="daisyui-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          className="input input-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Place order
      </button>
    </form>
  )
}

export default CheckoutPaymentForm
