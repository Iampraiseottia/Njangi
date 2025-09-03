import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Users,
  CreditCard,
  AlertTriangle,
  Scale,
} from "lucide-react";

const Terms_Conditions = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content:
        "By accessing and using NJANGIFY, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.",
    },
    {
      id: "platform",
      title: "Platform Usage",
      icon: Users,
      content:
        "NJANGIFY is a digital platform that facilitates njangi groups. Users may create or join groups, make contributions, and receive payouts according to agreed schedules. All group activities are subject to verification by our administrators.",
    },
    {
      id: "financial",
      title: "Financial Obligations",
      icon: CreditCard,
      content:
        "Users are required to honor their financial commitments to their njangi groups. Failure to make timely contributions may result in penalties, removal from groups, potential account suspension, and face charges by law. All transactions are recorded and transparent to group members.",
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      content:
        "We implement robust security measures to protect your personal and financial information. However, users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.",
    },
    {
      id: "risks",
      title: "Risks & Disclaimers",
      icon: AlertTriangle,
      content:
        "Participation in njangi groups involves financial risks. While we facilitate the process, NJANGIFY does not guarantee the performance or reliability of individual group members. Users participate at their own risk and should carefully consider their financial capacity.",
    },
    {
      id: "legal",
      title: "Legal Compliance",
      icon: Scale,
      content:
        "Users must comply with all applicable local, state, national, and international laws and regulations. NJANGIFY reserves the right to terminate accounts that violate these terms or engage in fraudulent activities.",
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
        <div className="absolute top-10 left-10 w-16 h-10 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 left-32 w-12 h-8 bg-yellow-200/20 dark:bg-yellow-400/10 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-14 h-9 bg-blue-300/20 dark:bg-blue-500/10 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 left-64 w-10 h-6 bg-yellow-300/20 dark:bg-yellow-500/10 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-8 w-12 h-7 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-23 animate-float-delayed"></div>
        <div className="absolute top-40 right-16 w-18 h-12 bg-green-200/20 dark:bg-green-400/10 rounded transform -rotate-15 animate-float"></div>
        <div className="absolute bottom-40 right-40 w-16 h-10 bg-purple-200/20 dark:bg-purple-400/10 rounded transform rotate-30 animate-float-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using
            NJANGIFY. Your use of our service constitutes acceptance of these
            terms.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl dark:shadow-gray-800 mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center mr-4">
              <FileText className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Welcome to NJANGIFY
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            NJANGIFY is committed to providing a secure and transparent platform
            for njangi groups. These terms govern your use of our services and
            establish the rights and responsibilities of all parties involved.
            By using our platform, you agree to these terms and our commitment
            to facilitating your financial growth.
          </p>
        </motion.div>

        {/* Terms Sections */}
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25 dark:shadow-gray-700 transition-shadow duration-300">
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

        {/* Additional Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-yellow-600 dark:text-yellow-400 w-6 h-6 mr-3" />
              <h4 className="text-xl font-bold text-yellow-800 dark:text-yellow-200">
                Important Notice
              </h4>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
              Participation in njangi groups requires commitment and trust.
              Please ensure you understand the financial obligations before
              joining any group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 border border-green-200 dark:border-green-700">
            <div className="flex items-center mb-4">
              <Shield className="text-green-600 dark:text-green-400 w-6 h-6 mr-3" />
              <h4 className="text-xl font-bold text-green-800 dark:text-green-200">
                Your Security
              </h4>
            </div>
            <p className="text-green-700 dark:text-green-300 leading-relaxed">
              We use advanced encryption and security measures to protect your
              data and financial transactions on our platform.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed mb-6">
            If you have any questions about these Terms & Conditions, please
            don't hesitate to contact our support team. We're here to help you
            understand your rights and responsibilities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
          >
            Contact Support
          </motion.button>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>
            These terms are subject to change. Users will be notified of any
            significant updates via email or platform notifications.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Terms_Conditions;
