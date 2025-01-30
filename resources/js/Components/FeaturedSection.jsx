import { Link } from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";

const FeaturedSection = () => {
    return (
        <div className="h-[500px] sm:h-[600px] w-full max-w-7xl mx-auto border-lg relative">
            <img
                className="w-full h-full max-h-[80%] object-cover rounded-xl "
                src="https://i.pinimg.com/736x/d1/42/70/d142706833361deb1529410f1a564aff.jpg"
                height="500px"
                alt=""
            />
            <div className="absolute bottom-0 right-0 h-max md:h-full md:max-h-80 rounded-xl bg-white w-full max-w-4xl flex flex-col gap-4 p-7">
                <span className="flex items-center gap-3">
                    <p className="text-xs sm:text-sm uppercase font-bold">
                        Development
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        16 January 2025
                    </p>
                </span>
                <h1 className="text-xl sm:text-3xl w-[95%] font-bold">
                    How to Enhance a Game's Appeal Using the Latest VR and AI
                    Technology
                </h1>
                <p className="text-gray-600 w-[95%] text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                    Google has long invested in AI, aiming to deliver its
                    advantages to individuals, businesses, and communities. From
                    publishing cutting-edge research and creating useful
                    products to developing tools and resources that empower
                    others, Google remains dedicated to making AI accessible to
                    all.
                </p>
                <Link href={"#"} className="font-bold font-raleway w-max">
                    <SecondaryButton className="w-max px-5 py-3 font-bold font-raleway mt-5 text-xs sm:text-sm text-neutral-800 border">
                        Read More
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedSection;
