import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  name: String,
  size: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    deliveryMethod: {
  type: String,
  enum: ['Home Delivery', 'Dine-In'],
  required: true,
},
    address: String, // Optional, required only for Delivery
    payment: {
      type: String,
      enum: ['eSewa', 'Khalti', 'Bank QR', 'Cash'],
      required: true,
    },
    total: Number,
    items: [orderItemSchema],
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
