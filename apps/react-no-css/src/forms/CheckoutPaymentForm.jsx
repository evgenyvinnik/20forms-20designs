function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>
      <div>
        <label htmlFor="nocss-checkout-promo">Promo code</label>
        <input
          id="nocss-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>
      <button type="submit">Place order</button>
    </form>
  )
}

export default CheckoutPaymentForm
