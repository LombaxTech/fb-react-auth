import React, { useState, useEffect, createContext } from "react";
import { auth } from "./firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if (user) return setUser(user);
            return setUser(null);
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    );
};
