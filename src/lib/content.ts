export const site = {
  name: 'Arogyam Wellness Hub',
  phone: '+91 90849 08496',
  phoneHref: 'tel:+919084908496',
  whatsapp: '919084908496',
  instagram: 'https://www.instagram.com/arogyamwellnesshub/',
  founder: 'Neeraj Churi',
  founderInstagram: 'https://www.instagram.com/neeraj_churi/',
  address: 'Behind Virar Maternity & Nursing Home, Chhatrapati Shivaji Road, Sheetal Nagar, Virar West, Maharashtra 401303',
  maps: 'https://www.google.com/maps/place/Arogyam+Wellness+Hub/@19.4518099,72.8067976,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a92ea8706c15:0x544a04857da05a64!8m2!3d19.4518099!4d72.8067976!16s%2Fg%2F11x34h0z82',
  mapEmbed: 'https://maps.google.com/maps?q=19.4518099,72.8067976&z=17&output=embed',
  listedHours: {weekdays:'7:00 AM – 9:00 PM',sunday:'Closed',confirmed:false},
  isLive: process.env.NEXT_PUBLIC_SITE_LIVE === 'true',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // Use a local MP4 after copying it to public/videos. Never use an Instagram page URL here.
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO ?? '/videos/studio.mp4',
};

export type Programme = {
  slug: string; name: string; mood: string; headline: string; description: string;
  image: string; alt: string; focus: string[]; intro: string; video?: string; videoPoster?: string;
};

export const programmes: Programme[] = [
  {
    video:'/videos/circuit-training.mp4', videoPoster:'/images/video-circuit-training.webp',
    slug: 'crossfit', name: 'CrossFit', mood: 'FIND YOUR STRONG',
    headline: 'Bring your energy. Build your strength.',
    description: 'Make room for a different kind of challenge. Explore strength, conditioning and functional movement at Arogyam.',
    image: '/images/enhanced-strength.webp', alt: 'A member training with a barbell at Arogyam',
    focus: ['Strength', 'Conditioning', 'Functional movement'],
    intro: 'Interested in a more active routine? Speak with the studio about the CrossFit programme, current sessions and the right starting point for your experience.',
  },
  {
    slug: 'yoga', name: 'Yoga', mood: 'MAKE SPACE FOR YOU',
    headline: 'A deeper breath. A little more balance.',
    description: 'Step away from the rush and into movement, breath and a moment for yourself.',
    image: '/images/enhanced-yoga.webp', alt: 'Children practising seated yoga on orange mats at Arogyam',
    focus: ['Movement', 'Breath', 'Balance'],
    intro: 'Make yoga part of your week. Ask the studio about available styles, batch timings and how to join a session that suits you.',
  },
  {
    video:'/videos/zumba.mp4', videoPoster:'/images/video-zumba.webp',
    slug: 'zumba', name: 'Zumba', mood: 'MOVE TO YOUR OWN BEAT',
    headline: 'Less routine. More rhythm.',
    description: 'Bring some music and movement to your week. Discover dance fitness with the Arogyam community.',
    image: '/images/enhanced-zumba.webp', alt: 'Arogyam members enjoying a group Zumba session',
    focus: ['Dance fitness', 'Rhythm', 'Group energy'],
    intro: 'If music makes you want to move, explore Zumba at Arogyam. Contact the team for current batches, instructor information and availability.',
  },
  {
    video:'/videos/mat-movement.mp4', videoPoster:'/images/video-mat-movement.webp',
    slug: 'aerobics', name: 'Aerobics', mood: 'TURN YOUR ENERGY UP',
    headline: 'Find a rhythm worth coming back to.',
    description: 'An active addition to your week, with rhythmic movement and the energy of a studio session.',
    image: '/images/floor-training.webp', alt: 'A group floor-exercise session inside the studio',
    focus: ['Cardio movement', 'Coordination', 'Group exercise'],
    intro: 'Explore the aerobics programme and ask the studio how sessions are structured. The team can help you understand the current schedule before you join.',
  },
  {
    video:'/videos/strength-agility.mp4', videoPoster:'/images/video-strength-agility.webp',
    slug: 'sports-fitness', name: 'Sports fitness', mood: 'MORE IN YOUR GAME',
    headline: 'Train for the way you love to move.',
    description: 'Explore fitness beyond the everyday workout, with a programme centred on movement for sport.',
    image: '/images/weights.webp', alt: 'Colourful weight plates and training equipment at Arogyam',
    focus: ['Movement', 'Strength', 'Conditioning'],
    intro: 'Tell the studio which sport you play and what you want to work on. Ask about programme suitability, coaching and current training options.',
  },
  {
    slug: 'aerial-yoga', name: 'Aerial yoga', mood: 'A FRESH PERSPECTIVE',
    headline: 'Discover a different way to flow.',
    description: 'Explore movement with aerial hammocks. A fresh way to experience the studio.',
    image: '/images/enhanced-aerial.webp', alt: 'Hammock-supported aerial yoga in the Arogyam studio',
    focus: ['Hammock movement', 'Balance', 'Flow'],
    intro: 'Aerial yoga is featured in the studio’s promotional material. Contact the team to confirm current availability, instructor guidance and whether the class is suitable for you.',
  },
];

