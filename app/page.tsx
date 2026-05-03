import { Camera, Scissors, ShoppingBag, Sparkles, MapPin, Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/90 backdrop-blur-xl shadow-sm transition-all">
        <div className="flex items-center gap-2 cursor-pointer">
          <Sparkles className="w-7 h-7 text-accent" />
          <span className="text-2xl font-bold tracking-wide text-foreground">Aura</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-base font-medium text-foreground/80">
          <a href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">AI Stylist</a>
          <a href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Styles</a>
          <a href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Salons & Studios</a>
          <a href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Shop</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all shadow-sm">
            <User className="w-4 h-4" />
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Container with Background */}
      <div className="relative overflow-hidden pt-24">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop" 
            alt="Stylish Woman Fashion Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/40 via-[#faf9f6]/80 to-[#faf9f6]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-accent font-medium text-sm mb-6 border border-accent/20 shadow-sm">
            Your Ultimate Beauty & Fashion Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Discover your perfect look, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e2b080]">all in one place.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-medium">
            From AI-powered personal styling and inspiration boards, to searching the best local salons and shopping for trending accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 text-lg">
              <Sparkles className="w-5 h-5" />
              Try AI Stylist Free
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-foreground rounded-full font-medium border border-gray-200 hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2 text-lg shadow-sm">
              <Search className="w-5 h-5" />
              Explore Styles
            </button>
          </div>
        </section>
      </div>

      {/* Services Grid */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Everything you need to glow up</h2>
              <p className="text-foreground/70 text-lg">Four powerful tools designed to elevate your personal style.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-xl hover:shadow-accent/5 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent-light/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Personal Stylist</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Upload a photo and let our AI suggest the perfect eyebrow shape, dresses, and matching jewelry for your unique features.
              </p>
              <a href="#" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Try it out &rarr;
              </a>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-xl hover:shadow-accent/5 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent-light/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Salons & Studios</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Find and book top-rated beauty salons, professional photography studios, and stunning photo locations near you.
              </p>
              <a href="#" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Explore local &rarr;
              </a>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-xl hover:shadow-accent/5 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent-light/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Shop Accessories</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Instantly buy the exact necklaces, earrings, frocks, and shoes recommended by your AI stylist from verified shops.
              </p>
              <a href="#" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Start shopping &rarr;
              </a>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-3xl bg-background border border-gray-100 hover:shadow-xl hover:shadow-accent/5 transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-accent-light/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Style Inspiration</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Scroll through endless, Pinterest-style moodboards of trending outfits, makeup looks, and aesthetic photoshoot ideas.
              </p>
              <a href="#" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Get inspired &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sneak Peek / Masonry Placeholder */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Inspiration</h2>
            <p className="text-foreground/70">Discover what's hot right now in the fashion world.</p>
          </div>
          <button className="hidden md:flex px-6 py-2 border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-colors font-medium">
            View All
          </button>
        </div>
        
        {/* Simple grid to simulate Pinterest masonry layout for the homepage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="rounded-3xl row-span-2 overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1515347619362-7494eb7c9bf1?q=80&w=600&auto=format&fit=crop" alt="Summer Dresses" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Summer Dresses</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop" alt="Bridal Makeup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Bridal Makeup</span>
            </div>
          </div>
          <div className="rounded-3xl row-span-2 overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop" alt="Gold Jewelry" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Gold Jewelry</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1516483638261-f4dafaf00bc6?q=80&w=600&auto=format&fit=crop" alt="Photo Locations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Photo Locations</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop" alt="Nail Art" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Nail Art</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600&auto=format&fit=crop" alt="Eyebrow Shapes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium text-lg">Eyebrow Shapes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Discovery Callout */}
      <section className="px-8 py-24 bg-accent-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Find the best near you</h2>
          <p className="text-xl text-foreground/70 mb-10">
            Looking for a studio for your next photoshoot? Or a top-rated salon for that exact hairstyle the AI recommended? We've got you covered.
          </p>
          <div className="flex bg-white rounded-full p-2 max-w-xl mx-auto shadow-sm border border-gray-100">
            <input 
              type="text" 
              placeholder="Search salons, studios, shops..." 
              className="flex-1 bg-transparent px-6 outline-none text-foreground"
            />
            <button className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fdfbf9] border-t border-accent-light/50 py-6 px-8 text-foreground/70 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold tracking-wide text-foreground">Aura</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Your ultimate destination for AI-powered styling, local beauty discovery, and premium fashion shopping.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white rounded-full hover:text-accent shadow-sm transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-accent shadow-sm transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-accent shadow-sm transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">AI Personal Stylist</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Find Local Salons</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Book Photo Studios</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shop Accessories</a></li>
            </ul>
          </div>

          {/* Inspiration */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Inspiration</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Trending Outfits</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bridal Makeup Ideas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Beautiful Locations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Style Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-accent-light/50 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Aura Fashion & Beauty. All rights reserved.</p>
          <p>Designed with <span className="text-accent">♥</span> for your perfect look.</p>
        </div>
      </footer>
    </div>
  );
}
