export interface Server {
  id: string;
  name: string;
  location: string;
  ping: number;
}

export interface VPNStatus {
  isConnected: boolean;
  currentServer: Server | null;
}

export interface ConnectionStats {
  bytesTransferred: number;
  uptime: number;
  lastConnected: Date | null;
}