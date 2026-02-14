import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { Eye, Users, Star, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function RoomsPage() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredRooms = filter === 'All'
    ? roomsData
    : roomsData.filter(room => room.type === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-flex items-center gap-2 bg-brand-gold/5 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3" />
            Curated Excellence
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-none tracking-tight">Luxury <br /><span className="text-brand-gold italic">Accommodations</span></h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in unparalleled luxury. Discover our hand-picked collection of the world's most prestigious clifftop villas and urban sanctuaries.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar">
          {['All', 'Villa', 'Room'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] transition-all duration-500 border whitespace-nowrap ${filter === type
                ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105'
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => navigate(`/rooms/${room.id}`)}
              className="group cursor-pointer rounded-[2.5rem] bg-[#111] border border-white/5 hover:border-brand-gold/30 transition-all duration-700 shadow-2xl hover:shadow-brand-gold/5 flex flex-col"
            >
              <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden m-2">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {room.featured && (
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-xl shadow-brand-gold/20 backdrop-blur-md">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                <div className="absolute top-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl text-white hover:bg-brand-gold hover:text-white transition-all">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                      {room.type}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-white text-[10px] font-bold">{room.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">{room.name}</h3>
                  <p className="text-brand-gold text-xl font-serif">{room.price}</p>
                </div>
              </div>

              <div className="px-10 pb-10 pt-6">
                <p className="text-white/40 text-sm mb-8 leading-relaxed line-clamp-2 font-light">
                  {room.description}
                </p>

                <div className="flex items-center justify-between mb-8 border-y border-white/5 py-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-white/30">
                      <Users className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Cap.</span>
                    </div>
                    <span className="text-sm font-semibold text-white/80">{room.guests}</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-2 text-white/30">
                      <Eye className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Views</span>
                    </div>
                    <span className="text-sm font-semibold text-white/80">{room.customerViews}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/rooms/${room.id}`);
                  }}
                  className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Explore Studio
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
