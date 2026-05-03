import { Camera, Scissors, ShoppingBag, Sparkles, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let trendingImages = [];
  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=trending+fashion+beauty&per_page=6&client_id=cvDfnCxEo0I9dIHEZA4HnW5Ath8jkdkBjJJk5UNTIuw`, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (data.results) {
      trendingImages = data.results;
    }
  } catch (e) {
    console.error("Failed to fetch trending images", e);
  }

  return (
    <div className="bg-background">
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
            Discover your perfect look, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e2b080]">all in one place.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-medium">
            From AI-powered personal styling and inspiration boards, to searching the best local salons and shopping for trending accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/ai-stylist" className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 text-lg">
              <Sparkles className="w-5 h-5" />
              Try AI Stylist Free
            </Link>
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
          <Link href="/styles" className="hidden md:flex px-6 py-2 border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-colors font-medium">
            View All
          </Link>
        </div>

        {/* Dynamic grid simulating Pinterest masonry layout for the homepage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {trendingImages.length > 0 ? (
            trendingImages.map((img: any, index: number) => {
              // Make the 1st and 3rd items row-span-2 for masonry look
              const isLarge = index === 0 || index === 2;
              return (
                <Link href="/styles" key={img.id} className={`rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm ${isLarge ? 'row-span-2' : ''}`}>
                  <Image 
                    src={img.urls.regular} 
                    alt={img.alt_description || img.description || "Trending Style"} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg line-clamp-1 capitalize">
                      {img.alt_description || img.description || "Trending Style"}
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full py-10 text-center text-foreground/50">
              Loading trending inspiration...
            </div>
          )}
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

    </div>
  );
}
