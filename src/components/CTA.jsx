export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-fuchsia-300/30 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Have a project in mind?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">Tell us a little about your goals and timeline. We’ll get back within 24 hours.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Your name" />
            <input className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Email" type="email" />
            <input className="sm:col-span-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Company" />
            <textarea rows="4" className="sm:col-span-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Tell us about your project" />
            <button className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
