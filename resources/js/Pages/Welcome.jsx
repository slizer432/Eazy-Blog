import HeroSection from "@/Components/HeroSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const user = auth.user;
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Eazy Blog" />
                <HeroSection />
            </AuthenticatedLayout>
        </>
    );
}
