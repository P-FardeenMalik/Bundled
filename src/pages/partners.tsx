import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building2, 
  TrendingUp,
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronRight
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

const partnerCategories = [
  {
    title: "KOLs & Influencers",
    description: "Access our exclusive network of verified crypto influencers and thought leaders across all major platforms.",
    icon: <Users className="w-16 h-16" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    href: "/partners/kols",
    stats: "500+ Verified KOLs",
    features: ["Twitter Influencers", "YouTube Creators", "Telegram Leaders", "Discord Communities"]
  },
  {
    title: "Exchanges",
    description: "Strategic partnerships with top-tier centralized and decentralized exchanges for optimal listing opportunities.",
    icon: <Building2 className="w-16 h-16" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    href: "/partners/exchanges",
    stats: "50+ Exchange Partners",
    features: ["Tier-1 CEX", "Major DEX", "Regional Exchanges", "Listing Support"]
  },
  {
    title: "Market Making Teams",
    description: "Professional market making services to ensure optimal liquidity and price stability for your token.",
    icon: <TrendingUp className="w-16 h-16" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    href: "/partners/mm-team",
    stats: "15+ MM Partners",
    features: ["Liquidity Provision", "Price Stability", "Volume Generation", "Spread Management"]
  }
];

export default function Partners() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Head>
        <title>Partners - Bundled Crypto Marketing Agency</title>
        <meta name="description" content="Explore our extensive network of KOLs, exchanges, and market making teams. Strategic partnerships that drive results for your crypto project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                      alt="Bundled Logo"
                      width={48}
                      height={48}
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20"></div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Bundled
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Home</Link>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Services</Link>
                <Link href="/partners" className="text-yellow-400 font-medium">Partners</Link>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">About</Link>
                <Link href="/#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Clients</Link>
                <Link href="/#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Home</Link>
                <Link href="/services" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Services</Link>
                <Link href="/partners" className="block text-yellow-400 font-medium">Partners</Link>
                <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">About</Link>
                <Link href="/#testimonials" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Clients</Link>
                <Link href="/#contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <motion.div 
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* <Badge className="bg-transparent text-yellow-400 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                Strategic Partnerships
              </Badge> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            >
              Our Partner
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Network
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto"
            >
              Access our extensive network of verified KOLs, top-tier exchanges, and professional market makers. 
              Strategic partnerships that drive real results for your crypto project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Explore Partnerships
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Partner Categories Section */}
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
              {/* <Badge className="bg-transparent text-yellow-400 border-yellow-400/30 mb-6">
                Partner Categories
              </Badge> */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Partnership</span> Type
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore our three main partnership categories, each offering specialized services 
                tailored to different aspects of your crypto marketing strategy.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {partnerCategories.map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={category.href}>
                    <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 h-full group backdrop-blur-sm cursor-pointer">
                      <CardContent className="p-8">
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 text-center">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed text-center">
                          {category.description}
                        </p>
                        <ul className="space-y-3 mb-6">
                          {category.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-400 justify-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-white/10 text-center">
                          <div className="text-xs text-yellow-400 font-medium bg-gradient-to-r from-yellow-400/10 to-orange-500/10 px-3 py-2 rounded-lg inline-block mb-4">
                            {category.stats}
                          </div>
                          <div className="flex items-center justify-center text-yellow-400 group-hover:text-white transition-colors duration-300">
                            <span className="font-medium">Explore Partners</span>
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 px-4 py-2 text-sm font-medium">
                Partnership Options
              </Badge> */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Build Something <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Amazing</span> Together
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join our network of successful crypto projects and leverage our partnerships 
                to accelerate your growth and reach new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/signup">
                  <Button 
                    size="lg" 
                    className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 py-16 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="flex items-center space-x-3 mb-6 md:mb-0">
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
              </Link>
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