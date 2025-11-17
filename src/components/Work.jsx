const projects = [
  {
    name: 'Lumen AI',
    tag: 'Brand + Website',
  },
  {
    name: 'NestPay',
    tag: 'Product UX',
  },
  {
    name: 'Rover',
    tag: 'Mobile App',
  },
  {
    name: 'ArcadeOS',
    tag: 'Design System',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Selected work</h2>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Work with us →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-xs text-gray-500">{p.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
