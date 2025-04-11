// /components/common/Navbar.tsx
'use client';

import { Menu, Bell, Search } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';

interface NavbarProps {
  onToggleSidebar: () => void;
  user: {
    name?: string;
    role?: string;
  };
}

export default function Navbar({ onToggleSidebar, user }: NavbarProps) {
  const { t } = useTranslation('common');

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center flex-1 gap-6">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label={t('Toggle Sidebar')}
          >
            <Menu size={24} />
          </button>

          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t('Search') || 'Search...'}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <LanguageSwitcher />

          <button className="p-2 rounded-full text-black hover:bg-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary-dark"></span>
          </button>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center text-black font-medium">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
