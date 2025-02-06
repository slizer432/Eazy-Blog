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

export default function Blog() {
    const data = {
        img: "https://i.pinimg.com/736x/f1/33/64/f13364d58fe0767ea741b6cd11d17d7a.jpg",
        title: "How to Enhance a Game's Appeal Using the Latest VR and AI Technology",
        desc: "Google has long invested in AI, aiming to deliver its advantages to individuals, businesses, and communities. From publishing cutting-edge research and creating useful products to developing tools and resources that empower others, Google remains dedicated to making AI accessible to all.",
        publishDate: "May 1, 2023",
        category: "DEVELOPMENT",
    };

    const detailBlogData = {
        title: "Find our all article from here",
        category: "Development",
        publishDate: "16 January 2025",
        author: "Steph",
        coverImage:
            "https://i.pinimg.com/736x/3a/a6/b1/3aa6b11f72f1f6209e8ed7eecc792766.jpg",
        content: `
            Explore a wide range of articles on our website, covering diverse topics to inform, inspire, and engage your curiosity.

            In this blog, you will discover various insights and expert opinions about the latest trends in technology, including artificial intelligence, virtual reality, and their impact on the gaming industry.

            We dive deep into how advancements in AI are transforming game development, enhancing user experience, and opening new possibilities for immersive storytelling. Whether you're a developer, a gaming enthusiast, or simply curious about the future of technology, this article provides valuable insights.

            Keep reading to learn more about how the fusion of AI and VR is reshaping the way we interact with digital worlds.

            More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs.

            Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier.

            In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email.

            From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.
            `,
    };

    return (
        <AuthenticatedLayout>
            <Head title="Explore Page" />
            <div className="p-5 md:p-10 lg:p-16 flex flex-col gap-3 sm:gap-7 w-full max-w-6xl mx-auto">
                <div className="flex items-center gap-3 sm:gap-5">
                    <p className="text-sm sm:text-base md:text-lg font-bold uppercase">
                        {detailBlogData.category}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 font-roboto">
                        {detailBlogData.publishDate}
                    </p>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {detailBlogData.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 font-roboto -mt-5 mb-4">
                    Written by {detailBlogData.author}
                </p>
                <img
                    className="w-full h-full max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-xl"
                    src={detailBlogData.coverImage}
                    alt={detailBlogData.title}
                />
                <p className="text-sm sm:text-base md:text-lg font-medium mt-5 whitespace-pre-wrap">
                    {detailBlogData.content}
                </p>
            </div>
            <div className="flex flex-col gap-10 p-5 lg:p-14">
                <BlogLayout title="Popular Post">
                    <BlogCard data={data} />
                    <BlogCard data={data} />
                    <BlogCard data={data} />
                </BlogLayout>
            </div>
            <Jumbotron />
            <Footer />
        </AuthenticatedLayout>
    );
}
