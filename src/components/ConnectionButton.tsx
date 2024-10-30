import React from 'react';
import { Power } from 'lucide-react';

interface ConnectionButtonProps {
  isConnected: boolean;
  onToggleConnection: () => void;
}

export const ConnectionButton: React.FC<ConnectionButtonProps> = ({
  isConnected,
  onToggleConnection,
}) => {
  return (
    <button
      onClick={onToggleConnection}
      className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
        isConnected
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      <Power className="w-5 h-5" />
      <span className="font-medium">{isConnected ? 'Disconnect' : 'Connect Now'}</span>
    </button>
  );
};