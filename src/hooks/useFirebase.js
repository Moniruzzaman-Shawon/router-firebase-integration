
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }

    // return [user, setUser];
    return {
        user,
        signInWithGoogle
    }
}
export default useFirebase;