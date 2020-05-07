import { useEffect, useState } from 'react';
import { getAllEmployee } from '../api/api';

export default function usePageSetting(){
    const [employee, setEmployee] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getAllEmployee().then(response => {
            setEmployee(response.data);
            setIsLoading(false);
        })
    }, [])
    return [{employee, isLoading}, 
        setEmployee, 
        ()=>setIsLoading(true),
    ()=>setIsLoading(false)
];
}