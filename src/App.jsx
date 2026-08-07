import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Music, Download, Globe2, Users, FileClock } from 'lucide-react';

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSaveContact = () => {
    setIsDownloading(true);
    
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lasse Mika Hartmann
TEL;TYPE=CELL:+4917681159655
EMAIL:lassemikahartmann@gmail.com
NOTE:Tech-Nerd | Nymphenburger Gymnasium
URL:https://lassehartmann.vercel.com
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Lasse_Hartmann.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    // Reiner Dark Mode Hintergrund mit dezentem Radial-Verlauf
    <div className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-[#0a0a0a] text-neutral-200 flex flex-col items-center p-4 md:p-8 font-sans antialiased selection:bg-neutral-800 selection:text-white">
      
      <div className="w-full max-w-sm flex flex-col gap-8 z-10 py-8">
        
        {/* 1. Header Bereich */}
        <div className="flex flex-col items-center">
          <div className="relative group mb-6">
            {/* PLATZHALTER FÜR DEIN FOTO
                Wenn du ein Foto hast, nutze stattdessen diesen Code:
                <img src="/dein-foto.jpg" alt="Lasse" className="w-28 h-28 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            */}
            <div className="w-28 h-28 rounded-full bg-neutral-900 border border-neutral-800 shadow-[0_0_40px_rgba(255,255,255,0.03)] flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <span className="text-xl font-light tracking-[0.2em] text-neutral-400">LMH</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-medium tracking-wide text-white mb-2 text-center">
            Lasse Mika Hartmann
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold">
            Tech-Nerd
          </p>
        </div>

        {/* 2. Kontakt Links (JETZT OBEN) */}
        <div className="space-y-3 w-full px-1">
          {/* High-Contrast Action Button - Als wichtigstes Element ganz oben in der Gruppe */}
          <button 
            onClick={handleSaveContact}
            disabled={isDownloading}
            className="w-full mb-4 flex items-center justify-center gap-2 bg-white text-black py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-neutral-200 active:scale-[0.98]"
          >
            {isDownloading ? (
              <span className="text-sm">Speichere...</span>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span className="text-sm">Kontakt im Handy speichern</span>
              </>
            )}
          </button>

          {/* Sekundäre Kontakt-Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://wa.me/4917681159655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white">WhatsApp</span>
            </a>
            
            <a 
              href="https://tiktok.com/@lasse.m.h" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <Music className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white">TikTok</span>
            </a>
            
            <a 
              href="mailto:lassemikahartmann@gmail.com" 
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white">E-Mail</span>
            </a>
            
            <a 
              href="tel:+4917681159655" 
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <Phone className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white">Anrufen</span>
            </a>
          </div>
        </div>

        {/* Subtiler Trennstrich */}
        <div className="flex justify-center py-2">
          <div className="w-12 h-[1px] bg-neutral-800"></div>
        </div>

        {/* 3. Kurze Info */}
        <div className="text-center px-4">
          <p className="text-neutral-400 text-sm leading-relaxed font-light">
            16 Jahre • 11. Klasse Nymphenburger Gymnasium, München. <br />
            Begeistert von Technologie und immer offen für gute Gespräche.
          </p>
        </div>

        {/* 4. Minimalistische Fakten */}
        <div className="space-y-3 px-1">
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors">
            <Globe2 className="w-5 h-5 text-neutral-500 shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-neutral-300 font-light">3 Jahre in England gelebt</span>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors">
            <Users className="w-5 h-5 text-neutral-500 shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-neutral-300 font-light">Habe einen Zwillingsbruder</span>
          </div>
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors">
            <FileClock className="w-5 h-5 text-neutral-500 shrink-0" strokeWidth={1.5} />
            <span className="text-sm text-neutral-300 font-light">Stammbaum reicht ~1000 Jahre zurück</span>
          </div>
        </div>

      </div>
    </div>
  );
}