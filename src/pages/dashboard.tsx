import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/DashboardLayout";
import ProtectedDashboard from "@/components/ProtectedDashboard";
import Head from "next/head";
import Image from "next/image";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  Eye,
  Edit,
  Star,
  Activity,
  Rocket,
  Target
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const campaigns = [
  {
    id: 1,
    name: "Nexus DeFi Protocol - Series A Launch",
    status: "Active",
    progress: 85,
    budget: "$125,000",
    spent: "$106,250",
    kols: 18,
    reach: "4.2M",
    engagement: "12.8%",
    conversions: "2,847",
    roi: "340%",
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    priority: "High",
    category: "Fundraising"
  },
  {
    id: 2,
    name: "Quantum NFT Marketplace - Go-to-Market",
    status: "Completed",
    progress: 100,
    budget: "$85,000",
    spent: "$82,100",
    kols: 15,
    reach: "3.1M",
    engagement: "15.4%",
    conversions: "4,521",
    roi: "425%",
    startDate: "2023-11-01",
    endDate: "2024-01-31",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
    priority: "Medium",
    category: "Product Launch"
  },
  {
    id: 3,
    name: "Apex Gaming DAO - Community Building",
    status: "Planning",
    progress: 35,
    budget: "$95,000",
    spent: "$15,200",
    kols: 8,
    reach: "850K",
    engagement: "8.9%",
    conversions: "1,247",
    roi: "180%",
    startDate: "2024-02-01",
    endDate: "2024-05-15",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    priority: "High",
    category: "Community Growth"
  }
];

const recentActivities = [
  {
    type: "campaign",
    message: "DeFi Protocol Launch campaign reached 100K impressions",
    time: "2 hours ago",
    icon: <Target className="w-4 h-4" />,
    color: "text-green-400"
  },
  {
    type: "kol",
    message: "CryptoKing posted sponsored content",
    time: "4 hours ago",
    icon: <Users className="w-4 h-4" />,
    color: "text-blue-400"
  },
  {
    type: "funding",
    message: "New funding round proposal submitted",
    time: "6 hours ago",
    icon: <DollarSign className="w-4 h-4" />,
    color: "text-yellow-400"
  },
  {
    type: "community",
    message: "Discord community grew by 500 members",
    time: "8 hours ago",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-purple-400"
  }
];

export default function Dashboard() {
  return (
    <ProtectedDashboard>
      <Head>
        <title>Dashboard - Bundled</title>
        <meta name="description" content="Manage your crypto marketing campaigns with Bundled's comprehensive dashboard." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout title="Dashboard Overview">
        <div className="p-6 space-y-8">
          {/* Stats Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Active Campaigns</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">12</p>
                      <p className="text-sm text-green-400 flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        +2 this month
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Total Reach</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">8.2M</p>
                      <p className="text-sm text-green-400 flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        +15% this week
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Budget Spent</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">$125K</p>
                      <p className="text-sm text-red-400 flex items-center mt-2">
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                        -5% vs target
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-2xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Avg Engagement</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">7.8%</p>
                      <p className="text-sm text-green-400 flex items-center mt-2">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        +1.2% this month
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Active Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {campaigns.filter(c => c.status === "Active").map((campaign) => (
                      <div key={campaign.id} className="p-6 bg-black/50 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={campaign.image}
                              alt={campaign.name}
                              width={60}
                              height={60}
                              className="rounded-xl"
                            />
                            <div>
                              <h4 className="font-semibold text-white text-lg group-hover:text-yellow-400 transition-colors">
                                {campaign.name}
                              </h4>
                              <Badge className="bg-green-500/20 text-green-400 mt-1">
                                {campaign.status}
                              </Badge>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-white/20 text-white hover:bg-white/10 hover:text-yellow-400 rounded-full"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-400 mb-4">
                          <div>
                            <span className="text-gray-500">Budget:</span>
                            <div className="text-white font-medium">{campaign.budget}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">KOLs:</span>
                            <div className="text-white font-medium">{campaign.kols}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Reach:</span>
                            <div className="text-white font-medium">{campaign.reach}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Conversions:</span>
                            <div className="text-white font-medium">{campaign.conversions}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">ROI:</span>
                            <div className="text-green-400 font-medium">{campaign.roi}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-yellow-400 font-medium">{campaign.progress}%</span>
                          </div>
                          <Progress value={campaign.progress} className="h-2 bg-gray-800" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gray-900/50 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-yellow-400" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className={`${activity.color} mt-1`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white leading-relaxed">{activity.message}</p>
                          <p className="text-xs text-gray-400 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedDashboard>
  );
}