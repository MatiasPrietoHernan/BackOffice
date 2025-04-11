'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useTranslation } from "react-i18next";
import '@/lib/i18n'; // Ajusta la ruta según donde hayas colocado tu archivo i18n.ts

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const { t, i18n } = useTranslation();
  
  // Este efecto es opcional, para asegurarse de que i18n está listo
  useEffect(() => {
    // Puedes manejar la detección de idioma aquí si es necesario
    // Por ejemplo, obtener el idioma de localStorage o de la URL
    const pathname = window.location.pathname;
    const detectedLocale = pathname.split('/')[1];
    
    if (['en', 'es'].includes(detectedLocale) && detectedLocale !== i18n.language) {
      i18n.changeLanguage(detectedLocale);
    }
  }, [i18n]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const user = {
    name: "Boludito",
    role: "user",
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} userRole={user.role} />
      <div className="flex flex-col flex-1">
        <Navbar onToggleSidebar={toggleSidebar} user={user} />
        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}