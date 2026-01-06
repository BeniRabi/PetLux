import { useState, type FormEvent } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  petName: string
  petBreed: string
  service: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petBreed: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const services = [
    'Signature Spa Package',
    'Gourmet Dining Experience',
    'Holistic Wellness Session',
    'CCPDT Private Training',
    'Professional Photography',
    'Weekend Resort Retreat',
    'Exclusive Nature Trip',
    'Other / Custom Request',
  ]

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2064&auto=format&fit=crop"
            alt="Contact PetLux"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold-400 text-sm uppercase tracking-[0.4em] mb-6 block">Get in Touch</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8">
            Contact <span className="gold-shimmer">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-ivory-200/80 leading-relaxed">
            Our concierge team is available 24/7 to assist with inquiries and reservations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
                Let's Create Something <span className="text-gold-400">Extraordinary</span>
              </h2>
              <p className="text-ivory-200/80 leading-relaxed mb-12">
                Whether you're interested in a single service or a complete luxury experience, 
                our dedicated team is here to help craft the perfect journey for your beloved companion.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Visit Us</h3>
                    <p className="text-navy-300">
                      123 Luxury Lane<br />
                      Los Altos Hills, CA 94022
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Call Us</h3>
                    <p className="text-navy-300">
                      <a href="tel:+16505551234" className="hover:text-gold-400 transition-colors">
                        (650) 555-1234
                      </a>
                    </p>
                    <p className="text-navy-400 text-sm mt-1">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Email Us</h3>
                    <p className="text-navy-300">
                      <a href="mailto:concierge@petlux.com" className="hover:text-gold-400 transition-colors">
                        concierge@petlux.com
                      </a>
                    </p>
                    <p className="text-navy-400 text-sm mt-1">Response within 2 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Operating Hours */}
              <div className="mt-12 p-8 bg-navy-900/60 backdrop-blur-sm border border-gold-400/20 rounded-2xl">
                <h3 className="font-heading text-xl text-white mb-6">Operating Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '7:00 AM - 9:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
                    { day: 'Sunday', hours: '9:00 AM - 6:00 PM' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-navy-300">{day}</span>
                      <span className="text-gold-400">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-navy-400 text-sm mt-6">
                  * 24/7 concierge support available for booked guests
                </p>
              </div>
            </div>
            
            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-navy-900/60 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl text-white mb-4">Thank You!</h3>
                  <p className="text-ivory-200/80 mb-8">
                    Your inquiry has been received. Our concierge team will contact you within 2 hours 
                    to discuss your luxury experience.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-navy-900/60 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-8 md:p-12">
                  <h3 className="font-heading text-2xl text-white mb-8">Request Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="(650) 555-1234"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Pet's Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.petName}
                        onChange={(e) => handleChange('petName', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="Max"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Pet's Breed</label>
                      <input
                        type="text"
                        value={formData.petBreed}
                        onChange={(e) => handleChange('petBreed', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors"
                        placeholder="Golden Retriever"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-ivory-200 text-sm mb-2">Interested Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-ivory-200 text-sm mb-2">Additional Details</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className="w-full bg-navy-950/50 border border-gold-400/20 rounded-lg px-4 py-3 text-white placeholder-navy-400 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your pet's preferences, any special requirements, or questions you have..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="mt-8 w-full luxury-btn bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-xl hover:shadow-gold-400/30 transition-all duration-300"
                  >
                    Submit Inquiry
                  </button>
                  
                  <p className="text-navy-400 text-xs text-center mt-6">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Find Our Sanctuary
            </h2>
            <p className="text-navy-300">Located in the heart of Silicon Valley</p>
          </div>
          
          <div className="aspect-[21/9] bg-navy-900/60 border border-gold-400/20 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gold-400/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gold-400 font-heading text-xl mb-2">123 Luxury Lane, Los Altos Hills</p>
              <a 
                href="https://maps.google.com/?q=Los+Altos+Hills,+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

