import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

interface StatusIndicatorProps {
  isConnected: boolean;
  currentServer: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isConnected, currentServer }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`p-3 rounded-full ${isConnected ? 'bg-green-100' : 'bg-red-100'}`}>
        {isConnected ? (
          <Shield className="w-6 h-6 text-green-600" />
        ) : (
          <AlertCircle className="w-6 h-6 text-red-600" />
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">
          {isConnected ? 'Protected' : 'Unprotected'}
        </h2>
        <p className="text-sm text-gray-600">
          {isConnected ? `Connected to ${currentServer}` : 'Not connected'}
        </p>
      </div>
    </div>
  );
};