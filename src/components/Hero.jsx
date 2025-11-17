import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-16 w-[520px] h-[520px] bg-fuchsia-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-[520px] h-[520px] bg-blue-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Make up ideas. Transform them into brands.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 max-w-2xl"
            >
              Mackupstudio is a brand and product design studio crafting standout identities, delightful websites, and sharp product experiences for startups and teams that want to move fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800">Start a project</a>
              <a href="#work" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold border border-gray-200 hover:bg-gray-50">See our work</a>
            </motion.div>

            <div className="mt-8 text-xs uppercase tracking-widest text-gray-500">Trusted by founders at</div>
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80">
              {['Atlas', 'Nimbus', 'Kite', 'Glacier', 'Minty', 'Verse'].map((brand) => (
                <div key={brand} className="text-sm text-gray-600 bg-white/60 rounded-md px-3 py-2 text-center border border-gray-100">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-fuchsia-100 via-white to-blue-100" />
              <div className="absolute inset-0 p-5 flex flex-col gap-3">
                <div className="bg-white/90 rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="h-3 w-20 bg-gray-900 rounded-full" />
                  <div className="mt-2 h-2 w-40 bg-gray-300 rounded-full" />
                </div>
                <div className="ml-auto bg-white/90 rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="h-3 w-24 bg-gray-900 rounded-full" />
                  <div className="mt-2 h-2 w-36 bg-gray-300 rounded-full" />
                </div>
                <div className="bg-white/90 rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="h-3 w-28 bg-gray-900 rounded-full" />
                  <div className="mt-2 h-2 w-32 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
