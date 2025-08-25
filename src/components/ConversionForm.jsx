import React, { useState, useEffect } from 'react';
import { Youtube, ExternalLink, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import axios from 'axios';
import AuthStatus from './AuthStatus';
import GoogleSignInButton from './GoogleSignInButton';
import StatusMessage from './StatusMessage';
import PlaylistLink from './PlaylistLink';

const ConversionForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [convertStatus, setConvertStatus] = useState(null);
  const [youtubePlaylistId, setYoutubePlaylistId] = useState('');

  useEffect(() => {
    // Check if user just signed in from redirect
    const urlParams = new URLSearchParams(window.location.search);
    const signedInParam = urlParams.get('signedIn');
    
    if (signedInParam === 'true') {
      setIsSignedIn(true);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (signedInParam === 'false') {
      setConvertStatus({ type: 'error', message: 'Google authentication failed. Please try again.' });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleGoogleSignIn = () => {
    window.location.href = 'https://trackshift-backend.onrender.com/google/login';
  };

  const handleConvert = async () => {
    if (!spotifyUrl.trim() || !playlistName.trim()) {
      setConvertStatus({ type: 'error', message: 'Please fill in both fields.' });
      return;
    }

    if (!spotifyUrl.includes('spotify.com/playlist/')) {
      setConvertStatus({ type: 'error', message: 'Please enter a valid Spotify playlist URL.' });
      return;
    }

    setIsConverting(true);
    setConvertStatus(null);

    try {
      const response = await axios.post('https://trackshift-backend.onrender.com/convert', {
        spotifyUrl: spotifyUrl.trim(),
        youtubePlaylistName: playlistName.trim(),
      });

      const data = response.data;
      setYoutubePlaylistId(data.youtubePlaylistId);
      setConvertStatus({ 
        type: 'success', 
        message: 'Playlist converted successfully!' 
      });
      // Clear form
      setSpotifyUrl('');
      setPlaylistName('');

    } catch (error) {
      if (error.response) {
        // Server responded with error status
        const errorData = error.response.data;
        if (errorData.error && errorData.error.toLowerCase().includes('quota')) {
          setConvertStatus({ 
            type: 'error', 
            message: "Couldn't convert - YouTube API quota hit. Come back tomorrow!" 
          });
        } else {
          setConvertStatus({ 
            type: 'error', 
            message: errorData.error || 'Failed to convert playlist. Please try again.' 
          });
        }
      } else if (error.request) {
        // Network error
        setConvertStatus({ 
          type: 'error', 
          message: 'Network error. Please check if the server is running.' 
        });
      } else {
        setConvertStatus({ 
          type: 'error', 
          message: 'An unexpected error occurred. Please try again.' 
        });
      }
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="flex items-center justify-center mb-16 pt-8">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <AuthStatus isSignedIn={isSignedIn} />

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Convert Spotify to YouTube
            </h2>
            <p className="text-gray-600">
              Transform your Spotify playlists into YouTube playlists
            </p>
          </div>

          {!isSignedIn ? (
            <GoogleSignInButton onClick={handleGoogleSignIn} />
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spotify Playlist URL
                </label>
                <input
                  type="url"
                  value={spotifyUrl}
                  onChange={(e) => setSpotifyUrl(e.target.value)}
                  placeholder="https://open.spotify.com/playlist/..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  disabled={isConverting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Playlist Name
                </label>
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                  placeholder="My Awesome Playlist"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  disabled={isConverting}
                />
              </div>

              <button
                onClick={handleConvert}
                disabled={isConverting || !spotifyUrl.trim() || !playlistName.trim()}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg flex items-center justify-center space-x-3"
              >
                {isConverting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Converting...</span>
                  </>
                ) : (
                  <>
                    <Youtube className="w-5 h-5" strokeWidth={1.5} />
                    <span>Convert Playlist</span>
                  </>
                )}
              </button>
            </div>
          )}

          <StatusMessage status={convertStatus} />
          <PlaylistLink 
            youtubePlaylistId={youtubePlaylistId} 
            isSuccess={convertStatus?.type === 'success'} 
          />
        </div>
      </div>
    </div>
  );
};

export default ConversionForm;