"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Users,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Award,
  CheckCircle2,
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Coffee,
  GraduationCap,
  Target,
  Laptop,
  Plane
} from 'lucide-react'

const jobOpenings = [
  {
    title: "Senior Blockchain Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$180K - $250K",
    experience: "5+ years",
    skills: ["Solidity", "Web3.js", "Node.js", "PostgreSQL"],
    description: "Build and maintain our core blockchain infrastructure and smart contracts"
  },
  {
    title: "Product Manager - DeFi",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time", 
    salary: "$160K - $220K",
    experience: "4+ years",
    skills: ["DeFi", "Product Strategy", "Data Analysis", "Agile"],
    description: "Lead our DeFi product roadmap and drive innovation in decentralized finance"
  },
  {
    title: "Compliance Officer",
    department: "Legal & Compliance",
    location: "London, UK",
    type: "Full-time",
    salary: "£80K - £120K", 
    experience: "6+ years",
    skills: ["Banking Regulations", "AML/KYC", "Risk Management", "Audit"],
    description: "Ensure regulatory compliance across all CoinBank operations and products"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$140K - $190K",
    experience: "3+ years", 
    skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
    description: "Scale our infrastructure to support millions of users and billions in assets"
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$120K - $160K",
    experience: "4+ years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description: "Create intuitive experiences for complex financial products"
  },
  {
    title: "Security Engineer",
    department: "Security",
    location: "Singapore",
    type: "Full-time",
    salary: "$150K - $200K",
    experience: "5+ years",
    skills: ["Penetration Testing", "Cryptography", "Security Audits", "Incident Response"],
    description: "Protect customer assets and maintain our industry-leading security posture"
  }
]

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Top-tier salaries plus equity in a fast-growing fintech company",
    icon: DollarSign,
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Flexible Work Environment",
    description: "Remote-first culture with beautiful offices in major cities worldwide",
    icon: Globe,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Health & Wellness",
    description: "Premium health insurance, mental wellness programs, and fitness memberships",
    icon: Heart,
    color: "from-red-500 to-rose-600"
  },
  {
    title: "Learning & Development",
    description: "$5,000 annual learning budget plus conference attendance and certifications",
    icon: GraduationCap,
    color: "from-purple-500 to-violet-600"
  },
  {
    title: "Latest Technology",
    description: "MacBook Pro, premium monitors, and any tools you need to do your best work",
    icon: Laptop,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Travel & Events",
    description: "Company retreats, team offsites, and travel stipends for conferences",
    icon: Plane,
    color: "from-cyan-500 to-blue-600"
  }
]

const teams = [
  {
    name: "Engineering",
    description: "Build the infrastructure powering the future of finance",
    openings: 12,
    skills: ["Blockchain", "Full-stack", "DevOps", "Mobile", "Security"]
  },
  {
    name: "Product",
    description: "Define and deliver products that delight millions of users",
    openings: 4,
    skills: ["Strategy", "Analytics", "Design", "Research", "Growth"]
  },
  {
    name: "Legal & Compliance",
    description: "Navigate complex regulations to enable global crypto adoption",
    openings: 3,
    skills: ["Banking Law", "Compliance", "Risk", "Policy", "Audit"]
  },
  {
    name: "Marketing",
    description: "Tell our story and educate the world about crypto banking",
    openings: 5,
    skills: ["Content", "Growth", "Brand", "Community", "Events"]
  },
  {
    name: "Business Development",
    description: "Build partnerships that expand our reach and capabilities",
    openings: 2,
    skills: ["Partnerships", "Strategy", "Sales", "Negotiation", "Analysis"]
  },
  {
    name: "Operations",
    description: "Scale our operations to serve customers around the world",
    openings: 6,
    skills: ["Operations", "Support", "Analytics", "Process", "Quality"]
  }
]

export default function CareersPage() {
  return (
    <main className="min-h-screen professional-bg text-foreground">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Careers at CoinBank
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our mission to revolutionize banking for the digital age. We're building the future 
              of finance and looking for exceptional people to help us get there.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">32</div>
                <div className="text-muted-foreground">Open Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Why Work Here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Join CoinBank?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.05 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.05 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-secondary/40 text-foreground px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="btn-primary">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Teams Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Join Our Teams
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.05 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">{team.name}</h3>
                    <span className="text-sm bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                      {team.openings} open
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{team.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-secondary/40 text-muted-foreground px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <div className="glass-effect rounded-3xl p-12 text-center">
              <Coffee className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Culture</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're building more than just a company – we're creating a culture of innovation, 
                inclusion, and impact. Every team member has the opportunity to shape the future 
                of finance while growing their career alongside industry leaders.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    title: "Innovation First",
                    description: "We embrace new ideas and technologies to stay at the forefront of fintech",
                    icon: Zap
                  },
                  {
                    title: "Inclusive Environment",
                    description: "We celebrate diversity and create an environment where everyone can thrive",
                    icon: Heart
                  },
                  {
                    title: "Growth Mindset",
                    description: "We invest in our people's development and encourage continuous learning",
                    icon: Target
                  }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our team of innovators, builders, and dreamers who are revolutionizing 
              banking for the digital age. Your next career move starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View All Open Roles
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn About Our Culture
              </button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Equal opportunity employer • Remote-friendly • Competitive benefits
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}