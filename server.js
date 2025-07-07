import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

// Route imports
import adminRoutes from './routes/adminRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// WhatsApp Test
import { sendWhatsAppMessage } from './utils/whatsapp.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/orders', orderRoutes);

connectDB().then(() => {
  // ✅ TESTING WhatsApp Message
  sendWhatsAppMessage('+9779864158297', '📦 Test message from Drift & Sip');

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
