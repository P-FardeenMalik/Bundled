import React, { useState } from "react";
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
  DollarSign, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Menu,
  X,
  Zap,
  Shield,
  Target,
  Rocket,
  Award,
  Crown,
  Globe,
  BarChart3,
  MessageCircle,
  Twitter,
  Youtube,
  Building2,
  Megaphone,
  LineChart,
  FileText,
  Handshake,
  Eye,
  Volume2,
  Coins,
  TrendingDown
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

const packages = [
  {
    id: "trial",
    name: "Starter Spark",
    subtitle: "Trial Package",
    price: "$750",
    ideal: "New projects seeking initial exposure and community engagement",
    gradient: "from-yellow-500/10 to-yellow-700/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-500",
    deliverables: [
      "1 Press Release distributed to crypto news outlets",
      "2 Influencer tweets from mid-tier crypto influencers",
      "Basic community setup on Telegram or Discord",
      "Initial SEO audit and recommendations",
      "1 AMA session hosted on a niche crypto platform"
    ],
    objective: "Kickstart your project's online presence and gather initial feedback",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    id: "premium",
    name: "Premium Power Play",
    subtitle: "PRE + Post Launch Marketing Bundle - Premium",
    price: "$1,500",
    targetResults: "60k USDT",
    minGuaranteed: "60k USDT",
    ideal: "Projects ready for serious market penetration with guaranteed results",
    gradient: "from-yellow-600/10 to-yellow-800/10",
    borderColor: "border-yellow-600/20",
    textColor: "text-yellow-600",
    deliverables: [
      "15 Days Plan with 3 Months long Partnership",
      "x3 Buying and Activity Contests",
      "x2 Private Group Calls",
      "Special Call in Whales and Influencers Group",
      "Special Call in White House",
      "x1 Live Stream AMA",
      "PINKSALE Trending #1, Dextool Trending #3-10",
      "Exclusive Influencers Partnerships",
      "Ads Across Poocoin and Dextool"
    ],
    guarantee: "Long-term Cooperation With 6 Weeks Refund Agreement",
    icon: <Crown className="w-8 h-8" />
  },
  {
    id: "deluxe",
    name: "Grand Launch Excellence",
    subtitle: "Deluxe Marketing Bundle - Covers 2-Presales and Launch",
    price: "$2,500",
    targetResults: "120k USDT",
    minGuaranteed: "120k USDT",
    ideal: "Comprehensive launch strategy covering multiple phases",
    gradient: "from-yellow-500/10 to-amber-600/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-500",
    deliverables: [
      "30 Days Plan with 1 Year long Partnership (Unlimited posts and updates)",
      "x3 Buying and Activity Contests",
      "x2 Private Group Calls",
      "Special Call in Whales and Influencers Group",
      "Special Call in White House",
      "x1 Live Stream AMA",
      "PINKSALE Trending #1, Dextool Trending #3-10",
      "Exclusive Influencers Partnerships",
      "Ads Across Poocoin and Dextool",
      "Telegram Community Handling and Growth (Mods and Raiders)",
      "Special Telegram and Twitter Growth (Raids included)",
      "Weekly Based AMAs with White House",
      "Special Deluxe Partnership",
      "YouTube Reviews",
      "3 Twitter Influencers Reviews (>30k)"
    ],
    guarantee: "Guaranteed, Comes With Refund Agreement",
    icon: <Award className="w-8 h-8" />
  },
  {
    id: "strategic",
    name: "Strategic Voyager",
    subtitle: "Strategic Market Penetration",
    price: "$4,500",
    targetResults: "600k USDT",
    minGuaranteed: "600k USDT",
    ideal: "Advanced market penetration with comprehensive support",
    gradient: "from-amber-600/10 to-yellow-700/10",
    borderColor: "border-amber-600/20",
    textColor: "text-amber-600",
    deliverables: [
      "45 Days Plan for Targeted Exposure",
      "90 Days Community Growth",
      "x2 Buying and Activity Contests",
      "Exclusive Private Group Calls",
      "Invitational Calls in Whales and Influencers Group",
      "Exclusive Streamed AMA",
      "Tailored Trending Strategies on PINKSALE and Dextool",
      "Targeted Influencer Collaborations",
      "Advanced Ads Placement on Poocoin and Dextool",
      "Telegram and Twitter Growth with Tactical Raids",
      "Monthly AMAs with White House",
      "Specialized Deluxe Partnership",
      "YouTube Review Marathon with Influencers (>50k)",
      "Niche Audience Engagement Strategies for Twitter"
    ],
    extras: [
      "1 AMA per Week",
      "CMC Comments",
      "Twitter Raids And Comments, Like, Share on Each Post",
      "Telegram Chat 18hrs a day",
      "Twitter Shilling And Telegram Shilling",
      "5 Well Known Influencer Partnerships",
      "5 Telegram Calls (Effective ones)",
      "5 Twitter Calls (Well known)",
      "3 Youtube Reviews (50k+ Subs)",
      "2 Press Release (to be published on 5 Websites)",
      "4 Whales Communities from China and Arab"
    ],
    guarantee: "Guaranteed, Comes With Refund Agreement And 24/7 Support Service",
    icon: <Target className="w-8 h-8" />
  },
  {
    id: "apex",
    name: "Apex Initiator",
    subtitle: "Strategic Exposure & Guaranteed Engagement",
    price: "$9,999",
    targetResults: "600,000+ reach",
    minGuaranteed: "$50,000 fundraising",
    ideal: "Emerging crypto projects seeking strategic exposure and guaranteed engagement",
    gradient: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-400/30",
    textColor: "text-red-400",
    deliverables: [
      "45 Days Strategic Marketing Execution",
      "90 Days Community Growth Oversight",
      "2 Buying and Activity Contests",
      "2 Private Group Investment Calls",
      "Live Stream AMA Session",
      "5 High-Impact Telegram Group Calls",
      "5 Twitter Posts from niche influencers (Tier 2 and 3)",
      "1 AMA with a premium space (e.g., White House)",
      "15+ KOL Promotions across Twitter and Telegram",
      "3 YouTube Reviews from influencers (50k+ subscribers)",
      "2 Press Releases published on 5+ crypto news sites",
      "#1 Trending on PinkSale",
      "Top 10 Trending on Dextools",
      "Ads on Poocoin and Dextools",
      "CMC Comments Campaign",
      "Twitter Post Engagement (raids, shares, comments)",
      "Telegram Chat Handling (18 hours/day support)",
      "Twitter and Telegram Shilling with custom templates",
      "Dedicated Telegram Moderator",
      "Exchange Listing Guidance (Tier 2 CEX focus)",
      "Market Making Strategy Introduction",
      "Liquidity Planning and Support"
    ],
    metrics: [
      "Minimum Guaranteed Exposure: 600,000+ reach",
      "Community Growth: 5,000+ real members",
      "Daily Minimum Trading Volume: $20,000+",
      "Minimum Guaranteed Fundraising Volume: $50,000"
    ],
    guarantee: "Refund-backed performance guarantee and 24/7 support",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: "momentum",
    name: "Momentum Architect",
    subtitle: "Full-Stack Growth Engine",
    price: "$19,999",
    targetResults: "1,500,000+ exposure",
    minGuaranteed: "$120,000 fundraising",
    ideal: "Projects entering high-stakes phase: launch, listing, or aggressive fundraising",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-400/30",
    textColor: "text-indigo-400",
    deliverables: [
      "60-Day Structured Campaign",
      "6-Month Partnership Support",
      "3 Buying and Community Activity Contests",
      "3 Private Investment Group Calls",
      "2 Strategic Whale Group Introductions",
      "2 Live AMAs including Twitter Spaces",
      "10 Telegram Calls in top-performing groups",
      "10 Twitter Influencer Posts (5 Tier 2, 5 Tier 3)",
      "3 High-Quality YouTube Reviews (50k–100k+ subs)",
      "4 Press Releases across top-tier platforms",
      "30+ KOL Campaign across platforms",
      "Fully managed content calendar",
      "Twitter Meme Campaign and Targeted Shilling",
      "Branded Creative Design Pack",
      "Full Telegram/Discord Setup and Management",
      "2 Full-Time Community Managers",
      "Tactical Twitter & Telegram Raids (4-week plan)",
      "2 AMA Sessions with White House or equivalent hosts",
      "Strategic Engagement Push across regional communities",
      "Trending: Top 3 on Dextools, #1 on PinkSale",
      "Poocoin and Dextools Banner Ads",
      "CoinMarketCap & CoinGecko Fast-Track & Trending",
      "CMC Comment Push with upvote strategy",
      "CEX Listing Strategy (Tier 2 confirmed support)",
      "Full Market Making Consultancy & Team Link-up",
      "Liquidity Injection Planning",
      "Volume Simulation with MM Tools"
    ],
    metrics: [
      "Minimum Exposure: 1,500,000+",
      "Minimum Fundraising Volume: $120,000",
      "Minimum Daily Volume: $40,000+"
    ],
    guarantee: "Guaranteed delivery and refund agreement",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: "titan",
    name: "Titan Dominator",
    subtitle: "Full-Scale Market Domination",
    price: "$29,999",
    targetResults: "3,000,000+ exposure",
    minGuaranteed: "$250,000 fundraising",
    ideal: "Top-tier projects ready for full-scale market domination and institutional attraction",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/30",
    textColor: "text-orange-400",
    deliverables: [
      "90-Day Full-Scale Launch Campaign",
      "12-Month Advisory & Partnership Integration",
      "Dedicated Launch Advisor with Weekly Strategy Sessions",
      "5 Community & Buying Contests",
      "5 Private Group Calls (Investors, Alpha Groups, VC Networks)",
      "3 AMA Events (Twitter Spaces, Live Streams, Podcast Integration)",
      "20 Telegram Calls",
      "20 Twitter Influencer Partnerships (5 Tier 1, 10 Tier 2, 5 Tier 3)",
      "6 YouTube Reviews (50k–250k audience range)",
      "5 Premium Press Releases (Cointelegraph-style sites included)",
      "60+ KOL Activations with full creative control",
      "Long-Term Influencer Collaboration Planning",
      "Paid Campaign Management (X Ads, Reddit Ads, Crypto Banner Placements)",
      "Sponsored Podcast or Twitter Feature",
      "Complete Server Setup + Moderation Team",
      "Community Growth Plan with Multilingual Mod Coverage",
      "Tactical Meme and Viral Thread Distribution",
      "Twitter/X Account Optimization + Engagement Farming",
      "Event Campaigns (Countdowns, Giveaways, Collabs)",
      "#1 Trending Campaigns on PinkSale, Dextools, CMC, CG",
      "Paid Banner Ads across Poocoin, Dextools, CoinSniper",
      "Daily Twitter and Telegram Shilling (Managed Teams with KPIs)",
      "Video Ads + Short Form Content for Reels & Shorts",
      "Guaranteed Listing Support on Tier 1 or Tier 2 Exchange",
      "Complete Market Making Support",
      "Volume Boosting Strategy and Simulation",
      "Liquidity Pool Optimization (DEX & CEX)",
      "VC and Whale Group Outreach",
      "Private Pitch Calls with VC Communities",
      "Pitch Deck Creation and Review",
      "Listing Kit and Documentation Support",
      "Weekly KPI Reports and Analytics Dashboard"
    ],
    metrics: [
      "Minimum Exposure: 3,000,000+",
      "Minimum Fundraising Volume: $250,000",
      "Minimum Daily Volume: $70,000+"
    ],
    guarantee: "Refund-based agreement, long-term collaboration, and advanced analytics",
    icon: <Crown className="w-8 h-8" />
  }
];

