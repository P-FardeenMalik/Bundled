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
  Users, 
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronLeft,
  Twitter,
  Youtube,
  MessageCircle,
  Crown,
  Award,
  TrendingUp
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

const tier1KOLs = [
  {
    name: "Altcoin Gordon",
    handle: "@AltcoinGordon",
    platform: "Twitter",
    followers: "770K",
    engagement: "8.5%",
    specialty: "Meme Coins & Trading",
    description: "Provides trading insights on meme coins like Dogecoin, Shiba Inu, PEPE, and WIF.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Bull BnB",
    handle: "@bull_bnb",
    platform: "Twitter",
    followers: "463.8K",
    engagement: "9.2%",
    specialty: "Meme Coins & Advisory",
    description: "Advisor and meme coin enthusiast, known for insights on various crypto projects.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Ansem",
    handle: "@blknoiz06",
    platform: "Twitter",
    followers: "600K",
    engagement: "7.8%",
    specialty: "Solana & Market Analysis",
    description: "Prominent figure in crypto, known for early support of Solana and market insights.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  },
  {
    name: "Jake Gagain",
    handle: "@JakeGagain",
    platform: "Twitter",
    followers: "143.2K",
    engagement: "10.1%",
    specialty: "Crypto Investment",
    description: "Crypto investor and influencer, sharing market insights and updates.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 1"
  }
];

const tier2KOLs = [
  {
    name: "Thanos",
    handle: "@CryptoThannos",
    platform: "Twitter",
    followers: "20K",
    engagement: "12.5%",
    specialty: "DeFi & 100x Calls",
    description: "DeFi enthusiast and meme coin trader, sharing daily crypto insights and 100x calls.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "Gake",
    handle: "@Ga__ke",
    platform: "Twitter",
    followers: "15K",
    engagement: "11.8%",
    specialty: "Market Trends",
    description: "Crypto trader sharing thoughts and analyses on market trends.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "0xVonGogh",
    handle: "@0xVonGogh",
    platform: "Twitter",
    followers: "15.8K",
    engagement: "13.2%",
    specialty: "Meme Coins & AI",
    description: "Full-time meme coin trader delving into AI technologies and community-driven movements.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  },
  {
    name: "973Meech",
    handle: "@973Meech",
    platform: "Twitter",
    followers: "91.6K",
    engagement: "9.4%",
    specialty: "Meme Coins",
    description: "Crypto degen known for vibrant personality and edgy commentary on meme coins.",
    icon: <Twitter className="w-6 h-6" />,
    verified: true,
    tier: "Tier 2"
  }
];

const tier3KOLs = [
  {
    name: "Crypto ZEUS",
    handle: "Crypto ZEUS",
    platform: "YouTube",
    followers: "86.5K",
    engagement: "8.7%",
    specialty: "DeFi & Low-cap Gems",
    description: "Offers insights into new crypto projects, especially those with DeFi potential, and explores early and low-cap meme coins.",
    icon: <Youtube className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Matthew Perry",
    handle: "Matthew Perry",
    platform: "YouTube",
    followers: "239K",
    engagement: "6.9%",
    specialty: "Shiba Inu & Altcoins",
    description: "Covers investing, personal finance, credit cards, and primarily Shiba Inu, with some focus on altcoins.",
    icon: <Youtube className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "The Dogecoin Millionaire",
    handle: "The Dogecoin Millionaire",
    platform: "YouTube",
    followers: "115K",
    engagement: "9.1%",
    specialty: "Dogecoin Journey",
    description: "Shares his journey of investing everything he had in Dogecoin, drawing many to crypto.",
    icon: <Youtube className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  },
  {
    name: "Altcoin Radar",
    handle: "Altcoin Radar",
    platform: "YouTube",
    followers: "32K",
    engagement: "10.5%",
    specialty: "Altcoins & Meme Coins",
    description: "Offers insights into crypto projects, trading, metaverse, and meme coins, including Dogecoin and Shiba Inu.",
    icon: <Youtube className="w-6 h-6" />,
    verified: true,
    tier: "Tier 3"
  }
];

const tierInfo = {
  tier1: {
    title: "Tier 1 KOLs",
    description: "Top-tier influencers with massive reach and proven track record",
    icon: <Crown className="w-8 h-8" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    minFollowers: "1M+",
    avgEngagement: "8-15%",
    pricing: "$10K - $50K",
    features: ["Massive Reach", "High Authority", "Premium Content", "Exclusive Access"]
  },
  tier2: {
    title: "Tier 2 KOLs",
    description: "Established influencers with strong engagement and niche expertise",
    icon: <Award className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-purple-500/20",
    minFollowers: "250K+",
    avgEngagement: "7-12%",
    pricing: "$3K - $15K",
    features: ["Strong Engagement", "Niche Expertise", "Quality Content", "Reliable Performance"]
  },
  tier3: {
    title: "Tier 3 KOLs",
    description: "Rising influencers with high engagement and growing communities",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    minFollowers: "50K+",
    avgEngagement: "6-11%",
    pricing: "$500 - $5K",
    features: ["High Engagement", "Growing Audience", "Cost Effective", "Authentic Voice"]
  }
};

export default function KOLs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderKOLGrid = (kols: any[]) => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {kols.map((kol, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg text-yellow-400">
                    {kol.icon}
                  </div>
                  {kol.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <Badge className="text-xs bg-transparent text-yellow-400 border-yellow-400/30">
                  {kol.tier}
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                {kol.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{kol.handle}</p>
              
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex justify-between">
                  <span>Platform:</span>
                  <span className="text-white">{kol.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span>Followers:</span>
                  <span className="text-white">{kol.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Engagement:</span>
                  <span className="text-green-400">{kol.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialty:</span>
                  <span className="text-white">{kol.specialty}</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                {kol.description}
              </p>                <Link href={`/partners/kol/${kol.handle.replace('@', '')}`} passHref>
                <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-none transition-all duration-300 flex items-center justify-center group font-bold text-sm shadow-lg hover:shadow-yellow-500/25">
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>KOLs & Influencers - Bundled Partners</title>
        <meta name="description" content="Access our network of 500+ verified crypto KOLs and influencers across Twitter, YouTube, Telegram, and Discord. Tier 1, 2, and 3 options available." />
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
              <span className="text-yellow-400">KOLs & Influencers</span>
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
              <Badge className="bg-transparent text-purple-400 border-purple-400/30 px-4 py-2 text-sm font-medium">
                KOLs & Influencers
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Verified Crypto
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Influencers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Access our exclusive network of 500+ verified crypto KOLs and influencers across Twitter, YouTube, 
              Telegram, and Discord. Choose from Tier 1, 2, or 3 based on your budget and reach requirements.
            </motion.p>
          </div>
        </section>

        {/* KOL Tiers Section */}
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
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.minFollowers}</div>
                      <div className="text-sm text-gray-400">Min Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.avgEngagement}</div>
                      <div className="text-sm text-gray-400">Avg Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{tierInfo.tier1.pricing}</div>
                      <div className="text-sm text-gray-400">Price Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">150+</div>
                      <div className="text-sm text-gray-400">Available KOLs</div>
                    </div>
                  </div>
                </div>
                {renderKOLGrid(tier1KOLs)}
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
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.minFollowers}</div>
                      <div className="text-sm text-gray-400">Min Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.avgEngagement}</div>
                      <div className="text-sm text-gray-400">Avg Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{tierInfo.tier2.pricing}</div>
                      <div className="text-sm text-gray-400">Price Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">200+</div>
                      <div className="text-sm text-gray-400">Available KOLs</div>
                    </div>
                  </div>
                </div>
                {renderKOLGrid(tier2KOLs)}
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
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.minFollowers}</div>
                      <div className="text-sm text-gray-400">Min Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.avgEngagement}</div>
                      <div className="text-sm text-gray-400">Avg Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">{tierInfo.tier3.pricing}</div>
                      <div className="text-sm text-gray-400">Price Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">150+</div>
                      <div className="text-sm text-gray-400">Available KOLs</div>
                    </div>
                  </div>
                </div>
                {renderKOLGrid(tier3KOLs)}
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
              <Badge className="bg-transparent text-purple-400 border-purple-400/30 mb-6">
                Ready to Launch?
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">KOL Campaign</span> Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Connect with our verified KOLs and influencers to amplify your project's reach 
                and build authentic community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="https://t.me/Adelerivere" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                    Book KOL Campaign
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                {/* <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-purple-400/60 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-semibold">
                    Get Custom Quote
                  </Button>
                </Link> */}
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