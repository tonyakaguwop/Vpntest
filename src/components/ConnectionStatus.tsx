import React from 'react';
import { Power, Shield, AlertCircle } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { ConnectionButton } from './ConnectionButton';

interface ConnectionStatusProps {
  isConnected: boolean;
  currentServer: string;
  onToggleConnection: () => void;
}

export const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  isConnected,
  currentServer,
  onToggleConnection,
}) => {
  return (
    <div className="p-4 space-y-4">
      <StatusIndicator isConnected={isConnected} currentServer={currentServer} />
      <ConnectionButton isConnected={isConnected} onToggleConnection={onToggleConnection} />
    </div>
  );
};