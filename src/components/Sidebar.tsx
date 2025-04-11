// /components/common/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import {
  Users,
  BarChart,
  Monitor,
  MessageSquare,
  ShoppingBag,
  Truck,
  UserCheck,
  LogOut,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

interface SidebarProps {
  isOpen: boolean;
  userRole: string;
}

export default function Sidebar({ isOpen, userRole }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const adminMenuItems = [
    { name: t('Dashboard'), href: '/admin/dashboard', icon: <BarChart size={20} /> },
    { name: t('Users'), href: '/admin/users', icon: <Users size={20} /> },
    { name: t('Monitoring'), href: '/admin/monitoring', icon: <Monitor size={20} /> },
  ];

  const userMenuItems = [
    { name: t('Dashboard'), href: '/user/dashboard', icon: <BarChart size={20} /> },
    { name: t('Conversations'), href: '/user/conversations', icon: <MessageSquare size={20} /> },
    { name: t('Clients'), href: '/user/clients', icon: <UserCheck size={20} /> },
    { name: t('Sales'), href: '/user/sales', icon: <ShoppingBag size={20} /> },
    { name: t('Shipping'), href: '/user/shipping', icon: <Truck size={20} /> },
    { name: t('Shifts'), href: '/user/shifts', icon: <Users size={20} /> },
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`bg-white text-black transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      } flex flex-col h-full`}
    >
      <div className="flex items-center justify-center h-16 border-b border-primary-light">
        <h1 className={`text-xl font-bold text-black ${!isOpen && 'hidden'}`}>BackOffice</h1>
        {!isOpen && <span className="text-2xl text-black">BO</span>}
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive(item.href)
                ? 'bg-primary text-black font-semibold'
                : 'text-black hover:bg-primary-light'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {isOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-primary-light mt-auto">
        <button
          onClick={() => signOut()}
          className="flex items-center w-full px-4 py-2 text-black hover:bg-primary-light rounded-md transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          {isOpen && <span>{t('Sign Out')}</span>}
        </button>
      </div>
    </aside>
  );
}
