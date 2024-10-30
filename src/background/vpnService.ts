import { Server } from '../types';

export class VPNService {
  private isConnected: boolean = false;
  private currentServer: Server | null = null;

  async connect(server: Server): Promise<boolean> {
    try {
      // Simulate VPN connection process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set up proxy configuration
      await chrome.proxy.settings.set({
        value: {
          mode: "fixed_servers",
          rules: {
            singleProxy: {
              scheme: "https",
              host: server.id,
              port: 443
            }
          }
        },
        scope: "regular"
      });

      this.isConnected = true;
      this.currentServer = server;
      return true;
    } catch (error) {
      console.error('VPN connection failed:', error);
      return false;
    }
  }

  async disconnect(): Promise<boolean> {
    try {
      // Clear proxy settings
      await chrome.proxy.settings.clear({ scope: 'regular' });
      
      this.isConnected = false;
      this.currentServer = null;
      return true;
    } catch (error) {
      console.error('VPN disconnection failed:', error);
      return false;
    }
  }

  getStatus() {
    return {
      isConnected: this.isConnected,
      currentServer: this.currentServer
    };
  }
}