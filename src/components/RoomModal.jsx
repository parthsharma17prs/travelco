import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Users, Calendar, ShieldCheck, MapPin, Info, ArrowRight, Share2, Heart } from 'lucide-react';
import BookingFlow from './BookingFlow';

export default function RoomModal({ room, onClose }) {
    const [showBooking, setShowBooking] = useState(false);
    if (!room) return null;

    if (showBooking) {
        return <BookingFlow room={room} onClose={() => {
            setShowBooking(false);
            onClose();
        }} />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl max-h-[90vh] glass-panel border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-white hover:text-black transition-all backdrop-blur-md"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Side: Images */}
                <div className="w-full md:w-3/5 h-64 md:h-auto relative group overflow-hidden">
                    <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Premier Choice</span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{room.type}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white">{room.name}</h2>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all">
                                <Share2 className="w-4 h-4" />
                            </button>
                            <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all text-red-400">
                                <Heart className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="space-y-8">
                        {/* Header Info */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-semibold">Starting from</p>
                                <p className="text-3xl font-serif text-brand-gold">{room.price}</p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-white font-bold">{room.rating}</span>
                                </div>
                                <p className="text-white/40 text-xs">{room.reviews} verified reviews</p>
                            </div>
                        </div>

                        {/* Description */}
                        <section>
                            <div className="flex items-center gap-2 mb-4 text-white/40 text-xs uppercase tracking-widest font-bold">
                                <Info className="w-3 h-3" />
                                About this {room.type.toLowerCase()}
                            </div>
                            <p className="text-white/70 leading-relaxed text-sm">
                                {room.fullDescription || room.description}
                            </p>
                        </section>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Users className="w-4 h-4 text-brand-gold mb-2" />
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Capacity</p>
                                <p className="text-sm font-semibold">{room.capacity || room.guests}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Calendar className="w-4 h-4 text-brand-gold mb-2" />
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Availability</p>
                                <p className="text-sm font-semibold text-green-400">{room.availability || 'Instant Booking'}</p>
                            </div>
                        </div>

                        {/* Cancellation */}
                        <section className="p-4 rounded-2xl bg-orange-600/10 border border-orange-600/20">
                            <div className="flex items-center gap-2 mb-2 text-orange-400">
                                <ShieldCheck className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wide">Cancellation Policy</span>
                            </div>
                            <p className="text-[10px] text-white/60">
                                {room.cancellation || 'Free cancellation up to 48 hours before check-in. Partial refund applies after that period.'}
                            </p>
                        </section>

                        {/* Amenities Grid */}
                        <section>
                            <div className="text-xs text-white/40 uppercase tracking-widest mb-4 font-bold">Included Amenities</div>
                            <div className="grid grid-cols-2 gap-3">
                                {room.amenities.map((amenity, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40"></div>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Action */}
                        <button
                            onClick={() => setShowBooking(true)}
                            className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-brand-gold hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-sm group shadow-xl shadow-black/20 mt-4"
                        >
                            Confirm Booking Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
