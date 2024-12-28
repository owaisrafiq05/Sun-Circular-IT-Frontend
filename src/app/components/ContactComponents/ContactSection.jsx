'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaBuilding, FaFileAlt, FaIdCard, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState('contact')

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-16 px-4 md:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-[#db8f1b] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-orange-300 to-orange-600 text-white">
              <motion.div {...fadeInUp}>
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <ul className="space-y-6">
                  {[
                    { icon: FaEnvelope, text: 'info@suncircularit.com', href: 'mailto:info@suncircularit.com' },
                    { icon: FaPhoneAlt, text: '02034321143', href: 'tel:02034321143' },
                    { icon: FaLinkedin, text: 'LinkedIn', href: '#' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-white text-[#db8f1b] rounded-full">
                        <item.icon size={24} />
                      </div>
                      <a href={item.href} className="text-lg hover:underline transition-all">{item.text}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-8 flex justify-center space-x-4">
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'contact' 
                      ? 'bg-[#db8f1b] text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Contact Info
                </button>
                <button 
                  onClick={() => setActiveTab('company')}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'company' 
                      ? 'bg-[#db8f1b] text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Company Details
                </button>
              </div>

              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'contact' ? (
                  <ul className="space-y-6">
                    {[
                      { icon: FaBuilding, text: 'Sun Circular IT Solutions' },
                      { icon: FaMapMarkerAlt, text: '123 Tech Street, Digital City, 12345' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-4">
                        <div className="p-3 bg-orange-100 text-[#db8f1b] rounded-full">
                          <item.icon size={24} />
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-6">
                    {[
                      { icon: FaFileAlt, text: 'BTW-number: NL123456789B01' },
                      { icon: FaIdCard, text: 'KvK-number: 12345678' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-4">
                        <div className="p-3 bg-orange-100 text-[#db8f1b] rounded-full">
                          <item.icon size={24} />
                        </div>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            className="group py-3 px-6 bg-[#db8f1b] text-white rounded-full shadow-lg hover:bg-[#db8f1b] transition-all flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="group-hover:rotate-45 transition-transform" />
            <span>Contact Form</span>
          </motion.button>
          <motion.button 
            className="group py-3 px-6 bg-white border border-[#db8f1b] text-[#db8f1b] rounded-full shadow-lg hover:bg-white transition-all flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMapMarkerAlt className="group-hover:bounce transition-transform" />
            <span>Our Locations</span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

