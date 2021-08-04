import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [isAdmin, setIsAdmin] = useState(0);
    return(
        <AuthContext.Provider value={{ isAdmin, setIsAdmin: (isAdmin) => setIsAdmin(isAdmin) }} >
            {props.children}
        </AuthContext.Provider>
    )

}