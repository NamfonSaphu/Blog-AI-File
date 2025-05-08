import { ThemeToggle } from "@/app/theme-toggle";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex items-center justify-between w-full p-10">
            <Link href="/" className="text-xl font-bold">BLOG</Link>
            <ThemeToggle />
        </div>
    );
}
