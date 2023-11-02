import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebaseConfig";
import {useEffect} from "react";

interface Props {
    children: React.ReactNode;
}
export default function AuthLayout({children}: Props) {
    useEffect(() => {
        onAuthStateChanged(auth, (user)=> {
            if (user) {
                const currentUser = auth.currentUser;
                console.log(currentUser);
            }
        });
    }, []);
    return (
        <>
            {children}
        </>
    );
}