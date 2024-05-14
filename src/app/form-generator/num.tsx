
import React, { useState, useEffect } from 'react';
import { getUserForms } from '../actions/getUserForms';

const Num: React.FC = () => {
    const [formCount, setFormCount] = useState<number>(0);

    useEffect(() => {
        const fetchForms = async () => {
            const forms = await getUserForms();
            setFormCount(forms.length);
        };

        fetchForms();
    }, []);

    return <span>{formCount}</span>;
};

export default Num;
