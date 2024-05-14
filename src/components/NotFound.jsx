import React, {useEffect, useState} from "react";

export function NotFound() {
    const [showMessage, setShowMessage] = useState(true);
    useEffect(() => {
        const showMessageTimeout = setTimeout(() => {
            setShowMessage(false);
            //navigate('/home'); // Naviguer vers la page d'accueil après 3 secondes
        }, 3000);

        return () => {
            clearTimeout(showMessageTimeout);
        };
    }, []);

    return (
        <>
            <div>
                {
                    showMessage &&(
                        <h1>This page does not exist</h1>
                    )
                }
            </div>
        </>
    )
}
