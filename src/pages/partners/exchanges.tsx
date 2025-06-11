import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronLeft,
  Crown,
  Award,
  TrendingUp,
  Globe,
  Zap,
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

const tier1Exchanges = [
  {
    name: "Bybit",
    url: "https://www.bybit.com",
    type: "CEX",
    volume: "$8.2B",
    users: "30M+",
    specialty: "Derivatives & Spot",
    description: "Top-tier centralized exchange with highest trust, liquidity, and global user base.",
    logo: "/images/exchanges/bybit.png",
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Gate.io",
    url: "https://www.gate.io",
    type: "CEX",
    volume: "$2.1B",
    users: "13M+",
    specialty: "Altcoins & Innovation",
    description: "Leading exchange with extensive altcoin selection and innovative trading features.",
    logo: "/images/exchanges/gateio.png",
    verified: true,
    tier: "Tier 1"
  }
];

const tier2Exchanges = [
  {
    name: "MEXC",
    url: "https://www.mexc.com",
    type: "CEX",
    volume: "$1.2B",
    users: "10M+",
    specialty: "New Listings",
    description: "Mid-size CEX with solid reputation, lower listing requirements, often good for meme coins or new launches.",
    logo: "/images/exchanges/mexc.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Bitget",
    url: "https://www.bitget.com",
    type: "CEX",
    volume: "$900M",
    users: "25M+",
    specialty: "Copy Trading",
    description: "Popular exchange known for copy trading features and competitive futures trading.",
    logo: "/images/exchanges/bitget.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "LBank",
    url: "https://www.lbank.com",
    type: "CEX",
    volume: "$250M",
    users: "7M+",
    specialty: "Asian Markets",
    description: "Established exchange with strong presence in Asian markets and diverse trading pairs.",
    logo: "/images/exchanges/lbank.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "BitMart",
    url: "https://www.bitmart.com",
    type: "CEX",
    volume: "$300M",
    users: "9M+",
    specialty: "Emerging Projects",
    description: "Growing exchange focused on emerging projects and new token listings.",
    logo: "/images/exchanges/bitmart.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "ProBit Global",
    url: "https://www.probit.com",
    type: "CEX",
    volume: "$150M",
    users: "3M+",
    specialty: "IEO Platform",
    description: "Korean-based exchange with strong IEO platform and diverse cryptocurrency offerings.",
    logo: "/images/exchanges/probit.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Coinstore",
    url: "https://www.coinstore.com",
    type: "CEX",
    volume: "$120M",
    users: "2M+",
    specialty: "New Projects",
    description: "Fast-growing exchange with focus on new and innovative blockchain projects.",
    logo: "/images/exchanges/coinstore.png",
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "XT.COM",
    url: "https://www.xt.com",
    type: "CEX",
    volume: "$180M",
    users: "6M+",
    specialty: "Global Trading",
    description: "International exchange with comprehensive trading services and global reach.",
    logo: "/images/exchanges/xt.png",
    verified: true,
    tier: "Tier 2"
  }
];

const tier3Exchanges = [
  {
    name: "DigiFinex",
    url: "https://www.digifinex.com",
    type: "CEX",
    volume: "$80M",
    users: "4M+",
    specialty: "Early-stage Projects",
    description: "Emerging exchange focusing on early-stage, meme coins, or IEOs with very low barriers to entry.",
    logo: "/images/exchanges/digifinex.png",
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "P2B",
    url: "https://www.p2pb2b.com",
    type: "CEX",
    volume: "$45M",
    users: "2M+",
    specialty: "P2P Trading",
    description: "Exchange specializing in peer-to-peer trading with focus on emerging cryptocurrencies.",
    logo: "/images/exchanges/p2b.png",
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Coinsbit",
    url: "https://www.coinsbit.io",
    type: "CEX",
    volume: "$35M",
    users: "1.5M+",
    specialty: "New Token Listings",
    description: "Growing exchange with easy listing process for new and emerging cryptocurrency projects.",
    logo: "/images/exchanges/coinsbit.png",
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Azbit",
    url: "https://www.azbit.com",
    type: "CEX",
    volume: "$25M",
    users: "800K+",
    specialty: "European Markets",
    description: "European-focused exchange with competitive trading fees and emerging project support.",
    logo: "/images/exchanges/azbit.png",
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Latoken",
    url: "https://www.latoken.com",
    type: "CEX",
    volume: "$40M",
    users: "1.2M+",
    specialty: "IEO & Startups",
    description: "Exchange focused on blockchain startups and initial exchange offerings (IEOs).",
    logo: "/images/exchanges/latoken.png",
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Vindax",
    url: "https://www.vindax.com",
    type: "CEX",
    volume: "$20M",
    users: "500K+",
    specialty: "Low-cap Gems",
    description: "Smaller exchange specializing in low-cap cryptocurrencies and emerging projects.",
    logo: "/images/exchanges/vindax.png",
    verified: true,
    tier: "Tier 3"
  }
];

