'use client';

import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { sendEmail } from '@/app/actions/sendEmail';

export default function ContactSection2() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile Number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await sendEmail(formData);

      if (response.ok) {
        toast.success('Form submitted successfully!');
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          mobile: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 min-h-screen flex items-center justify-center">
      <Toaster />
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#db8f1b] mb-12">
          How Can We Help You?
        </h2>

        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Do you have unused IT equipment to dispose of?</h3>
            <p className="mb-4">Interested in learning about our IT asset management or disposition services?</p>
            <p className="mb-4">Need a quote or consultation?</p>
            <p className="font-semibold">Let's connect! Use the contact form or give us a call, and a member of our team will get back to you promptly.</p>
            <p className="mt-6 font-bold text-[#db8f1b]">Sun Circular IT Solutions – Turning Old IT into New Opportunities!</p>
          </div>

          <div className="md:w-1/2 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter Your Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.companyName && <span className="text-red-500 text-xs">{errors.companyName}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Your Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Write a Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`py-2 px-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db8f1b]`}
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="py-3 px-6 bg-[#db8f1b] text-white rounded-lg shadow-lg hover:bg-[#c77d19] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}