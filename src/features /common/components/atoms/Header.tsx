'use client';

import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { SidebarTrigger } from "@/shadcn/components/ui/sidebar";
import { Menu, Plus, User, Settings, Sidebar } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-200">
      {/* Left side - Menu and New Chat */}
      <div className="flex items-center space-x-3">
        <SidebarTrigger/>
      </div>

      {/* Center - Title */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-semibold text-white">ANIME-SOCIAL-MEDIA</h1>
      </div>

      {/* Right side - User menu */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="p-2">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="p-2">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}