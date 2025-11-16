'use client';

import { motion } from 'framer-motion';

export default function LogoCloud() {
  const logos = [
    { name: 'Next.js', text: 'Next.js' },
    { name: 'React', text: 'React' },
    { name: 'TypeScript', text: 'TypeScript' },
    { name: 'Tailwind', text: 'Tailwind' },
    { name: 'Vercel', text: 'Vercel' },
    { name: 'Framer', text: 'Framer' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            信頼のテクノロジーパートナー
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex items-center justify-center w-full h-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors filter grayscale hover:grayscale-0">
                {logo.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
