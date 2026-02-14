import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    Star, Users, Calendar, ShieldCheck, MapPin,
    Info, ArrowRight, Share2, Heart, ArrowLeft,
    Eye, Utensils, Sparkles, Quote, CheckCircle2
} from 'lucide-react';
import BookingFlow from './BookingFlow';
import { roomsData } from '../data/roomsData';

export default function RoomDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showBooking, setShowBooking] = useState(false);
    const room = roomsData.find(r => r.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!room) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-serif mb-4">Room Not Found</h1>
                <button onClick={() => navigate('/rooms')} className="text-brand-gold hover:underline">Return to Rooms</button>
            </div>
        );
    }

    if (showBooking) {
        return <BookingFlow room={room} onClose={() => setShowBooking(false)} />;
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 bg-[#080808] overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {/* Top Nav */}
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={() => navigate('/rooms')}
                        className="group flex items-center gap-3 text-white/40 hover:text-white transition-all uppercase tracking-[0.2em] text-[10px] font-bold"
                    >
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        Back to Collection
                    </button>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                            <Share2 className="w-4 h-4 text-white/60" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all group">
                            <Heart className="w-4 h-4 text-white/60 group-hover:text-red-500" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#111] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">

                    {/* Left: Imagery and Details (8 Cols) */}
                    <div className="lg:col-span-12 xl:col-span-8 p-1 flex flex-col">
                        <div className="relative h-[600px] rounded-[2.8rem] overflow-hidden group">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-10 left-10 right-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-3 mb-6"
                                >
                                    <span className="px-5 py-2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand-gold/20">Signature Suite</span>
                                    <span className="px-5 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest rounded-full">{room.type}</span>
                                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full flex items-center gap-2 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                                        <Eye className="w-3 h-3 text-brand-gold" />
                                        {room.customerViews} Monthly Views
                                    </div>
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-serif text-white mb-4 leading-none"
                                >
                                    {room.name}
                                </motion.h1>
                                <div className="flex items-center gap-6 text-white/60 text-sm font-light">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-brand-gold" />
                                        Premium Location
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-brand-gold" />
                                        {room.guests}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra Details Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 lg:p-14">
                            {/* Amenities Enhancement */}
                            <section>
                                <h3 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    The Royal Amenities
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {room.amenities.slice(0, 8).map((amenity, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all">
                                                <CheckCircle2 className="w-4 h-4 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                                            </div>
                                            <span className="text-sm text-white/70 font-light group-hover:text-white transition-colors">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Dining/Food Section */}
                            <section>
                                <h3 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-8 flex items-center gap-2">
                                    <Utensils className="w-4 h-4" />
                                    Gourmet Dining
                                </h3>
                                <div className="space-y-6">
                                    {room.food ? room.food.map((item, i) => (
                                        <div key={i} className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-brand-gold/20 transition-all">
                                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                                            <p className="text-white/40 text-xs leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    )) : (
                                        <p className="text-white/40 text-sm italic font-light">Custom culinary experiences available upon request.</p>
                                    )}
                                </div>
                            </section>
                        </div>

                        {/* Guest Testimonials Section */}
                        <section className="px-10 lg:px-14 pb-14 border-t border-white/5 pt-14">
                            <h3 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-10 flex items-center gap-2">
                                <Quote className="w-4 h-4" />
                                Heartfelt Experiences
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {room.testimonials ? room.testimonials.map((t, i) => (
                                    <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
                                        <Quote className="absolute top-4 right-4 w-12 h-12 text-white/[0.02]" />
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-gold text-black flex items-center justify-center font-bold text-sm tracking-tighter">
                                                {t.avatar}
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-bold uppercase tracking-widest leading-none mb-1">{t.name}</p>
                                                <div className="flex gap-1">
                                                    {[...Array(t.rating)].map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-sm leading-relaxed font-light italic">"{t.text}"</p>
                                    </div>
                                )) : (
                                    <p className="text-white/40 text-sm font-light italic col-span-2">New addition to our collection. Be the first to review!</p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right: Sticky Action Sidebar (4 Cols) */}
                    <div className="lg:col-span-12 xl:col-span-4 p-8 lg:p-12 bg-white/[0.01] border-l border-white/5 flex flex-col h-full sticky top-0">
                        <div className="sticky top-12 space-y-10">
                            {/* Pricing Card */}
                            <div className="space-y-2 mb-10">
                                <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold">Exclusive Price</p>
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-6xl font-serif text-white">{room.price.split('/')[0]}</h2>
                                    <span className="text-white/40 text-sm font-light uppercase tracking-widest">{room.price.split('/')[1] ? `/${room.price.split('/')[1]}` : ''}</span>
                                </div>
                                <div className="flex items-center gap-1.5 pt-4">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest ml-2">{room.reviews} verified reviews</span>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="space-y-6">
                                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
                                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                        <div className="flex items-center gap-3">
                                            <Users className="w-4 h-4 text-brand-gold" />
                                            <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Guests</span>
                                        </div>
                                        <span className="text-sm text-white font-semibold">{room.capacity || room.guests}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-brand-gold" />
                                            <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Status</span>
                                        </div>
                                        <span className="text-sm text-green-400 font-semibold">{room.availability}</span>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-orange-600/5 border border-orange-600/10">
                                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Privacy Guarantee</span>
                                    </div>
                                    <p className="text-[10px] text-white/40 leading-relaxed font-light">
                                        {room.cancellation} Full discrete check-in and 24/7 dedicated support.
                                    </p>
                                </div>
                            </div>

                            {/* Reserve Button */}
                            <button
                                onClick={() => setShowBooking(true)}
                                className="w-full py-6 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-gold hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl shadow-white/5 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Confirm Reservation
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/100 transition-all duration-500 -translate-x-full group-hover:translate-x-0" />
                            </button>

                            <p className="text-center text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">
                                No credit card required to request
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
