import express from 'express';
import router from './routes/room.mjs';

const app = express();
app.use(express.json());
app.use('/room',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Back-end server is running');
});