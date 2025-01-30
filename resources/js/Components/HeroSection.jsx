import { Link } from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";

const HeroSection = () => {
    return (
        <div className="relative h-[580px] bg-hero-pattern bg-cover bg-center w-full">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative text-white p-4 h-full max-w-lg sm:max-w-2xl flex flex-col justify-center gap-5 sm:pl-14">
                <p className="text-lg font-semibold">Featured Post</p>
                <h1 className="text-4xl sm:text-6xl font-bold">
                    How AI will Change the Future
                </h1>
                <p className="text-md sm:text-lg">
                    The future of AI will see home robots having enhanced
                    intelligence, increased capabilities, and becoming more
                    personal and possibly cute. For example, home robots will
                    overcome navigation, direction
                </p>
                <Link href={"#"} className="font-bold font-raleway">
                    <SecondaryButton className="w-max px-5 py-3 font-bold font-raleway mt-5 text-sm text-neutral-800">
                        Read More
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
