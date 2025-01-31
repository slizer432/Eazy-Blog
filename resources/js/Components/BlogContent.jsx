import { Link } from "@inertiajs/react";

const BlogContent = ({ typeContent = "card", data }) => {
    const isFeature = typeContent === "feature";

    return (
        <div
            className={`h-max w-full flex flex-col gap-2 sm:gap-4 p-2 ${
                isFeature ? "lg:p-7 md:max-w-xl" : ""
            }`}
        >
            <span className="flex items-center gap-3">
                <p
                    className={`text-xs uppercase font-bold ${
                        isFeature ? "md:text-sm" : ""
                    }`}
                >
                    {data?.category}
                </p>
                <p
                    className={`text-xs font-medium text-gray-500 ${
                        isFeature ? "md:text-sm" : ""
                    }`}
                >
                    {data?.publishDate}
                </p>
            </span>
            <h1
                className={`w-[95%] font-bold ${
                    isFeature
                        ? "text-lg sm:text-xl md:text-2xl"
                        : "text-base md:text-lg"
                }`}
            >
                {data?.title}
            </h1>
            <p className="text-gray-600 w-[95%] text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                {data?.desc}
            </p>
            <Link
                href={"#"}
                className="font-medium text-sm font-raleway w-max underline mt-5"
            >
                Read More
            </Link>
        </div>
    );
};

export default BlogContent;
