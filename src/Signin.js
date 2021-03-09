import React, { useState, useEffect, useContext } from "react";
import { auth } from "./firebase";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <label>Email</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={signin}>Sign In</button>
        </div>
    );
}
