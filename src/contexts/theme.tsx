'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
    themeName: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<string>('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('themeName');
        if (storedTheme) {
            setThemeName(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
