import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    fullDescription: { type: String },
    amenities: [String],
    guests: { type: String, required: true },
    capacity: { type: String },
    availability: { type: String },
    cancellation: { type: String },
    customerViews: { type: String },
    featured: { type: Boolean, default: false },
    food: [{
        title: String,
        desc: String
    }],
    testimonials: [{
        name: String,
        text: String,
        rating: Number,
        avatar: String
    }]
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);
export default Room;
