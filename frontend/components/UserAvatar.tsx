'use client';

import * as Avatar from "@radix-ui/react-avatar";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {transformUserName} from "@/helpers/transformUserName";

export default function UserAvatar() {
    const {user} = useSelector((state: RootState) => state.auth);
    const {_tr, email, displayName} = transformUserName(user?.displayName, user?.email);
    const photoURL = user?.photoURL ? user.photoURL : undefined;

    return (
        <Avatar.Root className="w-8 h-8">
            <Avatar.Image
                src={photoURL}
                className="w-full h-full object-cover select-none cursor-pointer rounded-full"
                alt={displayName ? displayName : email}
                aria-label={displayName ? displayName : email}
                onDragStart={(e) => e.preventDefault()}
            />
            <Avatar.Fallback delayMs={600}
                             className="flex justify-center line-clamp-2 font-bold items-center bg-blue-400 text-white text-base">
                {_tr}
            </Avatar.Fallback>
        </Avatar.Root>
    );
}