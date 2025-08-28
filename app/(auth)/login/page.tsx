import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="DocShare Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Share Your Documents Securely & Easily
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          DocShare gives you a secure way to share files with clients, team members, or partners.
        </p>
        <a href="/dashboard">
          <button className="bg-black text-white px-10 py-4 rounded-lg text-lg hover:bg-gray-800 transition duration-300 shadow-lg transform hover:scale-105">
            Get Started for Free
          </button>
        </a>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose DocShare?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Control who can view or download your files and protect your data from leaks.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Know when your document was opened, who viewed it, and how long they spent.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Links</h3>
              <p className="text-gray-600 leading-relaxed">
                Create short, easy-to-remember links for your documents with one-click access revocation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who share their files with confidence and ease.
          </p>
          <a href="/dashboard">
            <button className="bg-white text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
              Start Now
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DocShare. All rights reserved.
      </footer>
    </main>
  );
}
