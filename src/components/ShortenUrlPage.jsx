import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();
    const [error, setError] = useState('');

    useEffect(() => {
        if (url) {
            try {
                window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
            } catch (error) {
                alert("URL expired");
                console.log("error ", error)
            }
        } else {
            alert("URL expired");
            console.log("error ", error)
        }
    }, [url]);

    return <p>Redirecting...</p>;
}

export default ShortenUrlPage;