const tierInfo = {
  tier1: {
    title: "Tier 1 Exchanges",
    description: "Top-tier exchanges with massive liquidity and global recognition",
    icon: <Crown className="w-8 h-8" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    minVolume: "$1B+",
    avgFees: "$50K - $500K",
    timeline: "3-6 months",
    features: ["Maximum Exposure", "Institutional Grade", "Global Reach", "Premium Support"]
  },
  tier2: {
    title: "Tier 2 Exchanges",
    description: "Established exchanges with strong liquidity and regional presence",
    icon: <Award className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-purple-500/20",
    minVolume: "$100M+",
    avgFees: "$15K - $100K",
    timeline: "1-3 months",
    features: ["Strong Liquidity", "Regional Focus", "Competitive Fees", "Fast Listing"]
  },
  tier3: {
    title: "Tier 3 Exchanges",
    description: "Growing exchanges with good liquidity and emerging market focus",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    minVolume: "$10M+",
    avgFees: "$5K - $25K",
    timeline: "2-6 weeks",
    features: ["Cost Effective", "Quick Listing", "Emerging Markets", "Flexible Terms"]
  }
};

export default function Exchanges() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderExchangeGrid = (exchanges: any[]) => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {exchanges.map((exchange, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="bg-gray-900/50 border-white/10 hover:border-blue-400/30 transition-all duration-500 group backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5">
                    <Image
                      src={exchange.logo}
                      alt={`${exchange.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
                  </div>
                  {exchange.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <Badge className="text-xs bg-transparent text-blue-400 border-blue-400/30">
                  {exchange.tier}
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {exchange.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{exchange.url}</p>
              
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="text-white">{exchange.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume:</span>
                  <span className="text-white">{exchange.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span>Users:</span>
                  <span className="text-green-400">{exchange.users}</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialty:</span>
                  <span className="text-white">{exchange.specialty}</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                {exchange.description}
              </p>
              
              <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-none transition-all duration-300 flex items-center justify-center group font-bold text-sm shadow-lg hover:shadow-yellow-500/25">
                View Details
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Exchange Partners - Bundled Partners</title>
        <meta name="description" content="Access our network of 50+ exchange partners including Tier 1 CEX, major DEX, and regional exchanges. Professional listing support and market making services." />
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
                  <Image
                    src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                    alt="Bundled Logo"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
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
                <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Projects</Link>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
                <Link href="https://t.me/bundledhq">
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
                <Link href="/projects" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Projects</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Breadcrumb */}
        <section className="pt-24 pb-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/partners" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Partners
              </Link>
              <span>/</span>
              <span className="text-blue-400">Exchanges</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge className="bg-transparent text-blue-400 border-blue-400/30 px-4 py-2 text-sm font-medium">
                Exchange Partners
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Premium Exchange
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Access our network of 50+ exchange partners including Tier 1 centralized exchanges, 
              major DEX platforms, and regional exchanges. Professional listing support and market making services included.
            </motion.p>
          </div>
        </section>

        {/* Exchange Tiers Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="tier1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-white/10 rounded-xl p-1 mb-12">
                <TabsTrigger 
                  value="tier1" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400/20 data-[state=active]:to-orange-500/20 data-[state=active]:text-yellow-400 text-gray-400 rounded-lg transition-all duration-300"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Tier 1
                </TabsTrigger>
                <TabsTrigger 
                  value="tier2"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-blue-400 text-gray-400 rounded-lg transition-all duration-300"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Tier 2
                </TabsTrigger>
                <TabsTrigger 
                  value="tier3"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-emerald-500/20 data-[state=active]:text-green-400 text-gray-400 rounded-lg transition-all duration-300"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tier 3
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tier1" className="space-y-12">
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tierInfo.tier1.gradient} flex items-center justify-center text-yellow-400 mx-auto mb-6`}>
                    {tierInfo.tier1.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{tierInfo.tier1.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{tierInfo.tier1.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.minVolume}</div>
                      <div className="text-sm text-gray-400">Min Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.avgFees}</div>
                      <div className="text-sm text-gray-400">Listing Fees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.timeline}</div>
                      <div className="text-sm text-gray-400">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">15+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderExchangeGrid(tier1Exchanges)}
              </TabsContent>

              <TabsContent value="tier2" className="space-y-12">
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tierInfo.tier2.gradient} flex items-center justify-center text-blue-400 mx-auto mb-6`}>
                    {tierInfo.tier2.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{tierInfo.tier2.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{tierInfo.tier2.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.minVolume}</div>
                      <div className="text-sm text-gray-400">Min Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.avgFees}</div>
                      <div className="text-sm text-gray-400">Listing Fees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.timeline}</div>
                      <div className="text-sm text-gray-400">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">20+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderExchangeGrid(tier2Exchanges)}
              </TabsContent>

              <TabsContent value="tier3" className="space-y-12">
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tierInfo.tier3.gradient} flex items-center justify-center text-green-400 mx-auto mb-6`}>
                    {tierInfo.tier3.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{tierInfo.tier3.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{tierInfo.tier3.description}</p>
                  
                  <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.minVolume}</div>
                      <div className="text-sm text-gray-400">Min Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.avgFees}</div>
                      <div className="text-sm text-gray-400">Listing Fees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.timeline}</div>
                      <div className="text-sm text-gray-400">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderExchangeGrid(tier3Exchanges)}
              </TabsContent>
            </Tabs>
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
              <Badge className="bg-transparent text-blue-400 border-blue-400/30 mb-6">
                Ready to List?
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Secure Your <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Exchange Listing</span> Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Leverage our exchange partnerships to get your token listed on top-tier platforms 
                with professional support throughout the entire process.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                    Start Listing Process
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-blue-400/60 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-semibold">
                    Get Listing Quote
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
                <Image
                  src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
                  alt="Bundled Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
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