import React from 'react';

const FeatureCard = ({ icon, iconBg, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-shadow">
      <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;