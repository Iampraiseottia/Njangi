"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  User,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@njangify.com",
      subContent: "We'll respond within 24 hours",
      gradient: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      hoverColor: "blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+237 674 417 261",
      subContent: "Mon-Fri 8AM-6PM WAT",
      gradient: "from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500",
      hoverColor: "yellow"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Limbe, South-West",
      subContent: "Cameroon",
      gradient: "from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600",
      hoverColor: "blue"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Support",
      subContent: "Always here for you",
      gradient: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
      hoverColor: "green"
    }
  ];

  return (
    <main className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-16 h-10 bg-blue-200/30 dark:bg-blue-400/20 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 right-32 w-12 h-8 bg-yellow-200/30 dark:bg-yellow-400/20 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-20 w-14 h-9 bg-blue-300/30 dark:bg-blue-500/20 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 right-64 w-10 h-6 bg-green-300/30 dark:bg-green-500/20 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-8 w-12 h-7 bg-blue-200/30 dark:bg-blue-400/20 rounded transform rotate-23 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-10 w-8 h-12 bg-yellow-300/20 dark:bg-yellow-500/15 rounded transform -rotate-45 animate-float-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-6"
          >
            -- GET IN TOUCH --
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about NJANGIFY? We're here to help! Reach out to us
            and let's discuss how we can boost your financial journey together.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Choose your preferred way to connect with us
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-${info.hoverColor}-400/25 dark:shadow-gray-700 transition-shadow duration-300`}>
                    <IconComponent className="text-white w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-${info.hoverColor}-600 dark:group-hover:text-${info.hoverColor}-400 transition-colors duration-300`}>
                      {info.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {info.subContent}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-800/50 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 dark:bg-blue-600 rounded-full opacity-10 dark:opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 dark:bg-yellow-500 rounded-full opacity-10 dark:opacity-20 animate-pulse-delayed"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <MessageCircle className="mr-3 text-blue-500 dark:text-blue-400" />
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <User className="inline w-4 h-4 mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <Mail className="inline w-4 h-4 mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-blue-400/25 dark:shadow-gray-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default Contact;
