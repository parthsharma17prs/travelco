export const roomsData = [
    {
        id: 1,
        name: 'Ocean View Villa',
        type: 'Villa',
        price: '$2,500/night',
        rating: '4.9',
        reviews: '128',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop',
        description: 'Stunning 5-bedroom villa with infinity pool overlooking the Mediterranean.',
        fullDescription: 'Experience the pinnacle of Mediterranean luxury in our Ocean View Villa. This architectural masterpiece spans over 6,000 square feet of meticulously designed living space. Inspired by the Essentia Luxury standards, this property offers a sanctuary of refinement.',
        amenities: ['5 Bedrooms', 'Infinity Pool', 'Private Beach', 'Chef Kitchen', 'Ocean View', 'Wine Cellar', 'Smart Home Tech', 'Private Cinema', 'Multi-cuisine Dining', '24/7 Concierge', 'Chauffeur Service'],
        guests: '10 guests',
        capacity: '10 Adults, 4 Children',
        availability: 'Available for Summer 2026',
        cancellation: 'Super Flexible: Full refund if cancelled 24 hours before arrival.',
        food: [
            { title: 'Private Chef', desc: 'Personalized 5-course Mediterranean dining' },
            { title: 'Wine Cellar', desc: 'Curated selection of vintage champagnes' },
            { title: 'Breakfast', desc: 'Organic sunrise breakfast on the terrace' }
        ],
        testimonials: [
            { name: 'Alexander Wright', text: 'Simply the best stay of my life. The views are unmatched.', rating: 5, avatar: 'AW' },
            { name: 'Elena Rossi', text: 'Pure luxury in every detail. The staff were incredible.', rating: 5, avatar: 'ER' }
        ],
        customerViews: '2,450',
        featured: true
    },
    {
        id: 2,
        name: 'Mountain Retreat',
        type: 'Villa',
        price: '$1,800/night',
        rating: '4.8',
        reviews: '94',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
        description: 'Secluded alpine villa nestled in the Swiss Alps with ski-in/ski-out access.',
        fullDescription: 'Discover ultimate serenity in the heart of the Swiss Alps. This secluded retreat combines rustic charm with ultra-modern luxury. Features include a state-of-the-art spa area with a cedar-wood sauna and an outdoor heated hot tub.',
        amenities: ['4 Bedrooms', 'Hot Tub', 'Ski Access', 'Fireplace', 'Mountain View', 'Sauna', 'Heli-pad Access'],
        guests: '8 guests',
        capacity: '8 Adults',
        availability: 'Limited Winter Availability',
        cancellation: 'Moderate: Full refund up to 7 days before arrival.',
        food: [
            { title: 'Après-ski', desc: 'Traditional Swiss fondue and hot chocolates' },
            { title: 'Organic Bar', desc: 'Fresh mountain herb teas and tonics' }
        ],
        testimonials: [
            { name: 'Marc Hoffmann', text: 'The ski access is perfect. High-end comfort in the snow.', rating: 4, avatar: 'MH' }
        ],
        customerViews: '1,890'
    },
    {
        id: 3,
        name: 'Penthouse Suite',
        type: 'Room',
        price: '$950/night',
        rating: '4.7',
        reviews: '215',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
        description: 'Luxurious top-floor suite in the heart of Manhattan with city skyline views.',
        fullDescription: 'Rising 80 floors above Manhattan, our Penthouse Suite offers an urban sanctuary like no other. The private 800-square-foot terrace provides a bird\'s-eye view of Central Park and the Empire State Building.',
        amenities: ['2 Bedrooms', 'Private Terrace', 'Marble Bath', 'Concierge', 'City View', 'Private Elevator', 'Executive Lounge Access'],
        guests: '4 guests',
        capacity: '4 Adults',
        availability: 'Booking 3 Months in Advance',
        cancellation: 'Business Standard: Full refund up to 48 hours before arrival.',
        food: [
            { title: 'Fine Dining', desc: 'In-room service from Michelin-starred partners' },
            { title: 'Cocktail Bar', desc: 'Private mixologist available for events' }
        ],
        testimonials: [
            { name: 'Sarah Jenkins', text: 'The skyline views from the bath are incredible.', rating: 5, avatar: 'SJ' }
        ],
        customerViews: '3,120'
    },
    {
        id: 4,
        name: 'Tropical Paradise Villa',
        type: 'Villa',
        price: '$3,200/night',
        rating: '5.0',
        reviews: '56',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop',
        description: 'Exclusive Bali villa surrounded by lush jungle and rice terraces.',
        fullDescription: 'A sanctuary of peace in Bali\'s spiritual heartland. This expansive villa is built using sustainable local materials and traditional Balinese engineering, blended seamlessly with high-tech amenities.',
        amenities: ['6 Bedrooms', 'Private Pool', 'Spa', 'Jungle View', 'Butler Service', 'Yoga Pavilion', 'Organic Garden'],
        guests: '12 guests',
        capacity: '12 Adults, 2 Children',
        availability: 'Open All Year',
        cancellation: 'Relaxed: Full refund up to 14 days before arrival.',
        food: [
            { title: 'Garden Fresh', desc: 'Estate-to-table organic Balinese cuisine' },
            { title: 'Tea Ceremony', desc: 'Traditional sunset mindfulness drinks' }
        ],
        testimonials: [
            { name: 'David Chen', text: 'Healing, luxurious, and perfectly private.', rating: 5, avatar: 'DC' }
        ],
        customerViews: '1,560'
    },
    {
        id: 5,
        name: 'Desert Oasis Suite',
        type: 'Room',
        price: '$750/night',
        rating: '4.6',
        reviews: '82',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
        description: 'Elegant suite in Dubai with Arabian-inspired design and desert views.',
        fullDescription: 'Modern Arabian luxury meets the ancient desert. Located in a tranquil enclave minutes from the bustling city, this suite offers a private sanctuary with views of the shifting sand dunes.',
        amenities: ['1 Bedroom', 'Balcony', 'Spa Access', 'Desert View', 'Mini Bar', 'Pillow Menu', 'Turndown Service'],
        guests: '2 guests',
        capacity: '2 Adults',
        availability: 'High Demand: Oct-Mar',
        cancellation: 'Flexible Seasonal: Full refund 48h before arrival.',
        food: [
            { title: 'Middle Eastern', desc: 'Gourmet mezze and desert-grilled specials' },
            { title: 'Dune Picnic', desc: 'Private starlit dinner on the dunes' }
        ],
        testimonials: [
            { name: 'Amira Al-Fayed', text: 'A peaceful haven amidst the dunes. Truly magical.', rating: 4, avatar: 'AA' }
        ],
        customerViews: '1,240'
    },
    {
        id: 6,
        name: 'Coastal Mansion',
        type: 'Villa',
        price: '$4,500/night',
        rating: '4.9',
        reviews: '42',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
        description: 'Magnificent beachfront estate in Malibu with private dock.',
        fullDescription: 'Malibu\'s most prestigious address. This sprawling estate offers unprecedented privacy and direct access to a secluded stretch of Billionaire\'s Beach.',
        amenities: ['8 Bedrooms', 'Home Theater', 'Wine Cellar', 'Private Dock', 'Beach Access', 'IMAX Cinema', 'Personal Trainer'],
        guests: '16 guests',
        capacity: '16 Adults, 8 Children',
        availability: 'Exclusive Booking Required',
        cancellation: 'Strict: No refund after booking confirmation.',
        food: [
            { title: 'Seafood Grill', desc: 'Day-catch lobster and champagne pairing' },
            { title: 'Beach Picnic', desc: 'Curated sunset hamper for the private beach' }
        ],
        testimonials: [
            { name: 'James Cameron', text: 'The ultimate coastal experience. The theater is top-tier.', rating: 5, avatar: 'JC' }
        ],
        customerViews: '4,500',
        featured: true
    }
];
