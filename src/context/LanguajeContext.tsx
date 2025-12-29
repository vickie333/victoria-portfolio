import React, { createContext, useContext, useState, ReactNode } from 'react';
import enTranslations from '../locales/en/translation.json';
import esTranslations from '../locales/es/translation.json';
import ptTranslations from '../locales/portugues/translation.json';
import type { Language, LanguageContextType, LanguageProviderProps } from '../types/translation';

type Translations = typeof enTranslations;

const translations: Record<Language, Translations> = {
	en: enTranslations,
	es: esTranslations,
	pt: ptTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState<Language>("en");

	const t = (key: string): any => {
		const keys = key.split(".");
		let value: any = translations[language];

		for (const k of keys) {
			if (value === undefined || value === null) return key;
			value = value[k];
		}

		return value !== undefined ? value : key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useTranslation = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useTranslation must be used within a LanguageProvider');
	}
	return context;
};