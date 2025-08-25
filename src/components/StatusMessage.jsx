import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const StatusMessage = ({ status }) => {
  if (!status) return null;

  return (
    <div className={`mt-6 p-4 rounded-xl border ${
      status.type === 'success' 
        ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
        : 'bg-red-50 border-red-200 text-red-800'
    }`}>
      <div className="flex items-center space-x-2">
        {status.type === 'success' ? (
          <CheckCircle className="w-5 h-5 text-emerald-600" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600" />
        )}
        <p className="font-medium">{status.message}</p>
      </div>
    </div>
  );
};

export default StatusMessage;