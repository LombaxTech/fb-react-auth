import React, { useState, useContext } from "react";
import { auth } from "./firebase.js";

import { AuthContext } from "./AuthContext";

export default function Home() {
    const [user, setUser] = useContext(AuthContext);

    const signout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Signed In</h1>
            <button onClick={() => console.log(user.email)}>View User</button>
            <button onClick={signout}>Sign Out</button>
        </div>
    );
}
