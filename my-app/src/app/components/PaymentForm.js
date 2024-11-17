"use client";
import { useState } from "react";
import '../stylesheets/PaymentForm.css';

export default function CheckoutForm() {
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState({ name: '', lastname: '', country: '', address: '', city: '', postalCode: '' });
  const [paymentData, setPaymentData] = useState({ cardNumber: '', expDate: '', cvv: '' });
  const [contactData, setContactData] = useState({ email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  // Validación global para todos los campos
  const validateAll = () => {
    const newErrors = {};

    // Validación de Shipping
    if (!shippingData.name) newErrors.name = "Name is required.";
    if (!shippingData.lastname) newErrors.lastname = "Last name is required.";
    if (!shippingData.country) newErrors.country = "Country is required.";
    if (!shippingData.address) newErrors.address = "Address is required.";
    if (!shippingData.city) newErrors.city = "City is required.";
    if (!shippingData.postalCode) {
      newErrors.postalCode = "Postal code is required.";
    } else if (!/^\d+$/.test(shippingData.postalCode)) {
      newErrors.postalCode = "Postal code must be numeric.";
    } else if (shippingData.postalCode.length !== 5) {
      newErrors.postalCode = "Postal code must be 5 digits.";
    }

    // Validación de Payment
    if (!paymentData.cardNumber || paymentData.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }
    if (!paymentData.expDate) newErrors.expDate = "Expiration date is required.";
    if (!paymentData.cvv || paymentData.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    // Validación de Contact
    if (!contactData.email) newErrors.email = "Email is required.";
    if (!contactData.phone) newErrors.phone = "Phone number is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateAll();

    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
      console.log('Form Data:', { shippingData, paymentData, contactData });
    } else {
      setErrors(newErrors);
    }
  };

  const handleShippingChange = (e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  const handleContactChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value });

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Shipping Form */}
        <div className="form-section">
          <h3>Shipping Information</h3>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={shippingData.name}
              onChange={handleShippingChange}
              placeholder="Enter your first name"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={shippingData.lastname}
              onChange={handleShippingChange}
              placeholder="Enter your last name"
            />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
          </div>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              value={shippingData.country}
              onChange={handleShippingChange}
              placeholder="Enter your country"
            />
            {errors.country && <div className="error">{errors.country}</div>}
          </div>
          <div>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingData.address}
              onChange={handleShippingChange}
              placeholder="Enter shipping address"
            />
            {errors.address && <div className="error">{errors.address}</div>}
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingData.city}
              onChange={handleShippingChange}
              placeholder="Enter city"
            />
            {errors.city && <div className="error">{errors.city}</div>}
          </div>
          <div>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingData.postalCode}
              onChange={handleShippingChange}
              placeholder="Enter postal code"
            />
            {errors.postalCode && <div className="error">{errors.postalCode}</div>}
          </div>
        </div>

        {/* Payment Form */}
        <div className="form-section">
          <h3>Payment Information</h3>
          <div>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handlePaymentChange}
              placeholder="Enter 16-digit card number"
            />
            {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
          </div>
          <div>
            <input
              type="text"
              id="expDate"
              name="expDate"
              value={paymentData.expDate}
              onChange={handlePaymentChange}
              placeholder="MM/YY"
            />
            {errors.expDate && <div className="error">{errors.expDate}</div>}
          </div>
          <div>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handlePaymentChange}
              placeholder="Enter 3-digit CVV"
            />
            {errors.cvv && <div className="error">{errors.cvv}</div>}
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h3>Contact Information</h3>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleContactChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contactData.phone}
              onChange={handleContactChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="long-message">
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleContactChange}
              placeholder="Enter your message"
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
