"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black/20 border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile-first layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌍</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Earth Zoom Out AI
              </h3>
            </div>
            
            <p className="text-gray-400 mb-4 max-w-md mx-auto md:mx-0 text-sm leading-relaxed">
              <strong>Earth zoom out free</strong> generator! Create stunning <strong>earth zoom out effects</strong> and
              <strong>earth zoom out to universe</strong> videos with AI. Transform photos into epic <strong>earth zoom effects</strong> -
              completely <strong>gratis</strong>!
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63a5.888 5.888 0 00-2.126 1.384 5.888 5.888 0 00-1.384 2.126C.333 4.73.131 5.493.072 6.711.013 7.929 0 8.396 0 12.017s.013 4.088.072 5.306c.059 1.218.261 1.981.558 2.654a5.888 5.888 0 001.384 2.126 5.888 5.888 0 002.126 1.384c.673.297 1.436.499 2.654.558 1.218.059 1.685.072 5.306.072s4.088-.013 5.306-.072c1.218-.059 1.981-.261 2.654-.558a5.888 5.888 0 002.126-1.384 5.888 5.888 0 001.384-2.126c.297-.673.499-1.436.558-2.654.059-1.218.072-1.685.072-5.306s-.013-4.088-.072-5.306c-.059-1.218-.261-1.981-.558-2.654a5.888 5.888 0 00-1.384-2.126A5.888 5.888 0 0016.971.63C16.298.333 15.535.131 14.317.072 13.099.013 12.632 0 12.017 0zm0 2.161c3.549 0 3.97.014 5.37.072 1.296.059 2 .274 2.469.456.62.241 1.063.529 1.527.994.465.464.753.907.994 1.527.182.469.397 1.173.456 2.469.058 1.4.072 1.821.072 5.37s-.014 3.97-.072 5.37c-.059 1.296-.274 2-.456 2.469a4.108 4.108 0 01-.994 1.527c-.464.465-.907.753-1.527.994-.469.182-1.173.397-2.469.456-1.4.058-1.821.072-5.37.072s-3.97-.014-5.37-.072c-1.296-.059-2-.274-2.469-.456a4.108 4.108 0 01-1.527-.994 4.108 4.108 0 01-.994-1.527c-.182-.469-.397-1.173-.456-2.469-.058-1.4-.072-1.821-.072-5.37s.014-3.97.072-5.37c.059-1.296.274-2 .456-2.469.241-.62.529-1.063.994-1.527.464-.465.907-.753 1.527-.994.469-.182 1.173-.397 2.469-.456 1.4-.058 1.821-.072 5.37-.072z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd"/>
                  <path d="M18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs text-center md:text-left">
              <p>&copy; 2025 Earth Zoom Out AI - Free Earth Zoom Out Effect Generator. All rights reserved.</p>
            </div>
            
            {/* SEO Keywords */}
            <div className="text-gray-500 text-xs text-center">
              <p className="hidden md:block">
                <strong>earth zoom out free</strong> • <strong>earth zoom out effect</strong> • <strong>earth zoom effect</strong> • <strong>earth zoom out gratis</strong> • <strong>earth zoom out effect free</strong> • <strong>earth zoom out ai</strong> • <strong>earth zoom</strong> • <strong>zoom earth live</strong> • <strong>earth zoom out to universe</strong>
              </p>
              <p className="md:hidden">
                <strong>Earth Zoom Out Free</strong> - AI Effect Generator
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
