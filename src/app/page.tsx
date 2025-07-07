// src/app/page.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Shield, Eye, Star, Phone, Mail, MapPin } from 'lucide-react'

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image 
}: {
  icon: React.ElementType
  title: string
  description: string
  image: string
}) => (
  <div className="card group hover:scale-105 transition-transform duration-300">
    <div className="relative h-64 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center mb-2">
          <Icon className="w-6 h-6 mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function Home() {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "In all things, big and small, we are fuelled by love for one another. We love our children. We love our staff. And we're in love with a big God.",
      image: "/images/children-1.jpg"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We chase the courage to do the right thing and not the easy thing. We learn and teach our children to pick integrity over success.",
      image: "/images/children-2.jpg"
    },
    {
      icon: Eye,
      title: "Fear of God",
      description: "We seek to nurse in our children and staff the fear of the Lord which prompts obedience. Solely that is the beginning of our wisdom and good understanding.",
      image: "/images/children-3.jpg"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Our daily intent is to work with all our hearts – work that will produce excellence for the Lord, even if not for the world.",
      image: "/images/children-4.jpg"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-sports-week.jpg"
            alt="Anita Methodist School Students"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg fade-in">
            Welcome to<br />
            <span className="text-gradient">Anita Methodist School</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow slide-in-left">
            A school built around children, teaching them they are wonderfully made
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
            <Link href="/admissions" className="btn-primary text-lg px-8 py-4">
              Apply Now
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-gradient mb-4">Celebrating Children</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a school that is built around children. We recognize and teach them 
                that they are each wonderfully made, each the child of the one true King.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-600">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Love-Centered</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Character Building</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Excellence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <Image
                  src="/images/vision-mission.jpg"
                  alt="Vision and Mission"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do at Anita Methodist School, 
              shaping not just our curriculum but our entire approach to education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                image={value.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to join our school family? We'd love to hear from you and 
              answer any questions you might have.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">044-25324525</p>
              <p className="text-blue-100 text-sm mt-1">Mon-Fri, 9am-4:30pm</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@anitamethodist.com</p>
              <p className="text-blue-100 text-sm mt-1">We reply within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Chennai, Tamil Nadu</p>
              <p className="text-blue-100 text-sm mt-1">Schedule a tour</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}