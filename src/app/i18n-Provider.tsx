// app/i18n-provider.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import '../i18n'; // Importa la configuración

interface I18nProviderProps {
  children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>;
}