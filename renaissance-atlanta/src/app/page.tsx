import Image from "next/image";
import MediaCarousel from "@/components/MediaCarousel";
import ArtistImage from "@/components/ArtistImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm text-white p-6 border-b border-amber-600/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logos/RenAtlLogo.jpg"
              alt="Renaissance Atlanta"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-serif italic text-amber-100">Renaissance</h1>
              <p className="text-sm tracking-widest text-amber-400/80">ATLANTA</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-light">6000 Renaissance Pkwy</p>
            <p className="text-xs text-amber-400 tracking-wide">
              Fairburn, GA 30213
            </p>
          </div>
        </div>
      </header>

      {/* Main Event Section */}
      <main className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <h2 className="text-7xl font-serif italic text-amber-100 mb-8 tracking-tight">
            Where Culture Meets Class
          </h2>
          
          {/* Two Levels */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-8">
              <p className="text-sm tracking-[0.3em] text-amber-400 uppercase mb-3">Level 1</p>
              <h3 className="text-2xl font-serif italic text-amber-100 mb-4">Fine Dining & Cocktails</h3>
              <p className="text-amber-200/80">Live Entertainment • Non-Smoking</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-8">
              <p className="text-sm tracking-[0.3em] text-amber-400 uppercase mb-3">Level 2</p>
              <h3 className="text-2xl font-serif italic text-amber-100 mb-4">Studio Upper Room</h3>
              <p className="text-amber-200/80">Fine Cigars • Premium Brandy & Spirits</p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <MediaCarousel />
          <div className="flex flex-col justify-center space-y-6 p-8">
            <h3 className="text-4xl font-serif italic text-amber-100">The Experience</h3>
            <p className="text-xl text-amber-50/90 leading-relaxed">
              Indulge in world-class entertainment within an intimate setting. 
              Savor premium dining, craft cocktails, and our exclusive cigar lounge.
            </p>
            <div className="border-l-4 border-amber-600 pl-6">
              <p className="text-amber-300 italic">"An unforgettable evening awaits"</p>
            </div>
          </div>
        </div>

        {/* Event Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-amber-600/10 blur-3xl"></div>
          <div className="relative">
            <p className="text-sm tracking-[0.3em] text-amber-400 uppercase mb-2">Featured Event</p>
            <h2 className="text-6xl font-serif italic text-amber-100 mb-6">
              Live Entertainment
            </h2>
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white py-6 px-12 rounded-lg inline-block shadow-2xl">
              <p className="text-4xl font-serif italic mb-1">December 13th</p>
              <p className="text-lg tracking-widest uppercase text-amber-100">Special Performance</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-8 p-8">
            <div>
              <p className="text-sm tracking-[0.3em] text-amber-400 uppercase mb-2">Performing Live</p>
              <h3 className="text-5xl font-serif italic text-amber-100 mb-4">
                October London
              </h3>
            </div>
            <p className="text-xl text-amber-50/90 leading-relaxed font-light">
              Join us for an unforgettable evening of soulful melodies and sophisticated vibes.
            </p>
            <div className="space-y-4 border-l-2 border-amber-600/50 pl-6">
              <div>
                <p className="text-xs tracking-widest text-amber-400 uppercase mb-1">Date</p>
                <p className="text-lg text-amber-200">December 13th, 2024</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-amber-400 uppercase mb-1">Location</p>
                <p className="text-lg text-amber-200">6000 Renaissance Pkwy, Fairburn, GA 30213</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-amber-400 uppercase mb-1">Experience</p>
                <p className="text-lg text-amber-200">Kitchen & Cocktails • Cigar Lounge</p>
              </div>
            </div>
          </div>

          <ArtistImage />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 text-white p-12 mt-24 border-t border-amber-600/30">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-serif italic text-amber-100 mb-2">Renaissance</h3>
          <p className="text-sm tracking-widest text-amber-400/80 mb-6">ATLANTA</p>
          <div className="space-y-2 mb-4">
            <p className="text-amber-400 text-sm">Level 1: Fine Dining & Cocktails • Live Entertainment</p>
            <p className="text-amber-400 text-sm">Level 2: Studio Upper Room • Fine Cigars • Premium Brandy & Spirits</p>
          </div>
          <p className="text-amber-200/60 tracking-wide">
            6000 Renaissance Pkwy, Fairburn, GA 30213
          </p>
        </div>
      </footer>
    </div>
  );
}
