/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import myPicture from "./asserts/pic.jpg";
import work1 from "./asserts/1.png";
import work2 from "./asserts/2.png";
import work3 from "./asserts/3.png";
import work4 from "./asserts/4.png";
import work5 from "./asserts/5.png";
import { 
  Mail, 
  Linkedin, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Menu, 
  X, 
  Award, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Search,
  FileSpreadsheet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  upworkGreen: '#1cbf73',
  upworkGreenDark: '#14a865',
  upworkGreenStrong: '#0f8c60',
  upworkGreenSoft: '#ecf9f4',
};


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Lead Generation, Data Research & Enrichment",
      description: "Deliverables: 1000+ verified Realtor/Developer leads with email + phone, segmented by city, property type, and investment budget.",
      timeline: "5 business days for first batch, ongoing refresh every 7 days.",
      icon: <Target className="w-6 h-6 text-[#1cbf73]" />
    },
    {
      title: "SaaS B2B Lead Generation",
      description: "Deliverables: 1000 decision-maker contacts from target SaaS verticals with verified emails and direct lines.",
      timeline: "6 business days per request, includes tech stack and ARR qualification.",
      icon: <Zap className="w-6 h-6 text-[#1cbf73]" />
    },
    {
      title: "Python Data Scraping",
      description: "Deliverables: Raw and curated lists from target websites/portals; includes email + phone validation and duplicate cleanup.",
      timeline: "4 business days for 1000 contacts, includes data delivery as CSV/Google Sheet.",
      icon: <Search className="w-6 h-6 text-[#1cbf73]" />
    },
    {
      title: "Email Marketing",
      description: "Deliverables: Custom 5-step email sequence + 250 verified email addresses to start campaign.",
      timeline: "Setup and draft in 2 business days, ongoing campaign optimization included.",
      icon: <Mail className="w-6 h-6 text-[#1cbf73]" />
    },
    {
      title: "Prospect Research",
      description: "Deliverables: Comprehensive 500-depth prospect list with verified email, phone, LinkedIn URL, and role fit.",
      timeline: "4 business days per project; refresh and re-qualification available.",
      icon: <BarChart3 className="w-6 h-6 text-[#1cbf73]" />
    },
    {
      title: "Influencers Research",
      description: "Deliverables: 200 influencer prospects with verified contact methods, engagement stats, and campaign fit notes.",
      timeline: "5 business days for core list; expansion packs available per niche.",
      icon: <Users className="w-6 h-6 text-[#1cbf73]" />
    }
  ];

  const recentWorks = [
    {
      id: "01",
      title: "Amazon Seller Lead Flow",
      description: " Built a segmented lead list for a client targeting Amazon sellers, resulting in 15000+ qualified leads and a 12% conversion rate from outreach to meetings.",
      points: [
        "Scarped top Amazon seller directories and forums",
        "Verified contact information and business details",
        "Automated outreach with 5-step nurture campaign "
      ],
      sheetUrl: "https://docs.google.com/spreadsheets/d/1avivprH8oF8WiIFI-SWFPwHEhmmGQRnU6TddvpzMIHI/edit?usp=sharing",
      imageUrl: work1,
    },
    {
      id: "02",
      title: "Data Research & Entry bangkok.freeholdhaven.com 2years+",
      description: "Reserched and compiled a comprehensive lead list of 500+ real estate investors and developers in Bangkok, including contact details, investment preferences, and recent activity.",
      points: [
        "reserched 500+ real estate investors and developers in Bangkok",
        "Data point images, descriptions,location, developer details, and contact information",
        "worked on this project for 2 years and updated the sheet every month with new data and removed the old data"
      ],
      sheetUrl: "https://bangkok.freeholdhaven.com/",
      imageUrl: work2,
    },
    {
      id: "03",
      title: "Influencer Lead Research",
      description: "Curated influencer list for a brand partnership campaign, including social handles, engagement metrics, and contact reach-out details.",
      points: [
        "Dataset of 1,000+ niche influencers",
        "Detailed engagement and audience overlap analysis",
        "Ready-to-launch outreach contact sheet"
      ],
      sheetUrl: "#",
      imageUrl: work3,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1cbf73] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LM</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">Lead Master</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-semibold hover:text-[#1cbf73] transition-colors">Services</a>
            <a href="#my-work" className="text-sm font-semibold hover:text-[#1cbf73] transition-colors">Recent Works</a>
            <a href="#about" className="text-sm font-semibold hover:text-[#1cbf73] transition-colors">About</a>
            <a href="#contact" className="bg-[#1cbf73] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#14a865] transition-all shadow-md shadow-[#1cbf73]/20">
              Get Free Sample
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold py-2">Services</a>
                <a href="#my-work" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold py-2">Recent Works</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold py-2">About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#1cbf73] text-white px-6 py-3 rounded-xl text-center font-bold">
                  Get Free Sample
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e4f9f1] via-[#c4f0d9] to-[#1dbb72] opacity-40 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-[#1cbf73]/20 rounded-full text-[#0f8c60] text-sm font-bold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1cbf73] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1cbf73]"></span>
              </span>
              Available for New Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 leading-[1.1] mb-6">
              B2B Lead Generation That <span className="text-[#1cbf73]">Delivers</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Hi, I'm Danish Ali. I convert precision data and outreach automation into a steady pipeline of qualified leads for growth teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a href="#contact" className="bg-[#1cbf73] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#14a865] transition-all shadow-xl shadow-[#1cbf73]/20 flex items-center justify-center gap-2">
                Get a Free Sample List <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                View My Process
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
                <p className="text-3xl font-extrabold text-[#1cbf73]">99%</p>
                <p className="text-sm text-slate-500 font-medium">Verified Deliverability</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
                <p className="text-3xl font-extrabold text-[#1cbf73]">120+</p>
                <p className="text-sm text-slate-500 font-medium">Meetings Booked</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src={myPicture}
                alt="Danish Ali" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1cbf73] rounded-full flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Top Growth Partner 2025</p>
                    <p className="text-xs text-slate-500">Global B2B Network</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Specialized Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Precision-targeted lead generation strategies designed for high-growth industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#1cbf73]/30 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-sm font-semibold text-[#0f8c60]">{service.timeline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works Section - THE FOCUS */}
      <section id="my-work" className="py-24 bg-[#ecf9f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Recent Success Stories</h2>
              <p className="text-slate-600 max-w-xl">
                Real results from real campaigns. Explore the live data sheets to see the quality and depth of my research.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#1cbf73]/20 text-sm font-bold text-[#1cbf73]">
              <FileSpreadsheet className="w-4 h-4" /> Live Data Enabled
            </div>
          </div>

          <div className="space-y-12">
            {recentWorks.map((work, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="text-6xl font-black text-[#1cbf73]/20 mb-4">{work.id}</div>
                  <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    {work.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {work.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-[#1cbf73] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={work.sheetUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#1cbf73] border-2 border-[#1cbf73] px-6 py-3 rounded-xl font-bold hover:bg-[#1cbf73] hover:text-white transition-all shadow-lg shadow-[#1cbf73]/10"
                    >
                      <FileSpreadsheet className="w-5 h-5" />
                      View Live Data Sheet
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title} 
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <p className="text-white font-bold text-lg">Case Study: {work.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1cbf73] opacity-10 blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1cbf73] opacity-10 blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-8">About Danish Ali</h2>
                <div className="space-y-6 text-slate-300 text-lg">
                  <p>
                    With a Bachelor of Science in IT (CGPA 3.27) and a passion for data-driven growth, I've built a reputation for delivering high-quality B2B leads that actually convert.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                      </div>
                      <span>BS IT Graduate 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                      </div>
                      <span>CM Laptop Awardee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                      </div>
                      <span>Top Growth Partner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                      </div>
                      <span>SaaS Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img src={work4} alt="Award" className="rounded-2xl w-full aspect-square object-cover border border-white/10" referrerPolicy="no-referrer" />
                <img src={work5} alt="Work" className="rounded-2xl w-full aspect-square object-cover border border-white/10" referrerPolicy="no-referrer" />
                <div className="col-span-2 bg-[#1cbf73] p-6 rounded-2xl">
                  <p className="text-white font-bold text-xl mb-2">"Danish's approach to lead research is surgical. He doesn't just find emails; he finds opportunities."</p>
                  <p className="text-white/80 text-sm">— Growth Lead @ SaaS Scaleup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 mb-12 text-lg">High-quality data shouldn't be a mystery. Scale your outreach with confidence.</p>
          
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1cbf73] text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
              Most Popular
            </div>
            <div className="text-6xl font-black text-slate-900 mb-2">$50</div>
            <p className="text-xl font-bold text-[#1cbf73] mb-8">per 1000 verified emails</p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                <span className="text-slate-600">100% Accuracy Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                <span className="text-slate-600">Verified Direct Lines</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                <span className="text-slate-600">Custom Segmentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1cbf73]" />
                <span className="text-slate-600">CRM-Ready CSV/Sheets</span>
              </div>
            </div>
            
            <a href="#contact" className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all">
              Order Your Sample List
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1cbf73]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Scale Your Sales?</h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Stop wasting time on bad data. Let's discuss your ideal customer profile and build a system that generates meetings on autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:danish@danishleadmaster.online" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#1cbf73] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl">
              <Mail className="w-6 h-6" /> danish@danishleadmaster.online
            </a>
            <a href="tel:+923269369916" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl">
              <Phone className="w-6 h-6" /> +92 326 936 9916
            </a>
          </div>
          
          <div className="mt-16 flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/danish-ali-b21127390/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-500 text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#1cbf73] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">LM</span>
              </div>
              <span className="text-white font-bold">Lead Master</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#my-work" className="hover:text-white transition-colors">Works</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <p className="text-sm">© 2026 Danish Ali — B2B Lead Generation Specialist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
