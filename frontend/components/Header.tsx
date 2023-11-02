import LoginBtn from "@/components/LoginBtn";

export default function Header() {
    return (
        <header className="absolute inset-0 flex flex-1 px-4 items-center justify-between z-50 h-12 shadow-md shadow-gray-400">
            <h2 className="text-gray-600 font-semibold">Treatment support</h2>
            <LoginBtn/>
        </header>
    );
}