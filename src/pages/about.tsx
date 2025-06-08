import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Target, 
  Globe, 
  BarChart3, 
  Users, 
  Award, 
  Rocket,
  TrendingUp,
  Shield
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

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Former Goldman Sachs analyst with 8+ years in crypto. Led marketing for 3 unicorn blockchain projects."
  },
  {
    name: "Sarah Williams",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Ex-Coinbase marketing director. Expert in regulatory compliance and institutional partnerships."
  },
  {
    name: "Michael Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer from Apple. Specialized in Web3 brand identity and user experience."
  },
  {
    name: "Emily Zhang",
    role: "Head of Partnerships",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Former Binance business development lead. Built relationships with 200+ VCs and exchanges."
  }
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation First",
    description: "We stay ahead of crypto trends and emerging technologies to deliver cutting-edge marketing solutions."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compliance Focus",
    description: "Every campaign is designed with regulatory compliance in mind, ensuring your project stays protected."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description: "We believe in building authentic, engaged communities that drive long-term project success."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data-Driven Results",
    description: "Our strategies are backed by comprehensive analytics and performance metrics."
  }
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started as a boutique crypto marketing consultancy with 3 team members."
  },
  {
    year: "2020",
    title: "First Major Success",
    description: "Helped DeFi protocol raise $50M Series A, establishing our reputation in the space."
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Opened offices in Singapore and London, serving clients across 15+ countries."
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Named 'Crypto Marketing Agency of the Year' by Blockchain Awards."
  },
  {
    year: "2023",
    title: "500+ Projects",
    description: "Reached milestone of 500 successful project launches with $2B+ raised."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered analytics platform for real-time campaign optimization."
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Bundled</title>
        <meta name="description" content="Learn about Bundled's mission to revolutionize crypto marketing. Meet our team and discover our journey in the Web3 space." />
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
          >              <Badge className="bg-transparent text-yellow-400 border-none mb-8">
                About Bundled
              </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Pioneering the Future of
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Crypto Marketing
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              We're not just another marketing agency. We're crypto natives who understand the unique challenges and opportunities in the Web3 space, helping projects build authentic communities and achieve sustainable growth.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Projects Launched" },
                { value: "$2B+", label: "Funds Raised" },
                { value: "10M+", label: "Community Members" },
                { value: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Badge className="bg-transparent text-yellow-400 border-none">
                  Our Mission
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Empowering Web3 <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Innovation</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our mission is to bridge the gap between groundbreaking blockchain technology and mainstream adoption. We believe that every revolutionary Web3 project deserves world-class marketing that respects both the technology and the community.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Founded by crypto veterans who've been in the space since 2017, we understand the nuances of blockchain marketing. From DeFi protocols to NFT marketplaces, from Layer 1 blockchains to gaming DAOs - we've helped them all achieve their growth objectives while maintaining authenticity and compliance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
              <Badge className="bg-transparent text-yellow-400 border-none mb-6">
                Our Values
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                What Drives <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Our Success</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full group backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl text-yellow-400 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="bg-transparent text-yellow-400 border-none mb-6">
                Our Team
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Meet the <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Experts</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our team combines deep crypto expertise with proven marketing excellence from top-tier companies.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 mx-auto w-[120px] h-[120px]"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
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
              <Badge className="bg-transparent text-yellow-400 border-none mb-6">
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Building the <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Future</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500"></div>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-12"
              >
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                          <p className="text-gray-300">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-black"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
                © 2025 Bundled. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}