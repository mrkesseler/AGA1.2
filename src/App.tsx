import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bot, Zap, Target, ArrowRight, Phone, Network, Globe, Rocket, MessageSquare, Mail, ShoppingCart, Users } from 'lucide-react';
import { CTAButton } from './components/CTAButton';
import { Contact } from './pages/Contact';
import { Layout } from './components/Layout';

function HomePage() {
  const emailAddress = "automatedgrowthapplications@gmail.com";
  
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg blur opacity-25 animate-pulse-slow"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="text-sm font-medium text-sky-400">Automated Growth Applications</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight glow-text">
                <span className="animate-float inline-block">Transform Your</span>
                <br />
                <span className="animate-float inline-block" style={{ animationDelay: '0.2s' }}>Business with</span>
                <br />
                <span className="text-gradient animate-float" style={{ animationDelay: '0.4s' }}>
                  Intelligent AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mb-8 animate-float" style={{ animationDelay: '0.6s' }}>
                Automate operations, reduce costs by 40%, and scale your business 24/7 with our enterprise-grade AI solutions.
              </p>
              <CTAButton 
                href="/contact"
                className="animate-float"
                style={{ animationDelay: '0.8s' }}
              >
                Connect With Us
              </CTAButton>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-sky-500/20 bg-gradient-to-br from-black to-slate-900">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
                alt="AI visualization"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-gradient glow-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:glow card-hover">
              <Users className="w-12 h-12 mb-6 text-blue-500 animate-float" />
              <h3 className="text-xl font-semibold mb-4 text-blue-100">Lead Capture & CRM Integration</h3>
              <p className="text-blue-200/70">Unlock seamless lead capture and automated CRM integration to streamline customer management, boost conversion rates, and maximize your sales opportunities.</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:glow card-hover">
              <MessageSquare className="w-12 h-12 mb-6 text-purple-500 animate-float" style={{ animationDelay: '0.2s' }} />
              <h3 className="text-xl font-semibold mb-4 text-purple-100">Customer Support & Chatbots</h3>
              <p className="text-purple-200/70">Enhance customer satisfaction and reduce response times with AI-driven chatbots, providing instant support and personalized experiences around the clock.</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-500 hover:glow card-hover">
              <Mail className="w-12 h-12 mb-6 text-cyan-500 animate-float" style={{ animationDelay: '0.4s' }} />
              <h3 className="text-xl font-semibold mb-4 text-cyan-100">Personalized Mass Email Outreach</h3>
              <p className="text-cyan-200/70">Automate cold and warm email outreach with personalized, targeted campaigns that increase engagement, nurture leads, and drive higher sales.</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-500 hover:glow card-hover">
              <Phone className="w-12 h-12 mb-6 text-indigo-500 animate-float" style={{ animationDelay: '0.6s' }} />
              <h3 className="text-xl font-semibold mb-4 text-indigo-100">Phone Calling Services & Voicebots</h3>
              <p className="text-indigo-200/70">Boost productivity and save time with AI-powered phone calling services and voicebots, engaging customers efficiently while reducing operational costs.</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:glow card-hover">
              <ShoppingCart className="w-12 h-12 mb-6 text-blue-500 animate-float" />
              <h3 className="text-xl font-semibold mb-4 text-blue-100">E-commerce Support</h3>
              <p className="text-blue-200/70">Transform your e-commerce operations with automated inventory management, order processing, and customer service tools, ensuring seamless scalability and higher profits.</p>
            </div>
            
            <div className="group bg-black/40 backdrop-blur-sm p-12 rounded-2xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:glow card-hover">
              <Globe className="w-12 h-12 mb-6 text-purple-500 animate-float" style={{ animationDelay: '0.2s' }} />
              <h3 className="text-xl font-semibold mb-4 text-purple-100">Website Design & Optimization</h3>
              <p className="text-purple-200/70">Build a stunning, user-friendly website that converts visitors into customers, while optimizing performance to enhance SEO, speed, and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-gradient glow-text text-center">Why AI Is the Key to Scaling Your Business Effectively</h2>
            <p className="text-xl text-blue-100/80 mb-8">
              AI is the ultimate tool for businesses looking to scale quickly and efficiently. It works 24/7, handling repetitive tasks like customer service and order processing with 100% consistency and zero errors. With Automated Growth Applications, we tailor AI systems to fit your unique business needs, integrating seamlessly into your existing processes.
            </p>
            <p className="text-xl text-blue-100/80 mb-8">
              AI reduces overhead, improves profitability, and provides real-time insights that help you make smarter decisions. By automating routine tasks, AI allows your team to focus on strategic growth while enhancing the overall effectiveness of your operations.
            </p>
            <p className="text-xl text-blue-100/80">
              It streamlines processes, boosts efficiency, and ensures your business is running smoothly at all times. Partner with Automated Growth Applications to implement AI that maximizes your company's potential, accelerates growth, and creates long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Rocket className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Start Growing Today</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-gradient glow-text">Ready to Transform Your Business?</h2>
              <div className="flex flex-col items-center gap-8 mb-12">
                <p className="text-xl text-blue-100/80 max-w-2xl">
                  Join businesses already using our AI solutions to automate operations and drive growth.
                </p>
                <div className="flex items-center gap-8 text-2xl font-bold">
                  <div>
                    <span className="text-gradient">40%</span>
                    <p className="text-sm text-blue-100/60 font-normal">Cost Reduction</p>
                  </div>
                  <div className="h-12 w-px bg-blue-900/30"></div>
                  <div>
                    <span className="text-gradient">24/7</span>
                    <p className="text-sm text-blue-100/60 font-normal">Operation</p>
                  </div>
                  <div className="h-12 w-px bg-blue-900/30"></div>
                  <div>
                    <span className="text-gradient">99.9%</span>
                    <p className="text-sm text-blue-100/60 font-normal">Accuracy</p>
                  </div>
                </div>
              </div>
              <CTAButton 
                href="/contact"
                className="sticky bottom-4 sm:static"
              >
                Connect With Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-900/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-500/50">© {new Date().getFullYear()} Automated Growth Applications. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;