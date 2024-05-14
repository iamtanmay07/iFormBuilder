// FormCountContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getUserForms } from '../actions/getUserForms';

type FormCountContextType = number;

export const FormCountContext = createContext<FormCountContextType>(0); // Default value

interface FormCountProviderProps {
    children: ReactNode;
}

export const FormCountProvider: React.FC<FormCountProviderProps> = ({ children }) => {
    const [formCount, setFormCount] = useState<number>(0);

    useEffect(() => {
        const fetchForms = async () => {
            const forms = await getUserForms();
            setFormCount(forms.length);
        };

        fetchForms();
    }, []);

    return (
        <FormCountContext.Provider value={formCount}>
            {children}
        </FormCountContext.Provider>
    );
};
