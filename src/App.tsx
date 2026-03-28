/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  QrCode, 
  Globe, 
  Cpu, 
  CreditCard, 
  Users, 
  LayoutDashboard, 
  MessageSquare, 
  Mail, 
  Phone, 
  Send,
  ChevronRight,
  Menu,
  X,
  Utensils
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-orange p-2 rounded-xl">
              <Utensils className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-brand-teal tracking-tight">RQdinn</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-dark hover:text-brand-orange font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal/90 transition-all shadow-lg shadow-brand-teal/20"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-teal/10 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-brand-dark hover:text-brand-orange font-medium py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-teal text-white px-6 py-3 rounded-xl font-semibold text-center"
          >
            Book a Demo
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold text-brand-teal mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-dark/70 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1.5 bg-brand-orange mx-auto mt-6 rounded-full" />
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cartoon-style background illustration placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Scene" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-6 py-2 bg-brand-orange rounded-full text-sm font-black mb-8 tracking-[0.2em] uppercase">
              WELCOME TO RQDINN
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8">
              Smart Digital Solutions for <br />
              <span className="text-brand-orange">Restaurants & Cafés</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-xl">
              Faster service, better experience, and higher revenue with our QR ordering system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact" 
                className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-brand-orange/40"
              >
                Book a Demo <ChevronRight size={24} strokeWidth={3} />
              </a>
              <a 
                href="#services" 
                className="bg-white/5 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all text-center"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements for "cartoon" feel */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                <QrCode className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold">QR Ordering</p>
                <p className="text-white/60 text-sm">Live Now</p>
              </div>
            </div>
            <div className="h-2 w-32 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-full bg-brand-orange"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-row gap-12 items-center">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading 
                title="About RQdinn" 
                subtitle="Transforming the dining experience through technology."
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-brand-teal/5 border border-brand-teal/5 relative"
              >
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">"</span>
                </div>
                <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed mb-8 italic">
                  "We are a team of passionate Artificial Intelligence and Data Science students dedicated to building smart and practical software solutions. Our team members — Azariah Vedakkan A, Bala Chandru S, and Asirvatha Arul Selvin A — share a strong interest in software and application development, with a focus on solving real-world business problems."
                </p>
                <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed">
                  "We believe that technology should not be complicated for businesses. Our approach is simple: we understand the client’s requirements clearly and transform them into efficient, user-friendly, and valuable digital solutions."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Services" 
            subtitle="Tailored software solutions for the modern food industry."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "QR-based Ordering System",
                desc: "Enable customers to browse menus and order directly from their tables using QR codes.",
                icon: <QrCode className="w-8 h-8" />,
                color: "bg-orange-100 text-brand-orange"
              },
              {
                title: "Web & App Development",
                desc: "Custom websites and mobile applications designed to showcase your brand and drive sales.",
                icon: <Globe className="w-8 h-8" />,
                color: "bg-teal-100 text-brand-teal"
              },
              {
                title: "Business Automation",
                desc: "Streamline your operations with automated workflows, from inventory to staff management.",
                icon: <Cpu className="w-8 h-8" />,
                color: "bg-blue-100 text-blue-600"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-brand-cream border border-brand-teal/5 shadow-xl shadow-brand-teal/5 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-teal">{service.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="features" className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Powerful Features" 
            subtitle="Everything you need to run a successful digital restaurant."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "QR Menu Ordering", icon: <QrCode />, desc: "Contactless ordering at every table." },
              { title: "Online Payments", icon: <CreditCard />, desc: "Secure and fast payment integrations." },
              { title: "Staff Management", icon: <Users />, desc: "Track orders and staff performance." },
              { title: "Real-time Dashboard", icon: <LayoutDashboard />, desc: "Monitor your business live." },
              { title: "Customer Feedback", icon: <MessageSquare />, desc: "Gather valuable insights directly." },
              { title: "Daily Email Reports", icon: <Mail />, desc: "Stay updated with automated summaries." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-brand-teal/5"
              >
                <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-brand-teal mb-1">{feature.title}</h4>
                  <p className="text-sm text-brand-dark/60">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The minds behind RQdinn's innovative solutions."
          />

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Azariah Vedakkan A", image: "/azariah.png" },
              { name: "Bala Chandru S", image: "/bala.png" },
              { name: "Asirvatha Arul Selvin A", image: "/selvin.jpg" }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-brand-orange rounded-full scale-95 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-2 bg-brand-cream rounded-full flex items-center justify-center overflow-hidden border-4 border-white">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      <Users size={64} className="text-brand-teal opacity-20" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-teal mb-2">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-24 bg-brand-teal text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full -ml-48 -mb-48 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Upgrade Your Restaurant?</h2>
          <p className="text-xl text-brand-cream/80 mb-12 leading-relaxed">
            Get in touch with us today for a free demo and consultation. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Mail className="text-brand-orange" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-cream/60 uppercase font-bold tracking-wider">Email Us</p>
                <p className="text-lg font-semibold">rqdinn@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Phone className="text-brand-orange" />
              </div>
              <div className="text-left">
                <p className="text-sm text-brand-cream/60 uppercase font-bold tracking-wider">Call Us</p>
                <p className="text-lg font-semibold">+91 9489648848</p>
              </div>
            </div>
          </div>

          <div>
            <a 
              href="https://wa.me/919489648848" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/20"
            >
              <MessageSquare fill="white" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-cream border-t border-brand-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-brand-orange p-1.5 rounded-lg">
              <Utensils className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-brand-teal">RQdinn</span>
          </div>
          <p className="text-brand-dark/50 text-sm">
            © {new Date().getFullYear()} RQdinn Agency. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-brand-dark/40 hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-dark/40 hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
