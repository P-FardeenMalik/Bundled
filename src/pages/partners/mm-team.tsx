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
  TrendingUp, 
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronLeft,
  Crown,
  Award,
  BarChart3,
  Activity,
  DollarSign,
  Zap
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

const tier1MMTeams = [
  {
    name: "Wintermute",
    type: "Institutional",
    aum: "$2.5B",
    spread: "0.05%",
    uptime: "99.9%",
    icon: <Activity className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Jump Trading",
    type: "Institutional",
    aum: "$1.8B",
    spread: "0.08%",
    uptime: "99.8%",
    icon: <BarChart3 className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "GSR",
    type: "Institutional",
    aum: "$1.2B",
    spread: "0.06%",
    uptime: "99.9%",
    icon: <TrendingUp className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Alameda Research",
    type: "Institutional",
    aum: "$950M",
    spread: "0.07%",
    uptime: "99.7%",
    icon: <DollarSign className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  }
];

const tier2MMTeams = [
  {
    name: "Kairon Labs",
    type: "Professional",
    aum: "$450M",
    spread: "0.12%",
    uptime: "99.5%",
    icon: <Activity className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Keyrock",
    type: "Professional",
    aum: "$380M",
    spread: "0.15%",
    uptime: "99.4%",
    icon: <BarChart3 className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Alphatheta",
    type: "Professional",
    aum: "$320M",
    spread: "0.18%",
    uptime: "99.3%",
    icon: <TrendingUp className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Bluesky Capital",
    type: "Professional",
    aum: "$280M",
    spread: "0.16%",
    uptime: "99.2%",
    icon: <DollarSign className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  }
];

const tier3MMTeams = [
  {
    name: "Crypto MM Pro",
    type: "Boutique",
    aum: "$85M",
    spread: "0.25%",
    uptime: "98.8%",
    icon: <Activity className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Liquidity Labs",
    type: "Boutique",
    aum: "$65M",
    spread: "0.30%",
    uptime: "98.5%",
    icon: <BarChart3 className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Market Makers Inc",
    type: "Boutique",
    aum: "$45M",
    spread: "0.35%",
    uptime: "98.2%",
    icon: <TrendingUp className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Alpha MM",
    type: "Boutique",
    aum: "$38M",
    spread: "0.28%",
    uptime: "98.6%",
    icon: <DollarSign className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  }
];

const tierInfo = {
  tier1: {
    title: "Tier 1 Market Makers",
    description: "Institutional-grade market makers with massive capital and ultra-tight spreads",
    icon: <Crown className="w-8 h-8" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    minCapital: "$500M+",
    avgSpread: "0.05-0.10%",
    minCommit: "$1M+",
    features: ["Institutional Grade", "Ultra-Tight Spreads", "24/7 Coverage", "Multi-Exchange"]
  },
  tier2: {
    title: "Tier 2 Market Makers",
    description: "Professional market makers with strong capital and competitive spreads",
    icon: <Award className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-purple-500/20",
    minCapital: "$100M+",
    avgSpread: "0.10-0.20%",
    minCommit: "$250K+",
    features: ["Professional Service", "Competitive Spreads", "Multi-Platform", "Flexible Terms"]
  },
  tier3: {
    title: "Tier 3 Market Makers",
    description: "Boutique market makers offering cost-effective solutions for emerging projects",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    minCapital: "$25M+",
    avgSpread: "0.20-0.40%",
    minCommit: "$50K+",
    features: ["Cost Effective", "Emerging Projects", "Flexible Setup", "Quick Deployment"]
  }
};

export default function MMTeam() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderMMGrid = (teams: any[]) => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {teams.map((team, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="bg-gray-900/50 border-white/10 hover:border-green-400/30 transition-all duration-500 group backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-lg text-green-400">
                    {team.icon}
                  </div>
                  {team.verified && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <Badge className="text-xs bg-transparent text-green-400 border-green-400/30">
                  {team.tier}
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {team.name}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="text-white">{team.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>AUM:</span>
                  <span className="text-white">{team.aum}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Spread:</span>
                  <span className="text-green-400">{team.spread}</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="text-white">{team.uptime}</span>
                </div>
              </div>
                 <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-none transition-all duration-300 flex items-center justify-center group font-bold text-sm shadow-lg hover:shadow-yellow-500/25">
              View Profile
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
        <title>Market Making Teams - Bundled Partners</title>
        <meta name="description" content="Access our network of 15+ professional market making teams. Institutional-grade liquidity provision, tight spreads, and 24/7 market coverage for your token." />
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
                <Link href="/clients" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Clients</Link>
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
                <Link href="/clients" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Clients</Link>
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
              <span className="text-green-400">Market Making Teams</span>
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
              <Badge className="bg-transparent text-green-400 border-green-400/30 px-4 py-2 text-sm font-medium">
                Market Making Teams
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Professional Market
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Making Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Access our network of 15+ professional market making teams providing institutional-grade liquidity, 
              tight spreads, and 24/7 market coverage to ensure optimal trading conditions for your token.
            </motion.p>
          </div>
        </section>

        {/* MM Team Tiers Section */}
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
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.minCapital}</div>
                      <div className="text-sm text-gray-400">Min Capital</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.avgSpread}</div>
                      <div className="text-sm text-gray-400">Avg Spread</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.minCommit}</div>
                      <div className="text-sm text-gray-400">Min Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">5+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderMMGrid(tier1MMTeams)}
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
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.minCapital}</div>
                      <div className="text-sm text-gray-400">Min Capital</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.avgSpread}</div>
                      <div className="text-sm text-gray-400">Avg Spread</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.minCommit}</div>
                      <div className="text-sm text-gray-400">Min Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">6+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderMMGrid(tier2MMTeams)}
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
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.minCapital}</div>
                      <div className="text-sm text-gray-400">Min Capital</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.avgSpread}</div>
                      <div className="text-sm text-gray-400">Avg Spread</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.minCommit}</div>
                      <div className="text-sm text-gray-400">Min Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">4+</div>
                      <div className="text-sm text-gray-400">Partners</div>
                    </div>
                  </div>
                </div>
                {renderMMGrid(tier3MMTeams)}
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
              <Badge className="bg-transparent text-green-400 border-green-400/30 mb-6">
                Ready for Liquidity?
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Enhance Your Token's <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Liquidity</span> Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Partner with our professional market making teams to ensure optimal liquidity, 
                tight spreads, and stable trading conditions for your token across all major exchanges.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Setup Market Making
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-green-400/60 text-green-400 hover:bg-green-400 hover:text-black bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-semibold">
                    Get MM Quote
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