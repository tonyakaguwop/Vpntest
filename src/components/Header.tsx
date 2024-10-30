import React from 'react';
import { Shield, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="flex items-center space-x-2">
        <Shield className="w-6 h-6 text-white" />
        <h1 className="text-xl font-bold text-white">SecureVPN Pro</h1>
      </div>
      <button className="p-2 rounded-full hover:bg-blue-600 transition-colors">
        <Settings className="w-5 h-5 text-white" />
      </button>
    </header>
  );
};