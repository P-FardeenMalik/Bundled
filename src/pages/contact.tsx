import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Twitter,
  MessageCircle,
  Instagram,
  Send
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "Get in touch via email for detailed inquiries",
    contact: "contact@bundled.finance",
    action: "mailto:contact@bundled.finance"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Chat with us on Telegram",
    contact: "@Mrdaniel91",
    action: "https://t.me/Mrdaniel91"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Office Hours",
    description: "Monday - Friday",
    contact: "9:00 AM - 6:00 PM EST",
    action: null
  }
];

const offices = [
  {
    city: "Canada",
    address: "3900 Grant Ave, Winnipeg, MB R3R 3C5",
    // zipcode: "New York, NY 10005",
    image: "/images/contact/canada.jpg"
  }
];

const faqs = [
  {
    question: "What types of crypto projects do you work with?",
    answer: "We work with all types of blockchain and Web3 projects including DeFi protocols, NFT marketplaces, Layer 1/2 blockchains, gaming DAOs, and traditional companies entering the crypto space."
  },
  {
    question: "How long does a typical marketing campaign take?",
    answer: "Campaign duration varies based on objectives. Quick launches can be executed in 2-4 weeks, while comprehensive growth strategies typically run 3-6 months for optimal results."
  },
  {
    question: "Do you handle regulatory compliance?",
    answer: "Yes, compliance is core to our approach. We work with legal partners across 15+ jurisdictions to ensure all marketing activities meet regulatory requirements."
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer flexible pricing including project-based fees, monthly retainers, and performance-based models. Pricing depends on scope, timeline, and specific requirements."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.project}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Message: ${formData.message}
    `.trim();

    // Open email client with form data
    window.location.href = `mailto:contact@bundled.finance?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Head>
        <title>Contact Us - Bundled</title>
        <meta name="description" content="Get in touch with Bundled's crypto marketing experts. Let's discuss how we can accelerate your Web3 project's growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          >
            {/* Badges */}
            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2 text-sm font-medium mb-8">
              Get in Touch
            </Badge>

            {/* Headers */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Ready to <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Connect</span>
              <br />Your Growth?
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Let's discuss how Bundled can help your crypto project reach new heights. Our team of experts is ready to craft a custom marketing strategy for your success.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://t.me/Mrdaniel91', '_blank')}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              {/* Section Headers */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Multiple Ways to <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Connect</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full group backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl text-yellow-400 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {method.description}
                      </p>
                      {method.action ? (
                        <a 
                          href={method.action}
                          className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                        >
                          {method.contact}
                        </a>
                      ) : (
                        <p className="text-yellow-400 font-semibold">{method.contact}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {/* Additional Badges */}
              <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 mb-6">
                Contact Methods
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Start the <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Conversation</span>
              </h2>
              <p className="text-xl text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-black/50 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-black/50 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-black/50 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Project Type
                        </label>
                        <select
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors px-3"
                        >
                          <option value="">Select project type</option>
                          <option value="defi">DeFi Protocol</option>
                          <option value="nft">NFT Marketplace</option>
                          <option value="blockchain">Layer 1/2 Blockchain</option>
                          <option value="gaming">Gaming/DAO</option>
                          <option value="exchange">Exchange</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors px-3"
                        >
                          <option value="">Select budget range</option>
                          <option value="10k-25k">$10K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k+">$250K+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors px-3"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1month">Within 1 month</option>
                          <option value="3months">Within 3 months</option>
                          <option value="6months">Within 6 months</option>
                          <option value="planning">Just planning</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-black/50 border-white/20 text-white min-h-[150px] rounded-xl focus:border-yellow-400 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium rounded-full w-full"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Global <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Presence</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {offices.map((office, index) => (
                <motion.div key={index} variants={fadeInUp} className="w-full max-w-md">
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={office.image}
                        alt={office.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {office.city}
                      </h3>
                      <div className="flex items-start space-x-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                          <p>{office.address}</p>
                          {/* <p>{office.zipcode}</p> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-6">
                FAQ
              </h3>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Questions</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-8 text-lg">
                Follow us on social media for the latest updates and insights:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://x.com/bundledhq"
                  className="flex items-center p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Twitter className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-300">@Bundledhq</span>
                  </div>
                </a>
                <a
                  href="https://t.me/Adelerivere"
                  className="flex items-center p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-300">Telegram</span>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/bundledhq"
                  className="flex items-center p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Instagram className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-300">Instagram</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 py-16 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Bundled Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Bundled
                </span>
              </div>
              <div className="text-gray-400">
                © 2025 Bundled. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}