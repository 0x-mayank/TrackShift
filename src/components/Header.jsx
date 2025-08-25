import React from 'react';
import { PiMusicNoteLight } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <header className="pt-8 pb-4 px-6 flex justify-between items-center max-w-6xl mx-auto w-full mb-4">
      <div className="flex items-center space-x-3 text-3xl">
          <PiMusicNoteLight />
        <h1 className="text-2xl font-bold text-gray-800">TrackShift</h1>
      </div>
      
      <a 
        href="https://github.com/0x-mayank/TrackShift" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 rounded-lg transition-colors text-2xl"
      >
        <FiGithub />
      </a>
    </header>
  );
};

export default Header;