export const gallery = [
  { src: '/images/enhanced-strength.webp', alt: 'Barbell training at Arogyam', label: 'Find your strong', category: 'Sessions' },
  { src: '/images/enhanced-aerial.webp', alt: 'Hammock-supported aerial yoga', label: 'A different perspective', category: 'Sessions' },
  { src: '/images/enhanced-yoga.webp', alt: 'Children practising seated yoga', label: 'Space to grow', category: 'Sessions' },
  { src: '/images/enhanced-zumba.webp', alt: 'The Arogyam Zumba group', label: 'Feel the energy', category: 'Community' },
  { src: '/images/studio.webp', alt: 'The mirrored training floor at Arogyam', label: 'Room to move', category: 'Studio' },
  { src: '/images/yoga-wide.webp', alt: 'Members practising yoga in the studio', label: 'Find your balance', category: 'Sessions' },
  { src: '/images/equipment.webp', alt: 'Kettlebells, rollers and training accessories', label: 'Tools for your practice', category: 'Studio' },
  { src: '/images/community.webp', alt: 'A group of Arogyam members in front of the studio wall', label: 'Better, together', category: 'Community' },
  { src: '/images/rowing.webp', alt: 'A member using a rowing machine', label: 'One movement at a time', category: 'Sessions' },
  { src: '/images/exterior.webp', alt: 'The entrance and signage of Arogyam Wellness Hub', label: 'Meet us here', category: 'Studio' },
];

export const faqs = [
  { q: 'How do I get started?', a: 'Choose a programme and request a free trial through WhatsApp. The team will confirm availability, trial terms and what to bring before you visit.' },
  { q: 'Can I join if I am new to fitness?', a: 'Let the team know your experience level when you enquire. They can discuss programme suitability and help you choose a starting point.' },
  { q: 'What are the fees and class timings?', a: 'Please contact the studio for the latest membership options, class timings and availability. These can vary by programme and batch.' },
  { q: 'Do you offer aerial yoga?', a: 'Arogyam has promoted aerial yoga sessions. Ask the team about current availability, what to bring and instructor guidance before attending.' },
  { q: 'Where is the studio?', a: site.address + '. Use the directions link below to plan your visit.' },
];

export const studioClips = [
  { id: 'circuit-training', title: 'A little stronger, together.', label: 'CIRCUIT TRAINING', duration: '12 SEC', description: 'A glimpse of kettlebell and group training in the studio.', src: '/videos/circuit-training.mp4', poster: '/images/video-circuit-training.webp' },
  { id: 'strength-agility', title: 'Find your next challenge.', label: 'STRENGTH & AGILITY', duration: '12 SEC', description: 'A short look at agility drills and strength work at Arogyam.', src: '/videos/strength-agility.mp4', poster: '/images/video-strength-agility.webp' },
  { id: 'zumba', title: 'Feel the room come alive.', label: 'ZUMBA IN MOTION', duration: '16 SEC', description: 'Members moving together during a Zumba session.', src: '/videos/zumba.mp4', poster: '/images/video-zumba.webp' },
  { id: 'mat-movement', title: 'Make space to move.', label: 'STRETCH & MOVE', duration: '9 SEC', description: 'A mat session with standing and floor movements.', src: '/videos/mat-movement.mp4', poster: '/images/video-mat-movement.webp' },
];
