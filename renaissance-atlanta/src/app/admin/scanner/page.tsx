'use client';

import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function ScannerPage() {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { 
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      },
      false
    );

    scanner.render(onScanSuccess, onScanError);

    async function onScanSuccess(decodedText: string) {
      console.log('Scanned:', decodedText);
      setIsScanning(false);
      
      // Validate ticket
      try {
        const response = await fetch('/api/tickets/validate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ticketId: decodedText })
        });
        
        const result = await response.json();
        setScanResult(result);
        
        // Auto-reset after 3 seconds
        setTimeout(() => {
          setScanResult(null);
          setIsScanning(true);
          scanner.render(onScanSuccess, onScanError);
        }, 3000);
      } catch (error) {
        setScanResult({
          valid: false,
          message: 'Error validating ticket'
        });
      }
    }

    function onScanError(error: string) {
      // Ignore scan errors (happens constantly while scanning)
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-serif italic text-amber-100 mb-2">
            Ticket Scanner
          </h1>
          <p className="text-amber-400">Renaissance Atlanta - December 20th</p>
        </div>

        {/* Scanner */}
        {isScanning && (
          <div className="bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-4 mb-6">
            <div id="reader"></div>
          </div>
        )}

        {/* Scan Result */}
        {scanResult && (
          <div
            className={`p-8 rounded-lg text-center ${
              scanResult.valid
                ? 'bg-green-500'
                : 'bg-red-500'
            }`}
          >
            <div className="text-white">
              <div className="text-6xl mb-4">
                {scanResult.valid ? '✓' : '✗'}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {scanResult.valid ? 'VALID TICKET' : 'INVALID'}
              </h2>
              {scanResult.valid && scanResult.customer && (
                <>
                  <p className="text-2xl mb-2">{scanResult.customer.name}</p>
                  <p className="text-xl">{scanResult.customer.ticketType} Ticket</p>
                </>
              )}
              {!scanResult.valid && (
                <p className="text-xl">{scanResult.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-black/40 backdrop-blur-sm border border-amber-600/30 rounded-lg p-6">
          <h3 className="text-xl font-serif italic text-amber-100 mb-4">
            Instructions
          </h3>
          <ul className="text-amber-200 space-y-2">
            <li>• Point camera at customer's QR code</li>
            <li>• Wait for automatic scan</li>
            <li>• Green = Valid, Red = Invalid</li>
            <li>• Scanner resets automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
