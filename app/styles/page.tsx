"use client";

import { useState, useEffect } from "react";
import { Search, Heart, Share2, Loader2, Download, User } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Dresses", "Jewelry", "Shoes", "Makeup", "Hair", "Nails"];

// Type definition for Unsplash Image
interface UnsplashImage {
  id: string;
  url: string;
  downloadUrl: string;
  title: string;
  user: string;
  userLink: string;
  heightClass: string;
}

export default function StylesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const handleDownload = async (e: React.MouseEvent, url: string, title: string) => {
    e.stopPropagation();
    try {
      // Fetch the image as a blob to bypass cross-origin download restrictions
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchInput);
    }, 800);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Reset and fetch when category or search changes
  useEffect(() => {
    setImages([]);
    setPage(1);
    setHasMore(true);
    fetchImages(1, true);
  }, [activeCategory, debouncedQuery]);

  const fetchImages = async (pageNumber: number, isNewSearch = false) => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      // Determine search query
      let query = "fashion beauty style"; // default
      if (debouncedQuery) {
        query = debouncedQuery;
      } else if (activeCategory !== "All") {
        query = `fashion ${activeCategory.toLowerCase()}`;
      }

      // Unsplash API Call
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${pageNumber}&per_page=20&client_id=cvDfnCxEo0I9dIHEZA4HnW5Ath8jkdkBjJJk5UNTIuw`
      );
      
      const data = await res.json();
      
      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      // Map Unsplash data to our format
      const newImages = data.results.map((item: any) => {
        // Calculate a random or dynamic height class for masonry effect
        const ratio = item.height / item.width;
        let hClass = "h-[300px]";
        if (ratio > 1.3) hClass = "h-[450px]";
        else if (ratio > 1.1) hClass = "h-[350px]";
        else if (ratio < 0.8) hClass = "h-[250px]";

        return {
          id: item.id + pageNumber + Math.random().toString(), // Ensure unique ID
          url: item.urls.regular,
          downloadUrl: item.urls.full,
          title: item.alt_description || item.description || "Style Inspiration",
          user: item.user.name,
          userLink: item.user.links.html,
          heightClass: hClass,
        };
      });

      setImages(prev => isNewSearch ? newImages : [...prev, ...newImages]);
      setPage(pageNumber + 1);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 px-4 sm:px-8">
      
      {/* Header & Search Bar */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-8">Discover Styles</h1>
        <div className="relative max-w-2xl mx-auto shadow-sm group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-accent transition-colors" />
          </div>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-100 rounded-full text-lg focus:outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/10 transition-all"
            placeholder="Search for dresses, bridal makeup, nail art..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSearchInput(""); // Clear search when clicking category
            }}
            className={`px-5 py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
              activeCategory === cat && !searchInput
                ? "bg-foreground text-background shadow-md scale-105"
                : "bg-white text-foreground border border-gray-200 hover:border-accent hover:text-accent shadow-sm hover:scale-105"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-full relative ${img.heightClass}`}>
                <Image 
                  src={img.url} 
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end gap-2 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => handleDownload(e, img.downloadUrl, img.title)}
                    className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white text-gray-800 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => toggleLike(e, img.id)}
                    className={`p-2.5 rounded-full transition-colors shadow-sm ${
                      likedImages.has(img.id) 
                        ? "bg-red-500 text-white hover:bg-red-600" 
                        : "bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedImages.has(img.id) ? "fill-current" : ""}`} />
                  </button>
                </div>
                <div className="mt-auto transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1 line-clamp-2 capitalize">
                    {img.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 text-sm font-medium hover:underline">
                      {img.user}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading & Empty States */}
        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
          </div>
        )}
        
        {!loading && images.length === 0 && (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No styles found</h3>
            <p className="text-foreground/60 max-w-md mx-auto">
              We couldn't find any images matching your search. Try different keywords or browse our categories.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {!loading && hasMore && images.length > 0 && (
          <div className="flex justify-center py-12">
            <button 
              onClick={() => fetchImages(page)}
              className="px-8 py-3 bg-white border-2 border-gray-200 text-foreground rounded-full font-bold hover:border-accent hover:text-accent transition-colors shadow-sm"
            >
              Load More Styles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
