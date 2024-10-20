import express from 'express';
import RoomRoutes from './routes/room.mjs';
import BookingRotes from './routes/booking.mjs';

const app = express();
app.use(express.json());
app.use('/room',RoomRoutes);
app.use('/booking',BookingRotes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Back-end server is running');
});