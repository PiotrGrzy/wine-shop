import React from "react"

const PaymentMethods = ({ payment, setPayment }) => {
  const handleChange = e => {
    setPayment(e.target.value)
  }

  return (
    <div>
      <input
        type="radio"
        name="payment"
        id="credit-card"
        value="credit-card"
        onChange={handleChange}
        checked={payment === "credit-card"}
      />
      <label htmlFor="credit-card">Credit Card</label>
      <input
        type="radio"
        name="payment"
        id="blik"
        value="blik"
        onChange={handleChange}
        checked={payment === "blik"}
      />
      <label htmlFor="blik">Blik</label>
      <input
        type="radio"
        name="payment"
        id="cash"
        value="cash"
        onChange={handleChange}
        checked={payment === "cash"}
      />
      <label htmlFor="cash">Cash</label>
    </div>
  )
}

export default PaymentMethods
