import BlogCard from "@/Components/BlogCard";
import BlogContent from "@/Components/BlogContent";
import FeaturedSection from "@/Components/FeaturedSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Jumbotron from "@/Components/Jumbotron";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BlogLayout from "@/Layouts/BlogLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const user = auth.user;
    const data = {
        img: "https://i.pinimg.com/736x/f1/33/64/f13364d58fe0767ea741b6cd11d17d7a.jpg",
        title: "How to Enhance a Game's Appeal Using the Latest VR and AI Technology",
        desc: "Google has long invested in AI, aiming to deliver its advantages to individuals, businesses, and communities. From publishing cutting-edge research and creating useful products to developing tools and resources that empower others, Google remains dedicated to making AI accessible to all.",
        publishDate: "May 1, 2023",
        category: "DEVELOPMENT",
    };

    return (
        <>
            <AuthenticatedLayout>
                <Head title="Eazy Blog" />
                <HeroSection />
                <div className="p-5 md:p-10 lg:p-20 flex flex-col gap-10">
                    <FeaturedSection />
                    <BlogLayout title="Our Recent Post">
                        {/* featured post */}
                        <div className="w-full h-max md:h-[450px] col-span-1 sm:col-span-2 lg:col-span-3 bg-white flex flex-col md:flex-row gap-5 items-center rounded-xl">
                            <div className="w-full md:max-w-xl h-full">
                                <img
                                    src="https://i.pinimg.com/736x/99/49/1a/99491a72b7fc7f54507a35b25a32b2af.jpg"
                                    className="w-full h-full object-cover rounded-xl"
                                    alt=""
                                />
                            </div>
                            <BlogContent typeContent="feature" data={data} />
                        </div>
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                    </BlogLayout>
                    <BlogLayout title="Popular Post">
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                    </BlogLayout>
                </div>
                <Jumbotron />
                <Footer />
            </AuthenticatedLayout>
        </>
    );
}
