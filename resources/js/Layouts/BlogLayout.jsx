import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";

const BlogLayout = ({ children, title = null, type = "AllPost" }) => {
    const [activeButton, setActiveButton] = useState(null);

    const toggleActiveClass = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    return (
        <>
            {title && (
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                    {type === "AllPost" && (
                        <PrimaryButton className="w-max text-center font-semibold">
                            View All
                        </PrimaryButton>
                    )}
                    {type === "MyPost" && (
                        <div className="flex gap-4 overflow-auto">
                            {["Popular", "Most Read", "Newest"].map((btn) => (
                                <PrimaryButton
                                    key={btn}
                                    onClick={() => toggleActiveClass(btn)}
                                    className={
                                        ("w-max text-center font-normal px-4 py-2 rounded-md transition-all",
                                        activeButton === btn
                                            ? "bg-sky-600 text-white"
                                            : "bg-neutral-800 text-gray-100")
                                    }
                                >
                                    {btn}
                                </PrimaryButton>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                {children}
            </div>
        </>
    );
};

export default BlogLayout;
