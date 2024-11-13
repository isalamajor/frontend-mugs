"use client";
import { useState } from "react";

export default function CheckoutForm() {
  // Estado para cada formulario
  const [step, setStep] = useState(1); // 1: shipping, 2: payment, 3: contact
  const [shippingData, setShippingData] = useState({ name: '', address: '' });
  const [paymentData, setPaymentData] = useState({ cardNumber: '', expDate: '', cvv: '' });
  const [contactData, setContactData] = useState({ email: '', message: '' });

  // Errores
  const [errors, setErrors] = useState({});

  // Validación de Shipping
  const validateShipping = () => {
    const newErrors = {};
    if (!shippingData.name) newErrors.name = "Name is required.";
    if (!shippingData.address) newErrors.address = "Address is required.";
    return newErrors;
  };

  // Validación de Payment
  const validatePayment = () => {
    const newErrors = {};
    if (!paymentData.cardNumber || paymentData.cardNumber.length !== 16) newErrors.cardNumber = "Card number must be 16 digits.";
    if (!paymentData.expDate) newErrors.expDate = "Expiration date is required.";
    if (!paymentData.cvv || paymentData.cvv.length !== 3) newErrors.cvv = "CVV must be 3 digits.";
    return newErrors;
  };

  // Validación de Contact
  const validateContact = () => {
    const newErrors = {};
    if (!contactData.email) newErrors.email = "Email is required.";
    if (!contactData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Manejador de submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validación del formulario según el paso
    if (step === 1) newErrors = validateShipping();
    if (step === 2) newErrors = validatePayment();
    if (step === 3) newErrors = validateContact();

    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, avanzar al siguiente formulario
      setStep(step + 1);
      setErrors({});
      console.log('Form Data:', { shippingData, paymentData, contactData });
    } else {
      setErrors(newErrors);
    }
  };

  // Cambiar valores en cada formulario
  const handleShippingChange = (e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  const handleContactChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Shipping Form */}
        <div className={`form-section ${step >= 1 ? 'expanded' : 'collapsed'}`}>
          <h3>Shipping Information</h3>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingData.name}
              onChange={handleShippingChange}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="address">Shipping Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingData.address}
              onChange={handleShippingChange}
              placeholder="Enter shipping address"
              required
            />
            {errors.address && <div className="error">{errors.address}</div>}
          </div>
          <button type="submit">Next</button>
        </div>

        {/* Payment Form */}
        <div className={`form-section ${step >= 2 ? 'expanded' : 'collapsed'}`}>
          <h3>Payment Information</h3>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handlePaymentChange}
              placeholder="Enter 16-digit card number"
              required
            />
            {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
          </div>
          <div>
            <label htmlFor="expDate">Expiration Date:</label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              value={paymentData.expDate}
              onChange={handlePaymentChange}
              placeholder="MM/YY"
              required
            />
            {errors.expDate && <div className="error">{errors.expDate}</div>}
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handlePaymentChange}
              placeholder="Enter 3-digit CVV"
              required
            />
            {errors.cvv && <div className="error">{errors.cvv}</div>}
          </div>
          <button type="submit">Next</button>
        </div>

        {/* Contact Form */}
        <div className={`form-section ${step >= 3 ? 'expanded' : 'collapsed'}`}>
          <h3>Contact Information</h3>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleContactChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleContactChange}
              placeholder="Enter your message"
              required
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
