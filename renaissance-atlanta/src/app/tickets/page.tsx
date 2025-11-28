import Image from "next/image";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm text-white p-6 border-b border-amber-600/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-[100px] h-[100px] overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-amber-600/30 rounded-full blur-xl"></div>
              <Image
                src="/images/logos/RenAtlLogo.jpg"
                alt="Renaissance Atlanta"
                width={100}
                height={100}
                className="rounded-full ring-4 ring-amber-600/50 relative scale-[2]"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif italic text-amber-100">
                Renaissance
              </h1>
              <p className="text-xs md:text-sm tracking-widest text-amber-400/80">
                ATLANTA
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Hero */}
        <div className="text-center mb-16 py-12">
          <p className="text-sm tracking-[0.3em] text-amber-400 uppercase mb-2">
            December 20th, 2024
          </p>
          <h1 className="text-4xl md:text-7xl font-serif italic text-amber-100 mb-4 tracking-tight">
            October London
          </h1>
          <p className="text-xl text-amber-300/80">
            Listening Party & Exclusive Experience
          </p>
        </div>

        {/* Ticket Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* VIP Package */}
          <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm border-2 border-amber-600 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-1 text-sm font-bold">
              VIP
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-serif italic text-amber-100 mb-2">
                VIP Experience
              </h2>
              <p className="text-5xl font-bold text-amber-100">$150</p>
            </div>

            <div className="space-y-6">
              {/* VIP Early Access */}
              <div>
                <h3 className="text-xl font-serif italic text-amber-200 mb-3">
                  VIP Early Access (7-8pm)
                </h3>
                <ul className="space-y-2 text-amber-100/90">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Private Meet & Greet with October London</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Photo Opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Custom Plasencia x October London Lighter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Signed October London Item</span>
                  </li>
                </ul>
              </div>

              {/* Main Event */}
              <div>
                <h3 className="text-xl font-serif italic text-amber-200 mb-3">
                  Main Event (8-10pm)
                </h3>
                <ul className="space-y-2 text-amber-100/90">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Delectable Bites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Cocktail Sampling - Bourbon Tasting with October</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Exclusive Cigar Tasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Listening Party: New & Unreleased Music</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg">
              Purchase VIP Ticket
            </button>
          </div>

          {/* General Admission */}
          <div className="bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-serif italic text-amber-100 mb-2">
                General Admission
              </h2>
              <p className="text-5xl font-bold text-amber-100">$50</p>
            </div>

            <div className="space-y-6">
              {/* Main Event */}
              <div>
                <h3 className="text-xl font-serif italic text-amber-200 mb-3">
                  Main Event (8-10pm)
                </h3>
                <ul className="space-y-2 text-amber-100/90">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Delectable Bites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Cocktail Sampling - Bourbon Tasting with October</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Exclusive Cigar Tasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Listening Party: New & Unreleased Music</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-amber-600/30 pt-4">
                <p className="text-sm text-amber-300/70 italic">
                  * Cocktails and cigars available for direct purchase at venue
                </p>
              </div>
            </div>

            <button className="w-full mt-8 bg-amber-600/20 border-2 border-amber-600 text-amber-100 py-4 px-8 rounded-lg font-bold text-lg hover:bg-amber-600/30 transition-all">
              Purchase GA Ticket
            </button>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif italic text-amber-100 mb-4">
            Event Details
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-amber-200">
            <div>
              <p className="text-xs tracking-widest text-amber-400 uppercase mb-2">
                Date
              </p>
              <p className="text-lg">December 20th, 2024</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-amber-400 uppercase mb-2">
                Time
              </p>
              <p className="text-lg">VIP: 7pm | GA: 8pm</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-amber-400 uppercase mb-2">
                Location
              </p>
              <p className="text-lg">6000 Renaissance Pkwy, Fairburn, GA 30213</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 text-white p-12 mt-24 border-t border-amber-600/30">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-serif italic text-amber-100 mb-2">
            Renaissance
          </h3>
          <p className="text-sm tracking-widest text-amber-400/80 mb-6">
            ATLANTA
          </p>
          <p className="text-amber-200/60 tracking-wide">
            6000 Renaissance Pkwy, Fairburn, GA 30213
          </p>
        </div>
      </footer>
    </div>
  );
}
