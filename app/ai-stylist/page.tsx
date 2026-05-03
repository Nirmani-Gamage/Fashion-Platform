import { UploadCloud, Image as ImageIcon, Wand2, Sparkles, User, Scissors } from "lucide-react";
import Image from "next/image";

export default function AIStylistPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent-light/30 rounded-full mb-6">
            <Wand2 className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your AI Personal Stylist
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Upload a clear photo of yourself, and our advanced AI will instantly analyze your features to recommend your perfect eyebrow shape, hairstyles, outfits, and accessories.
          </p>
        </div>

        {/* Upload Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="border-2 border-dashed border-gray-200 hover:border-accent hover:bg-accent/5 transition-all rounded-[1.5rem] p-12 text-center cursor-pointer group">
            <div className="w-20 h-20 bg-accent-light/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Drag & Drop your photo</h3>
            <p className="text-foreground/60 mb-8">or click to browse from your device</p>
            <button className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Browse Files
            </button>
            <p className="text-xs text-foreground/40 mt-6">
              Supports JPG, PNG or WEBP. Maximum file size 5MB.
            </p>
          </div>
        </div>

        {/* What to expect section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scissors className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Beauty & Hair</h4>
            <p className="text-sm text-foreground/70">Get eyebrow shape and hairstyle suggestions tailored to your face shape.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Fashion Styles</h4>
            <p className="text-sm text-foreground/70">Discover dress shapes, necklines, and outfit colors that complement your tone.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Accessories</h4>
            <p className="text-sm text-foreground/70">Find the perfect jewelry shapes and sizes to elevate your entire look.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
