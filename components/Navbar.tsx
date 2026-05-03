import { LayoutGrid, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/90 backdrop-blur-xl shadow-sm transition-all">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <LayoutGrid className="w-7 h-7 text-accent" />
        <span className="text-2xl font-bold tracking-wide text-foreground">Glam Grid</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 text-base font-medium text-foreground/80">
        <Link href="/" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Home</Link>
        <Link href="/ai-stylist" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">AI Stylist</Link>
        <Link href="/styles" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Styles</Link>
        <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Salons & Studios</Link>
        <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all">Shop</Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all shadow-sm">
          <User className="w-4 h-4" />
          Sign In
        </button>
      </div>
    </nav>
  );
}
