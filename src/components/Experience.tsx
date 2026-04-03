"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    company: "BetterLogics",
    location: "Lahore, PK",
    role: "MERN Stack Developer",
    period: "October 2024 – Present",
    projects: [
      {
        name: "Book of Gates",
        url: "https://bookofgateslatest.vercel.app/",
        description: "NFT minting platform",
        highlights: [
          "Developed the Book of Gates NFT platform in React.js with full Web3 integration for minting 10,000 unique Ethereum NFTs",
          "Connected the frontend to smart contracts to enable secure minting, wallet authentication, and on-chain metadata reveal",
          "Implemented UI modules showcasing characters, orders, gates, backgrounds, and hidden codes from 1000+ attribute combinations",
          "Optimized performance and user experience during high-traffic mint events with efficient state management and blockchain interaction handling"
        ]
      },
      {
        name: "House of Legends",
        url: "https://www.houseoflegends.art",
        description: "NFT Marketplace",
        highlights: [
          "Built NFT minting, Smart contract calls, and wallet connect features so users can mint and view 9,993+ NFTs smoothly",
          "Created the backend for NFT data and a fast, responsive gallery that supports 1,000+ users at the same time",
          "Improved blockchain and IPFS speed, cutting loading time by more than half and showing NFT previews instantly",
          "Updated the database to track NFT owners, rewards, and real-time progress for clean-water charity work",
          "Worked with developers, artists, and partners to add new features like missions, rewards, and merchandise, increasing user activity"
        ]
      },
      {
        name: "BitNexus",
        url: "https://bitnexus.tech/",
        description: "Presale Platform",
        highlights: [
          "AI-powered crypto presale platform combining advanced automation, intelligent algorithms, and secure blockchain technology",
          "Built frontend using React.js with a responsive, user-friendly interface for seamless navigation during presale events",
          "Integrated wallet connectivity using WalletConnect v2 and other Web3 wallets for secure authentication and transaction signing",
          "Connected and executed smart contracts using Wagmi hooks, enabling fast, reliable presale transactions and real-time token allocation",
          "Implemented real-time monitoring of presale progress, token supply, and user participation metrics for transparency and analytics"
        ]
      },
      {
        name: "KGC World",
        url: "https://kgcworld.online/",
        description: "Referral-Based Crypto Earning Platform",
        highlights: [
          "Built KGC Staking application featuring user authentication, token buying, staking contracts, and dashboard analytics",
          "KGC Staking platform using Next.js for responsive UI with real-time dashboards, Node.js/Express.js backend with JWT authentication and RESTful APIs, and MongoDB for managing users, transactions, staking records",
          "Implemented smart reward logic for staking with scheduled payouts and real-time reward updates",
          "Designed a multi-level referral architecture allowing users to generate referral links, add team members, and earn tiered income",
          "Integrated Web3.js and Ethers.js for blockchain wallet connectivity, smart contract interactions for staking operations, and secure token transfers with transaction verification on BSC networks"
        ]
      }
    ]
  },
  {
    company: "Silicon Nexus",
    location: "Lahore, PK",
    role: "Lead Frontend Developer",
    period: "March 2023 – September 2024",
    projects: [
      {
        name: "Fit Society",
        url: "https://www.fitsociety.io",
        description: "Coaching and training platform",
        highlights: [
          "Developed responsive coaching app interface with dynamic exercise library displays and nutrition plan builders, implementing React components for seamless workout customization, progress visualization charts, and real-time client-trainer messaging",
          "Designed and implemented intuitive dashboard UI/UX featuring drag-and-drop workout builders, interactive nutrition calculators, and client progress tracking interfaces, creating a cohesive design system that reduced user onboarding time by 40%",
          "Built high-performance frontend architecture with optimized lazy loading for 100+ recipe images, implementing efficient state management and caching strategies that achieved 90%+ PageSpeed scores and sub-2-second load times",
          "Created dynamic form systems and real-time validation for client assessment questionnaires, payment processing interfaces, and subscription management, implementing smooth animations and micro-interactions that enhanced user engagement and reduced form abandonment rates by 35%",
          "Implemented cross-platform responsive design ensuring pixel-perfect rendering across iOS, Android, and web browsers, utilizing CSS Grid and Flexbox for complex layout management"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan text-sm uppercase tracking-widest mb-4">My Resume</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: expIndex * 0.1 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cyan" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium border border-cyan/30">
                    {exp.role}
                  </span>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {exp.projects.map((project, projIndex) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: projIndex * 0.1 }}
                    className="glass rounded-xl p-6 hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-cyan transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{project.description}</p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan" />
                      </a>
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                          <span className="line-clamp-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
