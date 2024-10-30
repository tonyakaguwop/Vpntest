import React, { useState } from 'react';
import { Header } from './components/Header';
import { ConnectionStatus } from './components/ConnectionStatus';
import { ServerList } from './components/ServerList';
import { Server } from './types';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>({
    id: 'us-east',
    name: 'US East',
    location: 'New York',
    ping: 45
  });

  const handleToggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="w-[350px] bg-white">
      <Header />
      <main className="p-4 space-y-6">
        <ConnectionStatus
          isConnected={isConnected}
          currentServer={selectedServer.name}
          onToggleConnection={handleToggleConnection}
        />
        <ServerList
          servers={[
            { id: 'us-east', name: 'US East', location: 'New York', ping: 45 },
            { id: 'us-west', name: 'US West', location: 'Los Angeles', ping: 78 },
            { id: 'eu-central', name: 'EU Central', location: 'Frankfurt', ping: 112 },
            { id: 'asia-east', name: 'Asia East', location: 'Tokyo', ping: 156 }
          ]}
          selectedServer={selectedServer}
          onServerSelect={setSelectedServer}
        />
      </main>
    </div>
  );
}

export default App;