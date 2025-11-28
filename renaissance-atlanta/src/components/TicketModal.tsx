'use client';

import { useState } from 'react';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [cart, setCart] = useState<{ vip: number; ga: number }>({ vip: 0, ga: 0 });

  if (!isOpen) return null;

  const vipPrice = 150;
  const gaPrice = 50;
  const total = cart.vip * vipPrice + cart.ga * gaPrice;

  const handleCheckout = () => {
    // TODO: Integrate with Stripe Checkout
    console.log('Checkout:', cart, 'Total:', total);
    alert('Stripe integration coming soon!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 to-amber-900 border border-amber-600/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-amber-600/30 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-serif italic text-amber-100">October London Tickets</h2>
            <p className="text-sm text-amber-400">December 20th, 2024</p>
          </div>
          <button
            onClick={onClose}
            className="text-amber-400 hover:text-amber-100 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* VIP Ticket */}
          <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-2 border-amber-600 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-serif italic text-amber-100">VIP Experience</h3>
                  <span className="bg-amber-600 text-white px-2 py-1 text-xs font-bold rounded">VIP</span>
                </div>
                <p className="text-3xl font-bold text-amber-100">${vipPrice}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCart({ ...cart, vip: Math.max(0, cart.vip - 1) })}
                  className="w-8 h-8 bg-amber-600/50 hover:bg-amber-600 rounded text-white font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-amber-100 w-8 text-center">{cart.vip}</span>
                <button
                  onClick={() => setCart({ ...cart, vip: cart.vip + 1 })}
                  className="w-8 h-8 bg-amber-600 hover:bg-amber-700 rounded text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-amber-200 mb-1">VIP Early Access (7-8pm)</p>
                <ul className="space-y-1 text-amber-100/80 ml-4">
                  <li>• Private Meet & Greet with October London</li>
                  <li>• Photo Opportunity</li>
                  <li>• Custom Plasencia x October London Lighter</li>
                  <li>• Signed October London Item</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-amber-200 mb-1">Main Event (8-10pm)</p>
                <ul className="space-y-1 text-amber-100/80 ml-4">
                  <li>• Delectable Bites</li>
                  <li>• Cocktail Sampling - Bourbon Tasting with October</li>
                  <li>• Exclusive Cigar Tasting</li>
                  <li>• Listening Party: New & Unreleased Music</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GA Ticket */}
          <div className="bg-black/40 border border-amber-600/30 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-serif italic text-amber-100 mb-2">General Admission</h3>
                <p className="text-3xl font-bold text-amber-100">${gaPrice}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCart({ ...cart, ga: Math.max(0, cart.ga - 1) })}
                  className="w-8 h-8 bg-amber-600/50 hover:bg-amber-600 rounded text-white font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-amber-100 w-8 text-center">{cart.ga}</span>
                <button
                  onClick={() => setCart({ ...cart, ga: cart.ga + 1 })}
                  className="w-8 h-8 bg-amber-600 hover:bg-amber-700 rounded text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-amber-200 mb-1">Main Event (8-10pm)</p>
                <ul className="space-y-1 text-amber-100/80 ml-4">
                  <li>• Delectable Bites</li>
                  <li>• Cocktail Sampling - Bourbon Tasting with October</li>
                  <li>• Exclusive Cigar Tasting</li>
                  <li>• Listening Party: New & Unreleased Music</li>
                </ul>
              </div>
              <p className="text-xs text-amber-300/70 italic">
                * Cocktails and cigars available for direct purchase at venue
              </p>
            </div>
          </div>
        </div>

        {/* Footer / Checkout */}
        <div className="sticky bottom-0 bg-black/90 backdrop-blur-sm border-t border-amber-600/30 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-amber-400">Total</p>
              <p className="text-4xl font-bold text-amber-100">${total}</p>
            </div>
            <button
              onClick={handleCheckout}
              disabled={total === 0}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-12 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout
            </button>
          </div>
          <p className="text-xs text-amber-300/60 text-center">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
