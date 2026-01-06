import { Link } from 'react-router-dom'

const serviceCategories = [
  {
    category: 'Spa & Beauty',
    tagline: 'Indulgent treatments for total relaxation',
    services: [
      {
        name: 'Signature Spa Package',
        description: 'A full day of pampering including aromatherapy bath, hot stone massage, deep conditioning treatment, and pawdicure with nail art.',
        price: '$350',
        duration: '4 hours',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Royal Pawdicure',
        description: 'Luxurious nail care with massage, moisturizing treatment, and optional nail polish or nail caps in designer colors.',
        price: '$95',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Rejuvenating Facial',
        description: 'Gentle cleansing, exfoliation, and hydrating mask tailored to your pet\'s skin type. Includes eye area treatment.',
        price: '$120',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Gourmet Dining',
    tagline: 'Chef-crafted cuisine for distinguished palates',
    services: [
      {
        name: 'Wagyu Beef Tasting Menu',
        description: 'Five-course meal featuring A5 Japanese Wagyu, served with seasonal vegetables and bone broth.',
        price: '$185',
        duration: 'Full meal service',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Ocean Delights',
        description: 'Wild-caught salmon, sea bass, and lobster prepared to perfection. Includes omega-rich supplements.',
        price: '$165',
        duration: 'Full meal service',
        image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Custom Dietary Plan',
        description: 'Nutritionist consultation and one month of personalized meal prep based on your pet\'s health needs.',
        price: '$450/month',
        duration: 'Monthly subscription',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Holistic Wellness',
    tagline: 'Mind, body, and spirit harmony',
    services: [
      {
        name: 'Acupuncture Session',
        description: 'Traditional Chinese veterinary medicine performed by a certified practitioner. Ideal for pain management and relaxation.',
        price: '$180',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Therapeutic Massage',
        description: 'Deep tissue or Swedish massage to relieve tension, improve circulation, and enhance mobility.',
        price: '$150',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Doga (Dog Yoga)',
        description: 'Private yoga session with your pet, focusing on bonding, stretching, and meditation techniques.',
        price: '$120',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Chakra Balancing',
        description: 'Energy healing session using crystal therapy and Reiki to restore balance and vitality.',
        price: '$200',
        duration: '90 min',
        image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Training & Behavior',
    tagline: 'Excellence through expert guidance',
    services: [
      {
        name: 'CCPDT-Certified Private Training',
        description: 'One-on-one sessions with certified professional dog trainers. Customized curriculum for your pet\'s needs.',
        price: '$250/session',
        duration: '1.5 hours',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Behavioral Therapy Program',
        description: '8-week intensive program addressing anxiety, aggression, or other behavioral concerns.',
        price: '$2,500',
        duration: '8 weeks',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Elite Obedience Package',
        description: 'Comprehensive training covering advanced commands, off-leash reliability, and social etiquette.',
        price: '$1,800',
        duration: '6 weeks',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Photography & Art',
    tagline: 'Capturing timeless memories',
    services: [
      {
        name: 'Luxury Portrait Session',
        description: 'Professional studio photography with multiple outfit changes, custom backdrops, and 20 edited digital images.',
        price: '$650',
        duration: '3 hours',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Outdoor Adventure Shoot',
        description: 'On-location photography at scenic Bay Area destinations. Includes travel and 15 edited images.',
        price: '$850',
        duration: '4 hours',
        image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Custom Oil Portrait',
        description: 'Hand-painted portrait by a commissioned artist, available in various sizes and framing options.',
        price: 'From $1,500',
        duration: '4-6 weeks',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Exclusive Retreats',
    tagline: 'Unforgettable adventures await',
    services: [
      {
        name: 'Vineyard Day Trip',
        description: 'Private tour of pet-friendly Napa Valley wineries with gourmet lunch and wine pairing for owners.',
        price: '$495',
        duration: 'Full day',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Coastal Beach Escape',
        description: 'Exclusive access to private beaches in Carmel. Includes picnic basket, beach toys, and transportation.',
        price: '$395',
        duration: 'Full day',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Redwood Forest Adventure',
        description: 'Guided hike through ancient redwoods with professional photography, gourmet trail snacks, and nature education.',
        price: '$450',
        duration: 'Full day',
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop',
      },
      {
        name: 'Weekend Resort Stay',
        description: 'Complete luxury resort experience with private suite, daily spa, gourmet meals, and activities.',
        price: '$999',
        duration: 'Weekend (Fri-Sun)',
        image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=600&auto=format&fit=crop',
        featured: true,
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Pet Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold-400 text-sm uppercase tracking-[0.4em] mb-6 block">Our Services</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Curated <span className="gold-shimmer">Experiences</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-ivory-200/80 leading-relaxed">
            Every service at PetLux is designed to provide the ultimate in comfort, care, and indulgence 
            for your beloved companion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 border-t border-gold-400/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">{category.tagline}</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
                {category.category}
              </h2>
              <div className="gold-divider w-20 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`luxury-card group relative bg-navy-900/60 backdrop-blur-sm border rounded-2xl overflow-hidden ${
                    service.featured 
                      ? 'border-gold-400 shadow-lg shadow-gold-400/10' 
                      : 'border-gold-400/20 hover:border-gold-400/50'
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-white mb-3">{service.name}</h3>
                    <p className="text-navy-300 text-sm leading-relaxed mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gold-400/10">
                      <div>
                        <p className="text-gold-400 font-heading text-2xl font-semibold">{service.price}</p>
                        <p className="text-navy-400 text-xs">{service.duration}</p>
                      </div>
                      <Link
                        to="/contact"
                        className="text-gold-400 hover:text-gold-300 text-sm font-medium uppercase tracking-wider transition-colors"
                      >
                        Book Now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6">
            Can't Decide?
          </h2>
          <p className="text-ivory-200/80 text-lg mb-10 max-w-2xl mx-auto">
            Our concierge team will help you create a bespoke experience tailored to your pet's personality and preferences.
          </p>
          <Link
            to="/contact"
            className="luxury-btn inline-flex items-center gap-3 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-4 px-10 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
          >
            <span>Speak with Concierge</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

