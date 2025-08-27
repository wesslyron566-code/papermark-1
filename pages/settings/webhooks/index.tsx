// pages/index.tsx
import { CheckCircle, Lock, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 -z-10" />
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-extrabold mb-6 tracking-tight">
          Share Documents <span className="text-blue-600">Beautifully</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern way to create, share and track documents. Inspired by Papermark, designed for your brand.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex justify-center gap-4 mb-12">
          <a href="#features" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition">Get Started</a>
          <a href="#pricing" className="px-8 py-3 border border-gray-300 font-semibold rounded-xl hover:bg-gray-100 transition">Learn More</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="max-w-5xl mx-auto">
          <img src="https://dummyimage.com/1000x600/ffffff/000000.png&text=Your+App+Screenshot" alt="App Preview" className="rounded-2xl shadow-2xl border border-gray-200" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">Why Choose Us?</motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[ 
            { icon: Zap, title: "Blazing Fast", desc: "Optimized performance ensures smooth and lightning-fast browsing." },
            { icon: Lock, title: "Secure & Private", desc: "Enterprise-grade encryption to keep your documents safe." },
            { icon: Globe, title: "Global Access", desc: "Accessible across devices with a consistent and modern design." }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3, duration: 0.8 }} viewport={{ once: true }} className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <f.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">Simple & Transparent Pricing</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Starter", price: "Free", features: ["Up to 3 documents", "Basic analytics", "Community support"], highlight: false },
            { title: "Pro", price: "$12/mo", features: ["Unlimited documents","Advanced analytics","Custom branding","Priority support"], highlight: true },
            { title: "Enterprise", price: "Custom", features: ["Unlimited everything","Dedicated account manager","SSO & Enterprise features","24/7 support"], highlight: false }
          ].map((plan,i)=>(
            <motion.div key={i} initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} transition={{ delay:i*0.3,duration:0.8 }} viewport={{ once:true }} className={`p-8 rounded-2xl shadow-lg border ${plan.highlight?"bg-blue-600 text-white scale-105 shadow-2xl":"bg-gray-50"}`}>
              <h3 className={`text-2xl font-bold mb-4 ${plan.highlight?"text-white":"text-gray-900"}`}>{plan.title}</h3>
              <p className={`text-3xl font-extrabold mb-6 ${plan.highlight?"text-white":"text-gray-800"}`}>{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f,j)=><li key={j} className="flex items-center gap-2"><CheckCircle className={`w-5 h-5 ${plan.highlight?"text-white":"text-blue-600"}`} />{f}</li>)}
              </ul>
              <a href="#" className={`block text-center py-3 px-6 rounded-xl font-semibold transition ${plan.highlight?"bg-white text-blue-600 hover:bg-gray-100":"bg-blue-600 text-white hover:bg-blue-700"}`}>
                {plan.highlight?"Get Pro":"Choose Plan"}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-14">Trusted by teams around the world</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {quote:"Papermark transformed how we share documents with clients. The analytics are a game changer!", name:"Sarah Johnson", role:"Product Manager at Acme Inc.", img:"https://randomuser.me/api/portraits/women/44.jpg"},
            {quote:"Super clean and easy to use. Our sales team saves hours every week thanks to Papermark.", name:"David Lee", role:"Head of Sales at Growthify", img:"https://randomuser.me/api/portraits/men/32.jpg"},
            {quote:"Finally a modern, secure way to share sensitive documents. Highly recommended!", name:"Maria Gomez", role:"CEO at InnovateX", img:"https://randomuser.me/api/portraits/women/68.jpg"}
          ].map((t,i)=>(
            <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.3,duration:0.8}} viewport={{once:true}} className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-300 text-center">
        <p>© {new Date().getFullYear()} MyProject. All rights reserved.</p>
      </footer>
    </div>
  );
}
