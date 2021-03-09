import React, { useState, useEffect, useContext } from "react";
import Signin from "./Signin";
import Home from "./Home";

import { AuthContext } from "./AuthContext";

export default function App() {
    const [user, setUser] = useContext(AuthContext);

    return (
        <div>
            {!user && <Signin />}
            {user && <Home />}
        </div>
    );
}

// const SignUp = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);

//     const signup = async () => {
//         createUserWithEmailAndPassword(email, password);
//     };

//     if (loading) return <h1>Signing up...</h1>;
//     if (user)
//         return (
//             <h1>
//                 Congrats {user.email}, You have successfully signed up, press
//                 this button to redirect back
//             </h1>
//         );
//     else
//         return (
//             <div>
//                 <h1>Sign Up</h1>
//                 <label>Email</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button onClick={signup}>Register</button>
//                 {error && <h3>Error: {error.message}</h3>}
//                 <button onClick={() => console.log(error)}>view error</button>
//             </div>
//         );
// };

// const SignIn = ({ setUser }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);

//     if (user) {
//         setUser(user);
//     }

//     return (
//         <div className="App">
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => signInWithEmailAndPassword(email, password)}>
//                 Sign In
//             </button>
//         </div>
//     );
// };

// export default function App() {
//     const [user, loading, error] = useAuthState(auth);

//     // console.log(user);
//     {
//         user && <h2>Signed In page</h2>;
//     }
//     return (
//         <div>
//             {SignUp()}
//             {SignIn()}
//         </div>
//     );
// }
