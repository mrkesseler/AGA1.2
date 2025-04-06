import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  "Lead Capture & CRM Integration",
  "Customer Support & Chatbots",
  "Personalized Mass Email Outreach",
  "Phone Calling Services & Voicebots",
  "E-commerce Support",
  "Website Design & Optimization",
  "Not Sure"
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-xl">
            <h1 className="text-5xl font-bold mb-12 text-gradient glow-text">Get Started with AI Solutions</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-blue-300 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-blue-200/30"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-blue-300 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-blue-200/30"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-lg font-medium text-blue-300 mb-3">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-blue-200/30"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-lg font-medium text-blue-300 mb-3">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all text-white appearance-none"
                >
                  <option value="" className="bg-black text-blue-200/30">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="problem" className="block text-lg font-medium text-blue-300 mb-3">
                  What problem do you need solved? *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  value={formData.problem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-blue-200/30"
                  placeholder="Describe the challenge you're facing"
                />
              </div>

              <button
                type="submit"
                className="w-full cta-button group relative overflow-hidden mt-8"
              >
                <div className="cta-button-content relative z-10">
                  <span>Submit Request</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}