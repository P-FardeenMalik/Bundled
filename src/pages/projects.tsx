import Head from 'next/head';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Header from '@/components/Header';

const projects = [
  {
    name: "Simple AI",
    description: "Decentralized AI infrastructure provider revolutionizing machine learning accessibility.",
    image: "/images/projects/simple-ai.jpg",
    achievements: [
      "82 ETH raised in presale",
      "500% increase in community growth",
      "Successfully listed on 3 Tier-1 exchanges"
    ],
    verificationLink: "https://www.pinksale.finance/launchpad/ethereum/0xA4CccB4f49A2a71b18c925c18c5ca3871b195870", // Replace with actual link
  },
  {
    name: "Zeny",
    description: "Next-generation DeFi protocol focused on yield optimization and risk management.",
    image: "/images/projects/zeny.png",
    achievements: [
      "$100k USDT raised",
      "20,000+ active community members",
      "Featured on major crypto news outlets"
    ],
    verificationLink: "https://www.pinksale.finance/launchpad/polygon/0xc282Ba37690E49D3626162bef99cE01837C512DB", // Replace with actual link
  },
  {
    name: "ICED",
    description: "Revolutionary NFT marketplace with unique staking mechanics and rewards system.",
    image: "/images/projects/iced.png",
    achievements: [
      "850 SOL raised in IDO",
      "Partnership with 5 major NFT collections",
      "Integration with top NFT platforms"
    ],
    verificationLink: "https://www.pinksale.finance/solana/launchpad/BsnhqssMc53XkDDdNU7PVP1nQoS4cH2pufHzTjbMC6PE", // Replace with actual link
  },
  {
    name: "DropChain",
    description: "Cross-chain liquidity aggregator optimizing trading routes across multiple DEXes.",
    image: "/images/projects/dropchain.png",
    achievements: [
      "600 SOL raised",
      "10+ blockchain networks integrated",
      "$5M+ Total Value Locked within first month"
    ],
    verificationLink: "https://www.pinksale.finance/solana/launchpad/3sEiP53Rg5TNnr2LnPubLJLhrQH35kfsZ3XtGNZmgYNv", // Replace with actual link
  },
  {
    name: "Play Button",
    description: "GameFi platform connecting traditional gaming with blockchain rewards.",
    image: "/images/projects/play-button.png",
    achievements: [
      "1400 SOL raised in public sale",
      "100,000+ registered players",
      "Partnership with major game studios"
    ],
    verificationLink: "https://www.pinksale.finance/solana/launchpad/Dfx5Bc5JLtdLwjNn4hAcQz5kRRkwWj9WCD6QCoW9jYY5", // Replace with actual link
  }
];

const otherProjects = [
  {
    name: "NEIRO",
    image: "/images/projects/neiro.jpg",
    link: "https://www.neiroeth.io/",
    description: "Carrying forward Doge's legacy, Neiro - adopted by Kabosu's previous owner - represents the authentic spirit of meme culture. After a community takeover, it's now 100% community-owned with a strong charitable focus.",
    achievements: [
      "First to deploy on Ethereum",
      "Vitalik donated $500k to animal welfare",
      "Active charitable initiatives"
    ],
    social: {
      telegram: "https://t.me/ETHNEIROCTO",
      twitter: "https://x.com/NEIROETHCTO",
      chart: "https://www.dextools.io/app/en/token/first-neiro-eth?t=1723994119879"
    }
  },
  {
    name: "SHRUB",
    image: "/images/projects/shrub.jpg",
    link: "https://shrub.finance",
    description: "The rapidly growing hedgehog-themed token that caught attention of major crypto influencers. Starting from humble beginnings, SHRUB has shown remarkable market performance and community growth.",
    achievements: [
      "Market Cap peaked at 250M",
      "Strong community growth",
      "Viral social media presence"
    ],
    social: {
      telegram: "https://t.me/ShrubTheHedgehog",
      chart: "https://www.dextools.io/app/en/ether/pair-explorer/0x6a63be37a5501dc0f88ed3fa21d3cf9a64eb618e"
    },
    metrics: "Current MC: $60M"
  }
  // Add more projects as needed
];

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Bundled</title>
        <meta name="description" content="Explore our successful project launches and milestone achievements in the crypto space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge className="bg-transparent text-yellow-400 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                Success Stories
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Featured 
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Discover how we've helped innovative blockchain projects raise funds, build communities, 
              and achieve sustainable growth through our comprehensive marketing solutions.
            </motion.p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {project.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={project.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      >
                        Verify on Explorer
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Other Notable Projects */}
        <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Other Notable <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We've had the privilege of working with many other outstanding projects across the blockchain ecosystem.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {otherProjects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gray-900/50 border-white/10 hover:border-yellow-400/30 transition-all duration-500 group backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          style={{ objectFit: "contain", padding: "1rem" }}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.description && (
                        <p className="text-gray-400 mb-4 text-sm">
                          {project.description}
                        </p>
                      )}
                      {project.achievements && (
                        <div className="space-y-2 mb-4">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
                        >
                          Website
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                        {project.social?.twitter && (
                          <a
                            href={project.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
                          >
                            Twitter
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                        {project.social?.telegram && (
                          <a
                            href={project.social.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
                          >
                            Telegram
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}