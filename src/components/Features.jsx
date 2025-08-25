import React from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
      iconBg: 'bg-emerald-100',
      title: 'Lightning Fast',
      description: 'Convert entire playlists in seconds. Our optimized algorithm searches and matches songs efficiently across platforms.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      iconBg: 'bg-blue-100',
      title: 'Secure & Private',
      description: 'Your data is safe with us. We use OAuth authentication and don\'t store your personal information or music data.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" strokeWidth={1.5} />,
      iconBg: 'bg-purple-100',
      title: 'Smart Matching',
      description: 'Advanced search algorithms find the best matches for your songs, even handling remixes and alternate versions.'
    }
  ];

  return (
    <div className="pb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose TrackShift?
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The fastest and most reliable way to migrate your music playlists between platforms
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;