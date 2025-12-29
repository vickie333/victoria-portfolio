import type { Dispatch, ReactNode, SetStateAction } from "react";



export type Language = 'en' | 'es' | 'pt';

export interface LanguageContextType {
	/** Current language code, e.g., 'en' or 'es' */
	language: Language;
	/** Setter for the language state */
	setLanguage: Dispatch<SetStateAction<Language>>;
	/** Translation function: accepts a key path and returns the translated string */
	t: (key: string) => any;
}

export interface LanguageProviderProps {
	children: ReactNode;
}
