'use client';

import {
    browserLocalPersistence,
    GoogleAuthProvider,
    setPersistence,
    signInWithPopup
} from "firebase/auth";
import {auth} from "@/firebaseConfig";

export default function LoginBtn() {
    const handleClick = async () => {
        try {
            await setPersistence(auth, browserLocalPersistence);
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider)

            if (userCredential) {
                const user = userCredential.user;
                console.log(user)
            }
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <button
            className="text-xs text-blue-600 hover:bg-blue-200 hover:transition-colors hover:duration-150 hover:ease-in-out  px-4 py-2 rounded-lg focus:border-2 focus:border-blue-600"
            onClick={handleClick}
        >
            Login
        </button>
    );
}