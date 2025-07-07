// src/app/about/page.tsx
import React from 'react'
import Image from 'next/image'
import { Heart, Users, BookOpen, Award, Target, Eye } from 'lucide-react'

export const metadata = {
  title: 'About Us - Anita Methodist School',
  description: 'Learn about our mission, vision, and values at Anita Methodist School. Discover our commitment to Christian education and excellence.',
}

const StatCard = ({ icon: Icon, number, label }: { icon: React.ElementType, number: string, label: string }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg">
    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
)

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our School</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Nurturing young minds with Christian values and academic excellence since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide quality Christian education that nurtures the whole child - 
                spiritually, academically, socially, and physically. We are committed to 
                developing students who will become responsible citizens and leaders in their 
                communities while maintaining strong Christian values.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Core Beliefs</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Every child is wonderfully made by God</li>
                  <li>• Education should develop the whole person</li>
                  <li>• Character matters more than achievement</li>
                  <li>• Love and respect guide all relationships</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading Christian educational institution that produces graduates 
                who are academically excellent, morally upright, and spiritually grounded. 
                We envision a school community where faith, learning, and service come together 
                to transform lives and impact society.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Future Goals</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Expand our facilities and programs</li>
                  <li>• Strengthen community partnerships</li>
                  <li>• Enhance technology integration</li>
                  <li>• Develop global learning opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Anita Methodist School was founded with a simple yet profound vision: 
                  to create a learning environment where children could grow academically 
                  while being rooted in Christian values and principles.
                </p>
                <p>
                  Our journey began with a small group of dedicated educators who believed 
                  that education should do more than fill minds with knowledge – it should 
                  shape hearts and character. Today, we continue this legacy, adapting our 
                  methods while staying true to our core mission.
                </p>
                <p>
                  What sets us apart is our commitment to seeing each child as uniquely 
                  created by God, with their own gifts, talents, and potential. We strive 
                  to create an environment where every student can thrive and discover 
                  their God-given purpose.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <Image
                  src="/images/vision-mission.jpg"
                  alt="Our School Story"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard icon={Users} number="500+" label="Students" />
            <StatCard icon={BookOpen} number="50+" label="Teachers" />
            <StatCard icon={Award} number="15+" label="Years of Excellence" />
            <StatCard icon={Heart} number="100%" label="Commitment" />
          </div>
        </div>
      </section>

      {/* Values Deep Dive */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall – they're the principles that guide 
              every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Love</h3>
                  <p className="text-gray-600">
                    Love is the foundation of everything we do. We create a warm, 
                    nurturing environment where students feel valued, supported, and 
                    encouraged to reach their full potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fear of God</h3>
                  <p className="text-gray-600">
                    We instill in our students a reverence for God that leads to wisdom, 
                    humility, and a desire to live according to His principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We teach our students to choose what's right over what's easy, 
                    building character that will serve them throughout their lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We pursue excellence in all we do, not for worldly recognition, 
                    but as an offering to God and a testament to His glory.
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