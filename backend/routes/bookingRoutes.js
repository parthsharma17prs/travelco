import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create new booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get user bookings
router.get('/user/:email', async (req, res) => {
    try {
        const bookings = await Booking.find({ userEmail: req.params.email }).populate('roomId');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
