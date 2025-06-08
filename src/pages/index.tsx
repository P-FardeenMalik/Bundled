import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Twitter,
  MessageCircle,
  Linkedin,
  Play,
  Globe,
  Target,
  Rocket,
  Award
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const services = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Tier-1 KOL & Influencer Marketing",
    description: "Access our exclusive network of 500+ verified crypto influencers and thought leaders. Our KOLs have collectively generated over $2B in project valuations.",
    features: ["Verified KOL Database", "Performance-Based Contracts", "Real-Time Analytics", "Multi-Platform Campaigns"],
    gradient: "from-purple-500/20 to-pink-500/20",
    metrics: "500+ KOLs • 50M+ Combined Reach"
  },
  {
    icon: <DollarSign className="w-12 h-12" />,
    title: "Strategic Fundraising & VC Connections",
    description: "Leverage our relationships with 200+ VCs, family offices, and institutional investors. Average funding secured: $15M per project.",
    features: ["VC Network Access", "Pitch Deck Development", "Due Diligence Preparation", "Tokenomics Consulting"],
    gradient: "from-green-500/20 to-emerald-500/20",
    metrics: "200+ VC Partners • $2B+ Raised"
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Community Building & Management",
    description: "Build authentic, engaged communities that drive long-term value. Our strategies have grown communities by 10x on average.",
    features: ["Community Strategy", "24/7 Moderation", "Engagement Programs", "Ambassador Networks"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    metrics: "10M+ Community Members Managed"
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Exchange Listings & Market Making",
    description: "Secure listings on Tier-1 exchanges through our established relationships. 98% success rate for qualified projects.",
    features: ["Exchange Partnerships", "Listing Preparation", "Market Making Services", "Liquidity Solutions"],
    gradient: "from-orange-500/20 to-red-500/20",
    metrics: "50+ Exchange Partners • 98% Success Rate"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Performance Marketing & Growth",
    description: "Data-driven marketing campaigns that deliver measurable ROI. Average 300% increase in qualified leads within 90 days.",
    features: ["Paid Advertising", "SEO & Content", "Conversion Optimization", "Attribution Tracking"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    metrics: "300% Avg. Lead Increase • 4.2x ROI"
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Compliance & Risk Management",
    description: "Navigate regulatory requirements with confidence. Our legal partners ensure your marketing stays compliant across all jurisdictions.",
    features: ["Legal Compliance", "Risk Assessment", "Regulatory Guidance", "Documentation Support"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    metrics: "100% Compliance Record • 15+ Jurisdictions"
  }
];

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    company: "Nexus DeFi Protocol",
    content: "Bundled's strategic approach was instrumental in our $12M Series A. Their KOL network delivered 2.5M impressions and helped us secure listings on 3 Tier-1 exchanges. The ROI was exceptional - 450% increase in qualified leads within 60 days.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    metrics: "$12M Raised • 3 Exchange Listings"
  },
  {
    name: "Sarah Williams",
    role: "Chief Marketing Officer",
    company: "Quantum NFT Marketplace",
    content: "Working with Bundled transformed our go-to-market strategy. Their compliance expertise ensured we launched in 8 jurisdictions without issues, while their influencer campaigns generated $2.8M in trading volume in our first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    metrics: "$2.8M Trading Volume • 8 Jurisdictions"
  },
  {
    name: "Michael Rodriguez",
    role: "Co-Founder",
    company: "Apex Gaming DAO",
    content: "Bundled's community building expertise is unmatched. They grew our Discord from 500 to 75K members and helped us achieve a successful $8M token launch with 98% community approval. Their strategic guidance was invaluable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    metrics: "75K Community • $8M Token Launch"
  }
];

const stats = [
  { value: "500+", label: "Projects Launched", icon: <Rocket className="w-6 h-6" /> },
  { value: "$2B+", label: "Funds Raised", icon: <DollarSign className="w-6 h-6" /> },
  { value: "10M+", label: "Community Members", icon: <Users className="w-6 h-6" /> },
  { value: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>Bundled - Next-Generation Crypto Marketing Agency</title>
        <meta name="description" content="Accelerate your blockchain project's growth with Bundled's expert crypto marketing services. Influencer marketing, fundraising, community growth, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          >


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            >
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Web3 Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto"
            >
              The premier crypto marketing agency trusted by 500+ blockchain projects. We deliver measurable results through strategic KOL partnerships, institutional fundraising, and compliant growth strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button 
                size="lg" 
                className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10 bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-medium"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Case Studies
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 lg:px-8 relative">
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
                Comprehensive <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Crypto Marketing</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From influencer partnerships to exchange listings, we provide end-to-end marketing 
                services tailored for the Web3 ecosystem.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/30 border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full group backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs text-yellow-400 font-medium bg-gradient-to-r from-yellow-400/10 to-orange-500/10 px-3 py-2 rounded-lg">
                          {service.metrics}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop&crop=center"
                    alt="Team collaboration"
                    width={600}
                    height={500}
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">5+</div>
                      <div className="text-xs text-black">Years</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Pioneering the Future of <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Crypto Marketing</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At Bundled, we understand the unique challenges facing blockchain and Web3 projects. 
                  Our team of crypto marketing experts combines deep industry knowledge with proven 
                  strategies to help your project stand out in the competitive crypto landscape.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Industry Expertise",
                      description: "Deep understanding of crypto markets and regulations",
                      icon: <Target className="w-6 h-6" />
                    },
                    {
                      title: "Proven Network",
                      description: "Established relationships with top KOLs and investors",
                      icon: <Globe className="w-6 h-6" />
                    },
                    {
                      title: "Data-Driven Results",
                      description: "Strategic approach backed by analytics and performance metrics",
                      icon: <BarChart3 className="w-6 h-6" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-32 px-6 lg:px-8 relative">
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
                Trusted by <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Leading</span> Crypto Projects
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="bg-gray-900/30 border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                          <div className="text-gray-400">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs text-green-400 font-medium bg-gradient-to-r from-green-400/10 to-emerald-500/10 px-3 py-2 rounded-lg">
                          {testimonial.metrics}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Accelerate</span> Your Growth?
              </h2>
              <p className="text-xl text-gray-300">
                Let's discuss how Bundled can help your crypto project reach new heights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/30 border-white/10 backdrop-blur-sm">
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
                          className="bg-black/30 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors backdrop-blur-sm"
                          placeholder="Your name"
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
                          className="bg-black/30 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors backdrop-blur-sm"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Project Name
                      </label>
                      <Input
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="bg-black/30 border-white/20 text-white h-12 rounded-xl focus:border-yellow-400 transition-colors backdrop-blur-sm"
                        placeholder="Your project name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-black/30 border-white/20 text-white min-h-[150px] rounded-xl focus:border-yellow-400 transition-colors resize-none backdrop-blur-sm"
                        placeholder="Tell us about your project and marketing goals..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium h-14 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-300 mb-8 text-lg">
                Prefer to reach out directly? Contact us on your preferred platform:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-300 group justify-center sm:justify-start"
                >
                  <div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base break-all">@BundledAgency</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-300 group justify-center sm:justify-start"
                >
                  <div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Telegram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-300 group justify-center sm:justify-start"
                >
                  <div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">LinkedIn</span>
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
                <div className="relative">
                  <Image
                    src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                    alt="Bundled Logo"
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Bundled
                </span>
              </div>
              <div className="text-gray-400">
                © 2024 Bundled. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}