import React from 'react';
import { ExternalLink } from 'lucide-react';

const PlaylistLink = ({ youtubePlaylistId, isSuccess }) => {
  if (!youtubePlaylistId || !isSuccess) return null;

  return (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
      <div className="flex items-center justify-between">
        <p className="text-blue-800 font-medium">Your YouTube playlist:</p>
        <a
          href={`https://www.youtube.com/playlist?list=${youtubePlaylistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span className="text-sm">Open</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PlaylistLink;