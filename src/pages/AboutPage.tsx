import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Dr. Alexandra Monroe',
    role: 'Founder & Chief Wellness Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'Former veterinary specialist at Stanford, Dr. Monroe founded PetLux with a vision to bring five-star hospitality to pet care.',
  },
  {
    name: 'James Chen',
    role: 'Director of Culinary Arts',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    bio: 'Michelin-starred chef who transitioned to pet nutrition, creating gourmet experiences that prioritize both taste and health.',
  },
  {
    name: 'Dr. Sarah Williams',
    role: 'Head of Holistic Wellness',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    bio: 'Certified in veterinary acupuncture and massage therapy, Dr. Williams brings 15 years of holistic care experience.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Lead CCPDT Trainer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'Award-winning trainer with expertise in behavioral therapy and positive reinforcement techniques.',
  },
]

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Uncompromising Excellence',
    description: 'Every detail matters. From the thread count of our bedding to the sourcing of our ingredients, we accept nothing less than perfection.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Genuine Care',
    description: 'Behind every service is a team that truly loves animals. Your pet\'s happiness and well-being drive everything we do.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Science-Backed Approach',
    description: 'Our methods are grounded in veterinary science and behavioral research, ensuring safe, effective, and lasting results.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Personalized Service',
    description: 'No two pets are alike. We create bespoke experiences tailored to your companion\'s unique personality and needs.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="About PetLux"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold-400 text-sm uppercase tracking-[0.4em] mb-6 block">Our Story</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8">
            About <span className="gold-shimmer">PetLux</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-ivory-200/80 leading-relaxed">
            Where passion for pets meets the pinnacle of luxury hospitality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-6 block">The Beginning</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-8">
                Born from a Love for Excellence
              </h2>
              <div className="space-y-6 text-ivory-200/80 leading-relaxed">
                <p>
                  PetLux was founded in 2020 by Dr. Alexandra Monroe, a veterinary specialist who noticed 
                  a gap in the market for truly premium pet services in Silicon Valley. After years of 
                  caring for the pets of tech executives and entrepreneurs, she realized that these 
                  discerning owners wanted more than basic care—they wanted experiences that matched 
                  their own lifestyle.
                </p>
                <p>
                  Drawing inspiration from the world's finest hotels and spas, PetLux was designed to 
                  be a sanctuary where pets are treated as the cherished family members they are. Our 
                  state-of-the-art facility in Los Altos Hills features organic materials, premium 
                  amenities, and spaces designed specifically for canine comfort and enrichment.
                </p>
                <p>
                  Today, PetLux serves as the sister company to Bay Pet Ventures, our adventure-focused 
                  service. While Bay Pet Ventures offers exciting outdoor experiences, PetLux focuses 
                  on the finer things in life—spa treatments, gourmet dining, and exclusive retreats 
                  that cater to the most sophisticated palates.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop"
                  alt="PetLux Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-navy-950">
                  <p className="font-heading text-5xl font-bold">5+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">What We Believe</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
              Our Core Values
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-400 mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-4">{value.title}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">The Experts</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="gold-divider w-20 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="luxury-card group bg-navy-900/60 backdrop-blur-sm border border-gold-400/20 rounded-2xl overflow-hidden hover:border-gold-400/50"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-gold-400 text-sm mb-4">{member.role}</p>
                  <p className="text-navy-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2,500+', label: 'Happy Pets Served' },
              { number: '98%', label: 'Client Retention' },
              { number: '50+', label: 'Services Offered' },
              { number: '24/7', label: 'Concierge Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-400 font-semibold mb-2">
                  {stat.number}
                </p>
                <p className="text-ivory-200/60 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-ivory-200/80 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a private tour of our facility and discover why Silicon Valley's most 
            discerning pet owners choose PetLux.
          </p>
          <Link
            to="/contact"
            className="luxury-btn inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-4 px-10 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
          >
            <span>Schedule a Tour</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

