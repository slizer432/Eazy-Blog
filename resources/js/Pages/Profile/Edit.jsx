import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/Footer";
import BlogLayout from "@/Layouts/BlogLayout";
import BlogCard from "@/Components/BlogCard";

const EditProfile = ({ mustVerifyEmail, status }) => {
    return (
        <div className="p-5 md:p-10 lg:p-16 flex flex-col gap-3 sm:gap-7 w-full max-w-7xl mx-auto">
            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </div>

            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                <DeleteUserForm className="max-w-xl" />
            </div>
        </div>
    );
};

const ProfileSection = ({ setIsEditProfile }) => {
    const data = {
        img: "https://i.pinimg.com/736x/f1/33/64/f13364d58fe0767ea741b6cd11d17d7a.jpg",
        title: "How to Enhance a Game's Appeal Using the Latest VR and AI Technology",
        desc: "Google has long invested in AI, aiming to deliver its advantages to individuals, businesses, and communities. From publishing cutting-edge research and creating useful products to developing tools and resources that empower others, Google remains dedicated to making AI accessible to all.",
        publishDate: "May 1, 2023",
        category: "DEVELOPMENT",
    };

    return (
        <div className="p-5 md:p-10 lg:p-12 flex flex-col gap-3 sm:gap-7 w-full max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold sm:ml-5 md:ml-10">
                My Profile
            </h1>
            <div className="rounded-lg border shadow overflow-hidden">
                <div className="w-full h-44 bg-neutral-800">
                    <img
                        src="https://i.pinimg.com/736x/3a/a6/b1/3aa6b11f72f1f6209e8ed7eecc792766.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full p-5 bg-slate-50 max-w-5xl mx-auto">
                    <div className="flex sm:items-center gap-3 flex-col sm:flex-row justify-between">
                        <div className="size-20 md:size-24 lg:size-32 rounded-full overflow-hidden flex-shrink-0 mr-3 -mt-16">
                            <img
                                src="https://i.pinimg.com/736x/3a/a6/b1/3aa6b11f72f1f6209e8ed7eecc792766.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="min-w-max sm:w-full">
                            <h1 className="text-2xl font-bold">Aziz</h1>
                            <p className="text-sm">
                                Turu is the best thing in the world
                            </p>{" "}
                        </div>
                        <PrimaryButton
                            className="w-max whitespace-nowrap text-center font-medium"
                            onClick={() => setIsEditProfile(true)}
                        >
                            Edit Profile
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="p-3 pt-6 sm:p-10 shadow rounded-lg flex flex-col gap-3 sm:gap-7">
                <BlogLayout title="My Post" type="MyPost">
                    <BlogCard data={data} />
                    <BlogCard data={data} />
                    <BlogCard data={data} />
                </BlogLayout>
            </div>
        </div>
    );
};

export default function Edit({ mustVerifyEmail, status }) {
    const [isEditProfile, setIsEditProfile] = useState(false);

    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="py-6">
                {isEditProfile ? (
                    <EditProfile
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                ) : (
                    <ProfileSection setIsEditProfile={setIsEditProfile} />
                )}
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
