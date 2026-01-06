import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const backgroundImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2064&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop',
]

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Luxury Spa & Wellness',
    description: 'Aromatherapy baths, hot stone massage, pawdicures, and rejuvenating skin treatments',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Gourmet Cuisine',
    description: 'Chef-prepared organic meals, wagyu beef, wild-caught salmon, and custom dietary menus',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Holistic Wellness',
    description: 'Acupuncture, therapeutic massage, dog yoga (doga), and chakra balancing sessions',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'CCPDT-Certified Training',
    description: 'Elite behavioral therapy, private training sessions with certified professionals',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Professional Photography',
    description: 'Studio portraits, outdoor sessions, and custom art prints for your beloved companion',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Exclusive Nature Retreats',
    description: 'Private vineyard visits, coastal escapes, and redwood forest adventures',
  },
]

const testimonials = [
  {
    name: 'Victoria Chen',
    title: 'CEO, Tech Innovations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: 'PetLux transformed our golden retriever into the most relaxed, well-behaved companion. The spa treatments and training are simply exceptional.',
    pet: 'Maxwell, Golden Retriever',
  },
  {
    name: 'Robert Sterling',
    title: 'Venture Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'The attention to detail at PetLux rivals any five-star hotel. Our French Bulldog comes home happier than ever after each visit.',
    pet: 'Coco, French Bulldog',
  },
  {
    name: 'Elizabeth Harrington',
    title: 'Philanthropist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: 'From the gourmet meals to the private vineyard retreats, PetLux provides an unparalleled experience. Truly the gold standard in pet care.',
    pet: 'Duchess, Standard Poodle',
  },
]

export default function HomePage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Calculate which section we're in based on scroll position
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor(scrollPosition / (windowHeight * 0.8))
      
      if (sectionIndex !== currentBgIndex && sectionIndex < backgroundImages.length) {
        setCurrentBgIndex(sectionIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentBgIndex])

  return (
    <div className="relative">
      {/* Fixed Background Images with Parallax Effect */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentBgIndex === index ? 1 : 0,
              transform: `scale(${1 + scrollY * 0.0001})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/90" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
          <div className="fade-in">
            <span className="inline-block text-gold-400 text-sm uppercase tracking-[0.4em] mb-6 font-medium">
              Silicon Valley's Premier Pet Experience
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 fade-in-up text-shadow-luxury">
            Where Luxury Meets
            <span className="block gold-shimmer">Unconditional Love</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-ivory-200/90 mb-12 fade-in-up fade-in-delay-1 leading-relaxed">
            An ultra-premium sanctuary for distinguished pets. Curated experiences including 
            world-class spa treatments, gourmet dining, and exclusive nature retreats.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up fade-in-delay-2">
            <Link
              to="/contact"
              className="luxury-btn bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-4 px-10 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
            >
              Reserve Your Experience
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-white/90 hover:text-gold-400 font-medium text-sm uppercase tracking-wider py-4 px-10 border border-white/30 hover:border-gold-400 rounded-full transition-all duration-300"
            >
              <span>Explore Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator">
            <div className="flex flex-col items-center gap-2 text-gold-400/60">
              <span className="text-xs uppercase tracking-widest">Scroll to Discover</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">Curated Experiences</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-shadow-luxury">
              Exceptional Services
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="luxury-card group bg-navy-900/80 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-400 mb-6 group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-navy-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">Exclusive Offer</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-shadow-luxury">
              Weekend Resort Retreat
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-navy-900/90 backdrop-blur-md border border-gold-400/30 rounded-3xl overflow-hidden">
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full">
                  First-Time Guest Special
                </span>
              </div>
              
              <div className="p-12 md:p-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl text-white mb-6">
                      South Bay Luxury Resort Experience
                    </h3>
                    <ul className="space-y-4">
                      {[
                        'Private suite with plush bedding',
                        'Daily spa treatment & pawdicure',
                        'Gourmet chef-prepared meals',
                        'Morning yoga & meditation',
                        'Professional photography session',
                        'Exclusive nature hike',
                        'Personal concierge service 24/7',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-ivory-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="inline-block bg-navy-950/50 rounded-2xl p-8 border border-gold-400/20">
                      <p className="text-navy-400 line-through text-lg mb-2">$1,499</p>
                      <div className="flex items-baseline justify-center md:justify-end gap-2 mb-2">
                        <span className="font-heading text-6xl md:text-7xl text-gold-400 font-semibold">$999</span>
                      </div>
                      <p className="text-ivory-200 text-sm mb-8">for a complete weekend</p>
                      <Link
                        to="/contact"
                        className="luxury-btn block w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
                      >
                        Reserve Now
                      </Link>
                      <p className="mt-4 text-navy-400 text-xs">Limited availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-shadow-luxury">
              What Our Clients Say
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="luxury-card bg-navy-900/80 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/50"
              >
                <svg className="h-10 w-10 text-gold-400/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-ivory-200 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-400/30"
                  />
                  <div>
                    <p className="font-heading text-lg text-white">{testimonial.name}</p>
                    <p className="text-gold-400 text-sm">{testimonial.title}</p>
                    <p className="text-navy-400 text-xs mt-1">{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 text-shadow-luxury">
            Ready to Indulge Your
            <span className="block gold-shimmer">Beloved Companion?</span>
          </h2>
          <p className="text-ivory-200/80 text-lg mb-12 max-w-2xl mx-auto">
            Join Silicon Valley's most exclusive pet community. 
            Our concierge team is ready to craft the perfect experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-btn bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-4 px-10 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
            >
              Contact Concierge
            </Link>
            <a
              href="tel:+16505551234"
              className="inline-flex items-center gap-2 text-white/90 hover:text-gold-400 font-medium text-sm uppercase tracking-wider py-4 px-10 border border-white/30 hover:border-gold-400 rounded-full transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(650) 555-1234</span>
            </a>
          </div>
        </div>
      </section>

      {/* Spacer for parallax effect */}
      <div className="h-32 relative z-10" />
    </div>
  )
}

