import React from 'react';
import { ServerListItem } from './ServerListItem';
import { Server } from '../types';

interface ServerListProps {
  servers: Server[];
  selectedServer: Server;
  onServerSelect: (server: Server) => void;
}

export const ServerList: React.FC<ServerListProps> = ({
  servers,
  selectedServer,
  onServerSelect,
}) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Server Locations</h2>
      <div className="space-y-2 max-h-[240px] overflow-y-auto pr-2">
        {servers.map((server) => (
          <ServerListItem
            key={server.id}
            server={server}
            isSelected={server.id === selectedServer.id}
            onSelect={() => onServerSelect(server)}
          />
        ))}
      </div>
    </div>
  );
};