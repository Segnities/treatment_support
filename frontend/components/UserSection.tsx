import ActionMenuBtn from "@/components/ActionMenuBtn";
import UserAvatar from "@/components/UserAvatar";

export default function UserSection() {
    return (
        <div className="flex items-center gap-4">
            <ActionMenuBtn/>
            <UserAvatar/>
        </div>
    );
}