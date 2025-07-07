// src/app/admissions/page.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, FileText, Users, CheckCircle, AlertCircle, Clock } from 'lucide-react'

export const metadata = {
  title: 'Admissions - Anita Methodist School',
  description: 'Learn about our admission process, requirements, and how to apply to Anita Methodist School.',
}

const StepCard = ({ 
  step, 
  title, 
  description, 
  icon: Icon 
}: { 
  step: number
  title: string
  description: string
  icon: React.ElementType
}) => (
  <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
        {step}
      </div>
      <Icon className="w-8 h-8 text-blue-600 ml-4" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function Admissions() {
  return (
    <div>
      {/* your component content */}
    </div>
  );
}