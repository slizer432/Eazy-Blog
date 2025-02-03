import Navbar from "@/Components/Navbar";
import { Link, usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    return (
        <div className="min-h-screen bg-slate-50 relative mx-auto w-full max-w-screen-2xl">
            <Navbar data={user} />

            {/* {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )} */}

            <main>{children}</main>
        </div>
    );
}
