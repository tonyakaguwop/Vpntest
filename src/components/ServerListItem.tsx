import React from 'react';
import { Globe, Signal } from 'lucide-react';
import { Server } from '../types';

interface ServerListItemProps {
  server: Server;
  isSelected: boolean;
  onSelect: () => void;
}

export const ServerListItem: React.FC<ServerListItemProps> = ({
  server,
  isSelected,
  onSelect,
}) => {
  const getPingColor = (ping: number) => {
    if (ping < 50) return 'text-green-500';
    if (ping < 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <button
      onClick={onSelect}
      className={`w-full p-3 rounded-lg flex items-center justify-between transition-all ${
        isSelected
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-white rounded-full shadow-sm">
          <Globe className="w-5 h-5 text-blue-600" />
        </div>
        <div className="text-left">
          <h3 className="font-medium text-gray-900">{server.name}</h3>
          <p className="text-sm text-gray-500">{server.location}</p>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Signal className={`w-4 h-4 ${getPingColor(server.ping)}`} />
        <span className={`text-sm ${getPingColor(server.ping)}`}>
          {server.ping}ms
        </span>
      </div>
    </button>
  );
};