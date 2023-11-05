'use client';

import Link from "next/link";
import {useSelector} from "react-redux";
import type {RootState} from "@/store";
import UserSection from "@/components/UserSection";
import GuestSection from "@/components/GuestSection";

import {ModulzLogoIcon} from "@radix-ui/react-icons";


export default function Header() {
    const {isAuth} = useSelector((state: RootState) => state.auth);
    return (
        <header
            className="flex flex-1 px-4 items-center justify-between z-50 h-12 shadow-md shadow-gray-400">
            <Link href="/">
                <h2 className="text-gray-600 font-semibold flex items-center gap-3">
                    <ModulzLogoIcon/>
                    Treatment support
                </h2>
            </Link>
            {isAuth ? <UserSection/> : <GuestSection/>}
        </header>
    );
}