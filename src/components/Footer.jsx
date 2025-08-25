import React from 'react';

const Footer = ({ onPrivacyClick }) => {
  return (
    <footer className="py-6 text-center">
      <p className="text-gray-600 text-sm mb-2">
        Convert your favorite Spotify playlists to YouTube
      </p>
      <button 
        onClick={onPrivacyClick}
        className="text-gray-500 hover:text-gray-700 text-xs underline transition-colors"
      >
        Privacy Policy
      </button>
    </footer>
  );
};

export default Footer;