import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const token_string = localStorage.getItem('token');
        const token = JSON.parse(token_string);
        return token?.token;
    };
    const saveToken = (token) => {
        console.log('savetoken');
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    }
    const [token, setToken] = useState(getToken());
    return {
        setToken: saveToken,
        token
    }
}