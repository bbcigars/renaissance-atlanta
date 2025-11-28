'use client';

import { useState } from 'react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone })
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to submit:', error);
    }
    
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
      setPhone('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 to-amber-900 border-2 border-amber-600 rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-400 hover:text-amber-100 text-3xl leading-none"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-serif italic text-amber-100 mb-2">
                Stay in the Loop
              </h2>
              <p className="text-amber-300/80">
                Get exclusive access to VIP events, special offers, and new artist announcements
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-amber-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black/40 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-sm text-amber-400 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(404) 555-1234"
                  className="w-full px-4 py-3 bg-black/40 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-amber-600"
                />
                <p className="text-xs text-amber-300/60 mt-1">
                  Get SMS alerts for last-minute tickets & exclusive offers
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg"
              >
                Join the VIP List
              </button>

              <p className="text-xs text-amber-300/60 text-center">
                By joining, you agree to receive marketing emails and SMS. Unsubscribe anytime.
              </p>
            </form>

            {/* Alternative: SMS Opt-in */}
            <div className="mt-6 pt-6 border-t border-amber-600/30 text-center">
              <p className="text-sm text-amber-300/80 mb-2">
                Prefer text messages?
              </p>
              <p className="text-lg font-bold text-amber-100">
                Text <span className="text-amber-400">RSVP</span> to{' '}
                <span className="text-amber-400">(404) 555-1234</span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-serif italic text-amber-100 mb-2">
              You're In!
            </h3>
            <p className="text-amber-300/80">
              Check your {email && 'email'} {email && phone && '&'} {phone && 'phone'} for exclusive updates
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
