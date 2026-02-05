import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      {/* Global Network Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="heading-md text-center text-white mb-4">Our Global Network</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Part of a worldwide digital ecosystem delivering innovative solutions across continents
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://pacificwavedigital.com" target="_blank" rel="noopener noreferrer" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-vibrant-orange/50">
              <span className="text-3xl mb-3 block">🇻🇺</span>
              <h4 className="font-display font-bold text-lg text-white group-hover:text-vibrant-orange transition-colors">Pacific Wave Digital</h4>
              <p className="text-gray-400 text-sm mt-1">Vanuatu</p>
              <p className="text-gray-500 text-xs mt-2">Digital Innovation for the Pacific</p>
            </a>
            <a href="https://globaldigitalprime.com" target="_blank" rel="noopener noreferrer" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-vibrant-orange/50">
              <span className="text-3xl mb-3 block">🌐</span>
              <h4 className="font-display font-bold text-lg text-white group-hover:text-vibrant-orange transition-colors">Global Digital Prime</h4>
              <p className="text-gray-400 text-sm mt-1">USA &amp; Indonesia</p>
              <p className="text-gray-500 text-xs mt-2">Enterprise Digital Solutions Worldwide</p>
            </a>
            <a href="https://rapidentrepreneurs.com" className="group bg-vibrant-orange/10 rounded-xl p-6 border border-vibrant-orange/30 hover:border-vibrant-orange transition-all duration-300">
              <span className="text-3xl mb-3 block">🇬🇭</span>
              <h4 className="font-display font-bold text-lg text-vibrant-orange">Rapid Entrepreneurs</h4>
              <p className="text-gray-400 text-sm mt-1">Ghana</p>
              <p className="text-gray-500 text-xs mt-2">Empowering African Business Growth</p>
            </a>
            <a href="https://akwaabaai.com" target="_blank" rel="noopener noreferrer" className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-vibrant-orange/50">
              <span className="text-3xl mb-3 block">🇬🇭</span>
              <h4 className="font-display font-bold text-lg text-white group-hover:text-vibrant-orange transition-colors">Akwaaba AI</h4>
              <p className="text-gray-400 text-sm mt-1">Ghana</p>
              <p className="text-gray-500 text-xs mt-2">AI-Powered Business Communication for Africa</p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-vibrant-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">Rapid</span>
                <span className="font-display font-bold text-lg text-vibrant-orange"> Entrepreneurs</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering African entrepreneurs and businesses with cutting-edge digital solutions. Based in Accra, serving all of West Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/rapidghana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vibrant-orange transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="https://linkedin.com/company/rapid-entrepreneurs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vibrant-orange transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://facebook.com/rapidghana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vibrant-orange transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#web-development" className="text-gray-400 hover:text-vibrant-orange transition-colors">Web Development</Link></li>
              <li><Link href="/services#mobile-apps" className="text-gray-400 hover:text-vibrant-orange transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#e-commerce" className="text-gray-400 hover:text-vibrant-orange transition-colors">E-Commerce Solutions</Link></li>
              <li><Link href="/services#digital-marketing" className="text-gray-400 hover:text-vibrant-orange transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services#fintech" className="text-gray-400 hover:text-vibrant-orange transition-colors">Fintech &amp; Mobile Money</Link></li>
              <li><Link href="/services#ai-solutions" className="text-gray-400 hover:text-vibrant-orange transition-colors">AI Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-vibrant-orange transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-vibrant-orange transition-colors">Products</Link></li>
              <li><Link href="/success-stories" className="text-gray-400 hover:text-vibrant-orange transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-vibrant-orange transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-vibrant-orange transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-vibrant-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-vibrant-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-vibrant-orange mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-gray-400">14 Independence Avenue,<br />East Legon, Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vibrant-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-gray-400">+233 30 274 5000</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-vibrant-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-gray-400">hello@rapidentrepreneurs.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Rapid Entrepreneurs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-vibrant-orange transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-vibrant-orange transition-colors">Terms</Link>
              <span className="text-gray-600">Made with ❤️ in Accra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
