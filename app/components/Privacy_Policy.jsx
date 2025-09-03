import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Database,
  Lock,
  Share2,
  Trash2,
  UserCheck,
  Globe,
} from "lucide-react";

import Link from "next/link";

const Privacy_Policy = () => {
  const sections = [
    {
      id: "collection",
      title: "Information We Collect",
      icon: Database,
      content:
        "We collect information you provide directly to us, such as when you create an account, join a njangi group, or contact us. This includes your name, email address, phone number, financial information, and transaction history. We also automatically collect certain information about your device and usage patterns.",
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: Eye,
      content:
        "We use your information to provide and improve our njangi services, process transactions, verify your identity, communicate with you about your account and groups, prevent fraud, and comply with legal obligations. Your data helps us create a secure and efficient platform for all users.",
    },
    {
      id: "sharing",
      title: "Information Sharing",
      icon: Share2,
      content:
        "We share your information only as necessary to provide our services. This includes sharing transaction details with your njangi group members, working with payment processors, and complying with legal requirements. We never sell your personal information to third parties for marketing purposes.",
    },
    {
      id: "security",
      title: "Data Security",
      icon: Lock,
      content:
        "We implement industry-standard security measures to protect your personal and financial information. This includes encryption, secure servers, regular security audits, and strict access controls. However, no method of transmission over the internet is 100% secure.",
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: Trash2,
      content:
        "We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and associated data, subject to certain legal and operational requirements.",
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      icon: UserCheck,
      content:
        "You have the right to access, update, or delete your personal information. You can also opt-out of certain communications and request a copy of your data. We provide tools within your account to manage these preferences and will respond to requests within a reasonable timeframe.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-16 h-10 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 right-32 w-12 h-8 bg-green-200/20 dark:bg-green-400/10 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-20 w-14 h-9 bg-blue-300/20 dark:bg-blue-500/10 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 right-64 w-10 h-6 bg-green-300/20 dark:bg-green-500/10 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-8 w-12 h-7 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-23 animate-float-delayed"></div>
        <div className="absolute top-40 left-16 w-18 h-12 bg-blue-200/20 dark:bg-blue-400/10 rounded transform -rotate-15 animate-float"></div>
        <div className="absolute bottom-40 left-40 w-16 h-10 bg-indigo-200/20 dark:bg-indigo-400/10 rounded transform rotate-30 animate-float-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center mr-4">
              <Shield className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how NJANGIFY
            collects, uses, and protects your personal information when you use
            our platform.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Our Commitment to Your Privacy
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
            At NJANGIFY, we understand that your personal and financial
            information is sensitive. We are committed to protecting your
            privacy and being transparent about how we collect, use, and share
            your information.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">
                Key Promise:
              </strong>
              We never sell your personal information to third parties and only
              use your data to provide and improve our njangi services.
            </p>
          </div>
        </motion.div>

        {/* Privacy Sections */}
        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:gap-12"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl dark:shadow-gray-800 hover:shadow-2xl dark:hover:shadow-gray-700 transition-shadow duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25 dark:shadow-gray-700 transition-shadow duration-300">
                      <Icon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Privacy Controls */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 rounded-2xl p-8 border border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <UserCheck className="text-green-600 dark:text-green-400 w-6 h-6 mr-3" />
              <h4 className="text-xl font-bold text-green-800 dark:text-green-200">
                Your Controls
              </h4>
            </div>
            <p className="text-green-700 dark:text-green-300 leading-relaxed mb-4">
              Access, update, or delete your personal information anytime
              through your account settings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <Lock className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-3" />
              <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                Data Protection
              </h4>
            </div>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed mb-4">
              Your data is encrypted and stored securely with industry-leading
              security measures.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-violet-100 dark:from-blue-900/20 dark:to-violet-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-4">
              <Share2 className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-3" />
              <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                Transparency
              </h4>
            </div>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed mb-4">
              We're transparent about what data we collect and how we use it for
              your njangi groups.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, our privacy team is here to help. You can
            also request a copy of your data or ask for it to be deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Contact Privacy Team
              </Link>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p className="mb-2">
            This Privacy Policy may be updated periodically. We will notify you
            of significant changes via email or through the platform.
          </p>
          <p>
            By continuing to use NJANGIFY, you acknowledge that you have read
            and understood this Privacy Policy.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Privacy_Policy;
