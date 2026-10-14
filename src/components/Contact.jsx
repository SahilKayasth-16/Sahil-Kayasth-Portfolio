
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

const LinkedInIcon = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] mb-4 uppercase"
          >
            Contact
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Let’s Connect
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
          >
            Open to developer roles, freelance work, and meaningful
            collaborations. Feel free to reach out through email or social
            platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'sahilk16.sk@gmail.com',
              link: 'mailto:sahilk16.sk@gmail.com',
              color: 'hover:text-blue-400',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Surat, Gujarat, IND',
              link: 'https://maps.app.goo.gl/Ep8WwghPHj41sKkn8',
              color: 'hover:text-red-400',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+91 8320727731',
              link: 'tel:+918320727731',
              color: 'hover:text-green-400',
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.label === 'Location' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark-300 transition-all mb-6">
                <item.icon size={32} />
              </div>

              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                {item.label}
              </p>

              <p className={`text-xl font-bold transition-colors ${item.color}`}>
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            {
              icon: SiGithub,
              url: 'https://github.com/SahilKayasth-16',
              label: 'GitHub',
            },
            {
              icon: LinkedInIcon,
              url: 'https://www.linkedin.com/in/sahil-kayasth-388bb2228/',
              label: 'LinkedIn',
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-primary hover:-translate-y-1 transition-all group"
              title={social.label}
            >
              <social.icon size={28} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
