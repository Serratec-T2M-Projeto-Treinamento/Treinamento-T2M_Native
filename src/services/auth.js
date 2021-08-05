import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [isAdmin, setIsAdmin] = useState(0);
    const [enderecos, setEnderecos] = useState({});
    return(
        <AuthContext.Provider value={{ isAdmin, setIsAdmin: (isAdmin) => setIsAdmin(isAdmin),
                                       enderecos, setEnderecos:(enderecos) => setEnderecos(enderecos) }}>
            {props.children}
        </AuthContext.Provider>
    )

}