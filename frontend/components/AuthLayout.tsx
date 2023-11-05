'use client';

import {useEffect} from "react";

import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebaseConfig";
import {useDispatch} from "react-redux";
import {login} from "@/store/reducers/auth";

interface Props {
    children: React.ReactNode;
}
export default function AuthLayout({children}: Props) {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user)=> {
            if (user) {
                const currentUser = auth.currentUser;
                console.log(currentUser);
                dispatch(login(JSON.stringify(currentUser)));
            }
        });
    }, []);
    return (
        <>
            {children}
        </>
    );
}