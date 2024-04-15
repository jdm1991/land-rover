import Layout from "./layout";
import React, { useState, ChangeEvent } from "react";
import "../app/globals.css";
import VisaButton from "./components/VisaButton";
import ApplePayButton from "./components/ApplePayButton";
import PayPalButton from "./components/PayPalButton";
import PayWithBitcoin from "./components/PayWithBitcoin";
import EthereumButton from "./components/EthereumButton";
import { useRouter } from "next/router";

interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const router = useRouter();
  const { basket: basketQuery } = router.query;
  const basket = basketQuery
    ? JSON.parse(Array.isArray(basketQuery) ? basketQuery[0] : basketQuery)
    : [];

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleDeliveryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Delivery Details:", deliveryDetails);
    console.log("Billing Details:", billingDetails);
  };

  const formatCurrency = (value: number) => {
    const priceInPounds = value / 100;
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(priceInPounds);
  };

  const getTotalPrice = () => {
    return basket.reduce(
      (total: number, item: BasketItem) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#004225]">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivery Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
              {/* Delivery Details form fields */}
            </div>
            {/* Billing Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
              {/* Billing Details form fields */}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {basket.map((item: BasketItem) => (
              <div key={item.id} className="flex justify-between mb-2">
                <div>{item.name}</div>
                <div>
                  {item.quantity} x {formatCurrency(item.price)}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <span className="font-bold">Total:</span>
              <span>{formatCurrency(getTotalPrice())}</span>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
              <div className="flex space-x-4">
                <ApplePayButton />
                <VisaButton />
                <PayPalButton />
                <PayWithBitcoin />
                <EthereumButton />
                <div className="flex-grow"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
