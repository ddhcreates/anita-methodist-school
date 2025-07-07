// src/app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">044-25324525</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-4:30pm</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@anitamethodist.com</p>
              <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Chennai, Tamil Nadu</p>
              <p className="text-sm text-gray-500 mt-1">India</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon - Fri</p>
              <p className="text-sm text-gray-500 mt-1">9:00 AM - 4:30 PM</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="fees">Fees Information</option>
                    <option value="general">General Question</option>
                    <option value="tour">School Tour Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our School</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We invite you to visit our campus and experience the warm, 
                  nurturing environment we've created for our students. Schedule 
                  a tour to see our facilities, meet our teachers, and learn more 
                  about our programs.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">What to Expect During Your Visit</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Tour of our classrooms and facilities</li>
                    <li>• Meet with our admissions team</li>
                    <li>• Learn about our curriculum and programs</li>
                    <li>• Discuss enrollment process and requirements</li>
                    <li>• Q&A session with our staff</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-3 text-green-800">
                    <div>
                      <h4 className="font-medium">What grades do you offer?</h4>
                      <p className="text-sm">We offer education from nursery through high school.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">What is your admission process?</h4>
                      <p className="text-sm">Please visit our Admissions page for detailed information.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Do you offer financial aid?</h4>
                      <p className="text-sm">Yes, we have various scholarship programs available.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3">Emergency Contact</h3>
                  <p className="text-yellow-800 text-sm">
                    For urgent matters outside of school hours, please contact our 
                    emergency line or send an email marked as urgent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}