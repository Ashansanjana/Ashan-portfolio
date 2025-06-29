import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container-max py-8">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold gradient-text">
            Ashan Sanajana
          </div>
          <p className="text-slate-400">
            Full Stack & AI Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Ashan Sanajana © 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;