import * as Popover from "@radix-ui/react-popover";
import {LockClosedIcon} from "@radix-ui/react-icons";
import {useDispatch} from "react-redux";
import {signOut as signOutAction} from "@/store/reducers/auth";
import {signOut} from "firebase/auth";
import {auth} from "@/firebaseConfig";

export default function ActionMenuBtn() {
    const dispatch = useDispatch();
    const signOutFromAccount = async ()=> {
        try {
            dispatch(signOutAction());
            await signOut(auth);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button
                        className="w-8 h-8 cursor-pointer flex justify-center items-center border border-gray-400 rounded-full"
                        aria-label="Open menu"
                    >
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"
                                fill="#5F6368"></path>
                        </svg>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                        sideOffset={10}
                        side="bottom"
                        align="end"
                    >
                        <div
                            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            role="button"
                            onClick={signOutFromAccount}
                        >
                            Sign out
                            <div
                                className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <LockClosedIcon className="fill-black"/>
                            </div>
                        </div>
                        <Popover.Arrow className="fill-white"></Popover.Arrow>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}