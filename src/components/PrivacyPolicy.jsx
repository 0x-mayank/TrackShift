import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
        <span>Back to TrackShift</span>
      </button>

      {/* Privacy Policy Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 max-w-4xl mx-auto">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-emerald-600" strokeWidth={1.5} />
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At TrackShift, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our service to convert Spotify playlists to YouTube playlists.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in transparency and want you to understand exactly what data we access and how we use it.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-blue-600" strokeWidth={1.5} />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Account Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you sign in with Google, we receive basic profile information including your name, email address, and profile picture. This is used solely for authentication purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">YouTube Access</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We request permission to create and manage playlists on your YouTube account. This allows us to create new playlists based on your Spotify playlists.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Spotify Playlist Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We access publicly available information from Spotify playlists you choose to convert, including song titles, artist names, and album information.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-purple-600" strokeWidth={1.5} />
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Authenticate your identity and provide access to the service</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Create YouTube playlists based on your Spotify playlists</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Search for and match songs between Spotify and YouTube</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Improve our service and fix technical issues</span>
                </li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Storage and Security</h2>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">We Don't Store Your Data</h3>
                <p className="text-emerald-700 leading-relaxed">
                  TrackShift does not permanently store your personal information, playlist data, or authentication tokens. All data is processed in real-time and discarded after the conversion is complete.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your authentication tokens are kept in memory only during the conversion process and are automatically cleared when you close the application or your session expires.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TrackShift integrates with the following third-party services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Google/YouTube</h3>
                  <p className="text-gray-600 text-sm">
                    For authentication and playlist creation. Subject to Google's Privacy Policy.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Spotify</h3>
                  <p className="text-gray-600 text-sm">
                    For accessing public playlist information. Subject to Spotify's Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Revoke access to your Google account at any time through your Google Account settings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Delete any YouTube playlists created by TrackShift</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Stop using the service at any time</span>
                </li>
              </ul>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our practices, please feel free to contact us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This service is provided as-is for educational and personal use. By using TrackShift, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;