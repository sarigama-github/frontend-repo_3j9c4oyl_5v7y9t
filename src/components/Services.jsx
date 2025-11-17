import { Palette, Rocket, Globe, Layers } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Distinctive visual identities that express who you are and why it matters.'
  },
  {
    icon: Globe,
    title: 'Web & Marketing Sites',
    desc: 'Fast, SEO-friendly websites that convert visitors into customers.'
  },
  {
    icon: Layers,
    title: 'Product Design',
    desc: 'Intuitive UX/UI for web and mobile products your users will love.'
  },
  {
    icon: Rocket,
    title: 'Design Sprints',
    desc: 'Zero-to-one prototypes to validate ideas in days, not months.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">What we do</h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">We partner with startups and brands to design identities, ship websites, and build product experiences that move the needle.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