const services = [
  {
    category: "Marketing & Promotion",
    icon: <Megaphone className="w-8 h-8" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    services: [
      {
        name: "Mass Direct Messaging",
        description: "Reach highly targeted audiences across Telegram, Twitter, and email through strategic mass DM campaigns to maximize visibility and engagement.",
        icon: <MessageCircle className="w-6 h-6" />
      },
      {
        name: "Banner Advertisements",
        description: "Display eye-catching banners on top-tier platforms such as CoinGecko, BscScan, SolScan, Dextools, and 4Chan to drive awareness and traffic.",
        icon: <Eye className="w-6 h-6" />
      },
      {
        name: "Influencer Marketing",
        description: "Leverage a curated network of vetted influencers on YouTube and Twitter to create authentic, high-impact promotions tailored to your project's needs.",
        icon: <Users className="w-6 h-6" />
      },
      {
        name: "Pinksale Trending & Badges",
        description: "Access trending packages and purchase essential Pinksale badges (KYC, SAFU, Audit) to establish trust and improve launch visibility.",
        icon: <Award className="w-6 h-6" />
      },
      {
        name: "CMC & CG Services",
        description: "End-to-end CoinMarketCap and CoinGecko support including fast-track listing, supply verification, featured homepage visibility, trending placement, watchlist growth, and followers boost.",
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        name: "Social Media Growth Campaigns",
        description: "Boost credibility and visibility through targeted increases in followers, likes, shares, views, and engagement across Twitter, Telegram, YouTube, and Reddit.",
        icon: <Volume2 className="w-6 h-6" />
      },
      {
        name: "Crypto Billboards",
        description: "Advertise globally through digital and static billboard placements in major cities, airports, and crypto-concentrated regions.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        name: "Reddit Trending Campaigns",
        description: "Promote your project in high-impact subreddits like r/CryptoMoonShots (2M+ members) for hot, 24H, or weekly trending visibility.",
        icon: <TrendingDown className="w-6 h-6" />
      }
    ]
  },
  {
    category: "Community Management & Communication",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    services: [
      {
        name: "Telegram Community Services",
        description: "Expand and manage your community with targeted member transfers (via scraping), bot members, real and active admins, hypemen, and moderators, plus group engagement and poll boosting.",
        icon: <MessageCircle className="w-6 h-6" />
      }
    ]
  },
  {
    category: "Media & Public Relations",
    icon: <FileText className="w-8 h-8" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    services: [
      {
        name: "Press Release Distribution",
        description: "Publish your story across 300+ high-authority outlets including Yahoo Finance, Binance News, Digital Journal, MarketWatch, Bitcointalk, and CoinMarketCap to enhance legitimacy and reach.",
        icon: <FileText className="w-6 h-6" />
      }
    ]
  },
  {
    category: "Advanced Growth & Trading Services",
    icon: <LineChart className="w-8 h-8" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    services: [
      {
        name: "Centralized Exchange (CEX) Listings",
        description: "Strategic listing support and introductions to major and mid-tier exchanges (e.g., MEXC, Gate.io, Bitmart, BingX, etc.), including guidance on due diligence and legal compliance.",
        icon: <Building2 className="w-6 h-6" />
      },
      {
        name: "Market Making Services",
        description: "Ensure healthy liquidity, tighter spreads, and stable order books with professional market making across both centralized and decentralized platforms.",
        icon: <BarChart3 className="w-6 h-6" />
      },
      {
        name: "Volume & Buyers Boosting",
        description: "Drive organic-looking buy volume, increase transaction frequency, and simulate active market interest to attract real investors.",
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        name: "DEX Trending & Volume Boosts",
        description: "Achieve trending status on DEX tools (e.g., Dextools, GeckoTerminal) and increase token trading volume through algorithmically timed trade injections.",
        icon: <Coins className="w-6 h-6" />
      },
      {
        name: "Strategic Partnerships & KOL Networking",
        description: "Secure collaborations with top-tier KOLs, strategic advisors, and crypto VCs for long-term brand building and investment opportunities.",
        icon: <Handshake className="w-6 h-6" />
      }
    ]
  }
];

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Services & Packages - Bundled Crypto Marketing Agency</title>
        <meta name="description" content="Explore our comprehensive crypto marketing packages from $750 to $29,999. Trial packages to full-scale market domination with guaranteed results." />
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
                <Link href="/services" className="text-yellow-400 font-medium">Services</Link>
                <Link href="/partners" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Partners</Link>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">About</Link>
                <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Projects</Link>
                <Link href="/#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
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
                <Link href="/services" className="block text-yellow-400 font-medium">Services</Link>
                <Link href="/partners" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Partners</Link>
                <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">About</Link>
                <Link href="/projects" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Projects</Link>
                <Link href="/#contact" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full shadow-lg">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* <Badge>
                Services & Packages
              </Badge> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 hover:text-white transition-colors duration-300"
            >
              Comprehensive Marketing
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              From trial packages to full-scale market domination. Choose the perfect package for your project's needs and budget, with guaranteed results and refund agreements.
            </motion.p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-white transition-colors duration-300">
                Marketing <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                7 comprehensive packages designed to meet every project's needs, from initial exposure to full market domination.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {packages.map((pkg, index) => (
                <motion.div key={pkg.id} variants={fadeInUp}>
                  <Card className={`bg-gray-900/30 border-white/10 hover:${pkg.borderColor} transition-all duration-500 h-full group backdrop-blur-sm`}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.gradient} flex items-center justify-center ${pkg.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {pkg.icon}
                      </div>
                      
                      <div className="mb-6">
                        <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${pkg.textColor} transition-colors duration-300`}>
                          {pkg.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{pkg.subtitle}</p>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className={`text-4xl font-bold ${pkg.textColor}`}>{pkg.price}</span>
                        </div>
                        {pkg.targetResults && (
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Target Results:</span>
                              <span className="text-green-400 font-medium">{pkg.targetResults}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Min Guaranteed:</span>
                              <span className="text-green-400 font-medium">{pkg.minGuaranteed}</span>
                            </div>
                          </div>
                        )}
                        <p className="text-gray-300 text-sm italic">{pkg.ideal}</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-white">Deliverables:</h4>
                        <ul className="space-y-2 max-h-64 overflow-y-auto">
                          {pkg.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                              <CheckCircle className={`w-4 h-4 ${pkg.textColor} mr-3 flex-shrink-0 mt-0.5`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {pkg.extras && (
                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold text-white">Extras:</h4>
                          <ul className="space-y-2 max-h-32 overflow-y-auto">
                            {pkg.extras.map((item, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-400">
                                <Star className={`w-4 h-4 ${pkg.textColor} mr-3 flex-shrink-0 mt-0.5`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {pkg.metrics && (
                        <div className="space-y-4 mb-6">
                          <h4 className="font-semibold text-white">Key Metrics:</h4>
                          <ul className="space-y-2">
                            {pkg.metrics.map((metric, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-400">
                                <BarChart3 className={`w-4 h-4 ${pkg.textColor} mr-3 flex-shrink-0 mt-0.5`} />
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {pkg.objective && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-white mb-2">Objective:</h4>
                          <p className="text-sm text-gray-400">{pkg.objective}</p>
                        </div>
                      )}

                      {pkg.guarantee && (
                        <div className="mb-6 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                          <p className="text-sm text-green-400 font-medium">{pkg.guarantee}</p>
                        </div>
                      )}

                      {/* Choose Package Button */}
                      <div className="flex justify-center w-full">
                        <a
                          href="https://t.me/Mrdaniel91"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-none transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-yellow-500/25 rounded-full px-8 py-2.5 transform hover:scale-105"
                          >
                            Choose Package
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
              {/* <Badge className="text-yellow-500 border-yellow-500/20 mb-6 hover:text-yellow-400 transition-colors duration-300">
                Services
              </Badge> */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Marketing & Growth <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore our full range of crypto marketing services designed to accelerate your project's growth and success.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {services.map((category, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white`}>
                        {category.icon}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{category.category}</h3>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="bg-gray-900/30 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg text-yellow-400">
                              {service.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
              {/* <Badge className="text-yellow-500 border-yellow-500/20 mb-6 hover:text-yellow-400 transition-colors duration-300">
                Ready to Launch?
              </Badge> */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Start Your <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Marketing Campaign</span> Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Choose the perfect package for your project and let our expert team drive your success with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="https://calendly.com/getbundled/30min">
                  <Button 
                    size="lg" 
                    className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Now
                  </Button>
                </Link>
                {/* <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-2 border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-8 py-4 rounded-full text-lg transition-all duration-300 group font-semibold">
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