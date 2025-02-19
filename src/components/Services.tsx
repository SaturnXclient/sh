import React from 'react';
import {
  Scissors,
  Ruler,
  Clock,
  Gift,
  UserCheck,
  Book,
  Shirt,
  Sparkles,
  Camera,
  Users,
  GraduationCap,
  Heart
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Made to Measure',
    description: 'Personalized fitting service with expert tailors'
  },
  {
    icon: UserCheck,
    title: 'Personal Stylist',
    description: 'One-on-one styling sessions with fashion experts'
  },
  {
    icon: Camera,
    title: 'Virtual Try-On',
    description: 'Experience our collection virtually before purchase'
  },
  {
    icon: Book,
    title: 'Style Workshop',
    description: 'Learn about fashion, styling, and wardrobe management'
  },
  {
    icon: Gift,
    title: 'Gift Services',
    description: 'Luxury gift wrapping and corporate gifting programs'
  },
  {
    icon: Clock,
    title: 'Express Alterations',
    description: '48-hour alteration service for urgent requirements'
  },
  {
    icon: Ruler,
    title: 'Size Consultation',
    description: 'Expert guidance for finding your perfect fit'
  },
  {
    icon: Shirt,
    title: 'Fabric Library',
    description: 'Explore our curated collection of premium fabrics'
  },
  {
    icon: Sparkles,
    title: 'Monogramming',
    description: 'Personalize your garments with custom monograms'
  },
  {
    icon: Users,
    title: 'Private Shopping',
    description: 'Exclusive after-hours shopping experience'
  },
  {
    icon: GraduationCap,
    title: 'Style Education',
    description: 'Learn about fabric care and maintenance'
  },
  {
    icon: Heart,
    title: 'Loyalty Program',
    description: 'Earn points and enjoy exclusive member benefits'
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Our Services</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Experience luxury beyond clothing with our comprehensive range of personalized services designed to elevate your shopping journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <service.icon className="w-10 h-10 text-stone-800 mb-4" />
              <h3 className="font-display text-xl mb-2">{service.title}</h3>
              <p className="text-stone-600">{service.description}</p>
              <button className="mt-4 text-stone-800 text-sm font-medium hover:text-stone-600 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-stone-950 text-white px-12 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;