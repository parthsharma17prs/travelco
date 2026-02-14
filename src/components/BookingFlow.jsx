import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Coffee, CreditCard, CheckCircle, ArrowRight, ArrowLeft, Loader2, Utensils, Sparkles } from 'lucide-react';

const MEAL_PLANS = [
    { id: 'breakfast', name: 'Gourmet Breakfast', price: 45, icon: <Coffee className="w-5 h-5" />, desc: 'A curated selection of local and international breakfast favorites.' },
    { id: 'fullboard', name: 'Epicurean Full Board', price: 180, icon: <Utensils className="w-5 h-5" />, desc: 'Chef-curated breakfast, lunch, and spectacular 4-course dinner.' },
];

const ADDONS = [
    { id: 'spa', name: 'Spa Access', price: 120, icon: <Sparkles className="w-5 h-5" />, desc: 'Unlimited access to the infinity spa and hydrotherapy pools.' },
];

export default function BookingFlow({ room, onClose }) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 2,
        meals: [],
        addons: [],
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleBooking = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(4);
        }, 3000);
    };

    const calculateTotal = () => {
        const nights = 3; // Simulated
        const roomTotal = 2500 * nights;
        const mealsTotal = formData.meals.reduce((sum, id) => sum + (MEAL_PLANS.find(m => m.id === id)?.price || 0), 0) * nights * formData.guests;
        const addonsTotal = formData.addons.reduce((sum, id) => sum + (ADDONS.find(a => a.id === id)?.price || 0), 0);
        return roomTotal + mealsTotal + addonsTotal;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />

            <motion.div
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
                <button onClick={onClose} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-10">
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Progress Sidebar */}
                    <div className="w-full md:w-1/3 bg-white/5 p-12 border-r border-white/5">
                        <div className="mb-12">
                            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Reservation</span>
                            <h2 className="text-3xl font-serif mt-2 text-white">Your Stay</h2>
                            <p className="text-white/40 text-xs mt-2">{room.name}</p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { s: 1, label: 'Dates & Guests', icon: <Calendar className="w-4 h-4" /> },
                                { s: 2, label: 'Preferences', icon: <Utensils className="w-4 h-4" /> },
                                { s: 3, label: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
                                { s: 4, label: 'Confirmed', icon: <CheckCircle className="w-4 h-4" /> }
                            ].map((item) => (
                                <div key={item.s} className={`flex items-center gap-4 transition-all ${step >= item.s ? 'text-white' : 'text-white/20'}`}>
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all ${step >= item.s ? 'border-brand-gold bg-brand-gold/10 text-brand-gold' : 'border-white/10 bg-white/5'}`}>
                                        {item.s < step || step === 4 ? <CheckCircle className="w-5 h-5" /> : item.icon}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {step < 4 && (
                            <div className="mt-20 pt-8 border-t border-white/10">
                                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Estimated Total</p>
                                <p className="text-3xl font-serif text-brand-gold">${calculateTotal().toLocaleString()}</p>
                            </div>
                        )}
                    </div>

                    {/* Step Content */}
                    <div className="w-full md:w-2/3 p-12 overflow-y-auto max-h-[80vh]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Check-In</label>
                                            <input
                                                type="date"
                                                value={formData.checkIn}
                                                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-gold transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Check-Out</label>
                                            <input
                                                type="date"
                                                value={formData.checkOut}
                                                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-brand-gold transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Guests</label>
                                        <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                                            <Users className="w-5 h-5 text-brand-gold" />
                                            <input
                                                type="range"
                                                min="1"
                                                max="10"
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                                                className="flex-1 accent-brand-gold"
                                            />
                                            <span className="text-white font-bold w-12 text-center text-lg">{formData.guests}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.checkIn || !formData.checkOut}
                                        className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-brand-gold hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                                    >
                                        Personalize Preferences <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Dining Experience</h3>
                                        <div className="space-y-3">
                                            {MEAL_PLANS.map((meal) => (
                                                <div
                                                    key={meal.id}
                                                    onClick={() => {
                                                        const newMeals = formData.meals.includes(meal.id) ? [] : [meal.id];
                                                        setFormData({ ...formData, meals: newMeals });
                                                    }}
                                                    className={`p-6 rounded-3xl border transition-all cursor-pointer ${formData.meals.includes(meal.id) ? 'bg-brand-gold/10 border-brand-gold shadow-[0_0_20px_rgba(184,134,11,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-2 rounded-xl ${formData.meals.includes(meal.id) ? 'bg-brand-gold text-white' : 'bg-white/10 text-white/40'}`}>
                                                                {meal.icon}
                                                            </div>
                                                            <span className="font-bold text-white">{meal.name}</span>
                                                        </div>
                                                        <span className="text-brand-gold font-bold">+${meal.price}/pp</span>
                                                    </div>
                                                    <p className="text-xs text-white/40 leading-relaxed">{meal.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="flex-1 py-5 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Back</button>
                                        <button onClick={nextStep} className="flex-[2] py-5 rounded-2xl bg-white text-black font-bold hover:bg-brand-gold hover:text-white transition-all flex items-center justify-center gap-2 group">
                                            Review & Pay <CreditCard className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-8">
                                                <CreditCard className="w-10 h-10 text-white/20 group-hover:text-brand-gold/40 transition-colors" />
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Cardholder Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="YOUR NAME"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-brand-gold text-lg font-serif"
                                                        value={formData.cardName}
                                                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Card Number</label>
                                                    <input
                                                        type="text"
                                                        placeholder="**** **** **** 4242"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-brand-gold text-xl tracking-[0.2em]"
                                                        value={formData.cardNumber}
                                                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Expiry</label>
                                                        <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-brand-gold" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">CVC</label>
                                                        <input type="password" placeholder="***" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-brand-gold" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-4 text-[10px] text-white/30 text-center leading-relaxed">
                                            Your payment is secured with 256-bit encryption. By clicking "Complete Booking", you agree to our terms and conditions.
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="flex-1 py-5 rounded-2xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">Back</button>
                                        <button
                                            onClick={handleBooking}
                                            disabled={loading}
                                            className="flex-[2] py-5 rounded-2xl bg-brand-gold text-white font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group shadow-[0_4px_30px_rgba(184,134,11,0.3)]"
                                        >
                                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                                <>Complete Booking <CheckCircle className="w-4 h-4" /></>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-8">
                                        <CheckCircle className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h2 className="text-4xl font-serif text-white mb-4">Reservation Confirmed</h2>
                                    <p className="text-white/60 mb-12 max-w-sm leading-relaxed">
                                        Welcome to the extraordinary. We've sent your itinerary and digital key to your email. Your luxury escape begins soon.
                                    </p>

                                    <div className="w-full grid grid-cols-2 gap-4 mb-12">
                                        <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Confirmation ID</p>
                                            <p className="text-white font-serif">#TC-8829-XL</p>
                                        </div>
                                        <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Itinerary</p>
                                            <p className="text-white font-serif tracking-widest uppercase text-xs">View Pass</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="px-12 py-5 rounded-2xl bg-white text-black font-bold hover:bg-brand-gold hover:text-white transition-all shadow-xl"
                                    >
                                        Return to Gallery
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
