import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const AuthStatus = ({ isSignedIn }) => {
  return (
    <div className="mb-6 flex items-center justify-center">
      <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
        isSignedIn 
          ? 'bg-emerald-100 text-emerald-700' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        {isSignedIn ? (
          <>
            <CheckCircle className="w-4 h-4" />
            <span>Signed in with Google</span>
          </>
        ) : (
          <>
            <XCircle className="w-4 h-4" />
            <span>Not signed in</span>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthStatus;