"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "MSC in Computer Science",
    institution: "University Of Agriculture Faisalabad",
    period: "2018 - 2020",
    description: "Advanced studies in computer science with focus on software development and web technologies."
  }
];

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Punjabi", level: "Native" }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan text-sm uppercase tracking-widest mb-4">My Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Education & <span className="gradient-text">Languages</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/30">
                <GraduationCap className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-cyan/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan" />
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-cyan text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/30">
                <Award className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center text-black font-semibold">
                      {lang.name.charAt(0)}
                    </div>
                    <span className="text-white font-medium">{lang.name}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-sm">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
