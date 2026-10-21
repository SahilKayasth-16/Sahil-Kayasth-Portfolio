import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experience = [
  {
    role: 'Associate Member of Technical Staff | On Site',
    company: 'GyanMirai Technologies',
    period: 'Oct 2026 – Present',
    desc: 'Contribute to the design, development, and maintenance of software applications as part of the technical team.',
    certificate: null
  },
  {
    role: 'Full Stack Developer Intern | Remote',
    company: 'Infotact Solutions',
    period: 'Jul 2026 – Oct 2026',
    desc: 'Developed FleetDash (fleet management) and LedgerGuard (multi-tenant billing and ledger management), full-stack applications built with React, Node.js, Express.js, TypeScript, and MongoDB.',
    certificate: '/certificates/Infotact_Certificate.jpeg'
  },
  {
    role: 'Web Developer Intern | Remote',
    company: 'Syntecxhub',
    period: 'Jun 2026',
    desc: 'Worked on individual projects such as Notes App, User Management System, Employee Management System, and Real-time Chat Application using the MERN stack and Socket.io.',
    certificate: '/certificates/Syntecxhub_Certificate.jpeg'
  },
  {
    role: 'Full Stack Developer Intern | On Site',
    company: 'Bhaskaracharya National Institute for Space Applications and Geo-informatics (BISAG-N)',
    period: 'Jan 2026 – Apr 2026',
    desc: 'Developed a web-based urban planning platform with utility management and an AI chatbot using React (Vite), Python, FastAPI, PostgreSQL with PostGIS, and the Ollama Phi-3 model.',
    certificate: '/certificates/BISAG_Certificate.jpeg'
  },
  {
    role: 'Web Developer Intern | On Site',
    company: 'Future Way Institute of Multimedia',
    period: 'Jul 2025',
    desc: 'Engineered a role-based access control system using Laravel for four distinct user types.',
    certificate: '/certificates/FutureWay_Certificate.jpeg'
  }
]

export const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    if (!selectedCertificate) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCertificate])

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">
            Career Path
          </h2>

          <h3 className="text-4xl md:text-6xl font-black">
            Experience Timeline
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white bg-opacity-10 transform md:-translate-x-1/2" />

          <div className="space-y-20">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -50 : 50
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  idx % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <button
                    type="button"
                    onClick={() => {
                      if (exp.certificate) {
                        setSelectedCertificate(exp)
                      }
                    }}
                    aria-label={
                      exp.certificate
                        ? `View certificate from ${exp.company}`
                        : ``
                    }
                    className={`glass p-8 rounded-[2rem] relative group
                      border border-transparent hover:border-primary
                      transition-all duration-300 w-full h-full
                      text-left cursor-pointer hover:-translate-y-1
                      hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-primary
                      ${
                        idx % 2 === 0
                          ? 'md:text-right'
                          : 'md:text-left'
                      }`}
                  >
                    <span className="text-primary font-bold text-sm mb-2 block">
                      {exp.period}
                    </span>

                    <h4 className="text-2xl font-bold mb-2">
                      {exp.role}
                    </h4>

                    <p className="text-gray-300 font-medium mb-4">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      {exp.desc}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      {exp.certificate ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                          View Certificate
                        </>
                      ) : (
                        'Certificate coming soon'
                      )}
                    </span>
                  </button>
                </div>

                <div className="w-6 h-6 bg-primary rounded-full relative z-10 shadow-[0_0_20px_rgba(245,158,11,0.5)] shrink-0">
                  <div className="absolute inset-0 bg-primary animate-ping rounded-full opacity-30" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            key="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm
              flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.company} certificate`}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative bg-[#111827] border border-white/10
                rounded-2xl p-4 md:p-6 max-w-5xl w-full
                max-h-[90vh] overflow-auto"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Certificate
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {selectedCertificate.company}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate"
                  className="text-gray-300 hover:text-white
                    hover:bg-white/10 rounded-full p-3 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m18 6-12 12M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <img
                src={selectedCertificate.certificate}
                alt={`${selectedCertificate.company} experience certificate`}
                className="block w-full max-h-[65vh] object-contain rounded-lg"
              />

              <div className="flex justify-end mt-5">
                <a
                  href={selectedCertificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold text-sm"
                >
                  Open full-size image ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}