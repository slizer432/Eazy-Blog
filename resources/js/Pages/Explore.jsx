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
import { Clock, MessageSquare, User, User2 } from "lucide-react";

export default function Explore() {
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
                <Head title="Explore Page" />
                <div className="p-5 md:p-10 lg:p-20 flex flex-col gap-4 sm:gap-8">
                    <p className="text-center text-sm sm:text-base md:text-lg font-semibold">
                        Explore Article
                    </p>
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
                        Find our all article from here
                    </h1>
                    <p className="text-center text-sm sm:text-base md:text-lg font-medium mx-auto max-w-3xl">
                        Explore a wide range of articles on our website,
                        covering diverse topics to inform, inspire, and engage
                        your curiosity
                    </p>
                    <div className="flex items-center gap-3 sm:gap-5 overflow-auto mt-5 sm:mt-0">
                        <div className="flex items-center gap-2 border rounded-full border-gray-700 pl-3">
                            <Clock className="size-4 sm:size-6" />
                            <select className="bg-transparent outline-none border-none focus:ring-0 pr-7 pl-0 text-sm sm:pr-8">
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 border rounded-full border-gray-700 pl-3">
                            <MessageSquare className="size-4 sm:size-6" />
                            <select className="bg-transparent outline-none border-none focus:ring-0 pr-7 pl-0 text-sm sm:pr-8">
                                <option value="tech">Tech</option>
                                <option value="lifestyle">Lifestyle</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 border rounded-full border-gray-700 pl-3">
                            <User2 className="size-4 sm:size-6" />
                            <select className="bg-transparent outline-none border-none focus:ring-0 pr-7 pl-0 text-sm sm:pr-8">
                                <option value="john">John Doe</option>
                                <option value="jane">Jane Smith</option>
                            </select>
                        </div>
                    </div>
                    <BlogLayout>
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
                        <BlogCard data={data} />
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
