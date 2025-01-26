import FeaturedSection from "@/Components/FeaturedSection";
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
                <div className="p-5 md:p-10 lg:p-20 flex flex-col gap-10 ">
                    <FeaturedSection/>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
