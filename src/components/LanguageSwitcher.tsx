'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import i18n from '@/lib/i18n';  // Importación directa de la instancia i18n

const locales = {
  es: 'Español',
  en: 'English',
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');

  // Sincroniza el estado con i18n.language
  useEffect(() => {
    setCurrentLang(i18n.language || 'en');
  }, [i18n.language]);

  const switchLanguage = (locale: string) => {
    if (locale === currentLang) return setIsOpen(false);

    i18n.changeLanguage(locale);
    setCurrentLang(locale);

    // Manejo más seguro de la navegación
    try {
      // Si hay un patrón de idioma en la ruta, reemplázalo
      if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) {
        const newPath = `/${locale}${pathname.substring(3)}`;
        router.push(newPath);
      } else if (pathname === '/en' || pathname === '/es') {
        router.push(`/${locale}`);
      } else {
        // Si la ruta no tiene patrón de idioma, simplemente mantén la misma ruta
        // o agrega el prefijo de idioma si tu aplicación lo requiere
        router.push(pathname);
      }
    } catch (error) {
      console.error('Error al cambiar de ruta:', error);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-black bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <Globe size={16} />
        <span>{locales[currentLang as keyof typeof locales] || locales.en}</span>
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
          {Object.entries(locales).map(([locale, label]) => (
            <li key={locale}>
              <button
                onClick={() => switchLanguage(locale)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 ${
                  locale === currentLang ? 'font-semibold' : ''
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}