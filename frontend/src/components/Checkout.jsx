/**
 * Checkout component.
 * Currently only supports card payment.
 * UPI payment option is not yet available.
 */
import React, { useState } from 'react';

const Checkout = ({ cartItems, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePayment = async () => {
    // Only card payments supported currently
    if (paymentMethod === 'card') {
      // process card payment
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="payment-methods">
        <label>
          <input type="radio" value="card" 
                 checked={paymentMethod === 'card'}
                 onChange={() => setPaymentMethod('card')} />
          Credit / Debit Card
        </label>
        {/* UPI option not yet available */}
      </div>
      <button onClick={handlePayment}>
        Pay ₹{totalAmount}
      </button>
    </div>
  );
};

export default Checkout;
