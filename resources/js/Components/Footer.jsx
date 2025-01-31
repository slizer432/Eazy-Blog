import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-xl sm:text-2xl font-bold">
                        Eazy Creative
                    </h1>
                    <div className="flex items-center gap-5 sm:gap-10 font-semibold">
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>Blog</Link>
                        <Link href={"#"}>About</Link>
                        <Link href={"#"}>Contact Us</Link>
                    </div>
                    <div className="flex items-center gap-5 sm:gap-10 font-semibold">
                        <Link href={"#"}>
                            <i class="fa-brands fa-facebook fa-2xl"></i>
                        </Link>
                        <Link href={"#"}>
                            <i class="fa-brands fa-instagram fa-2xl"></i>
                        </Link>
                        <Link href={"#"}>
                            <i class="fa-brands fa-x-twitter fa-2xl"></i>
                        </Link>
                        <Link href={"#"}>
                            <i class="fa-brands fa-youtube fa-2xl"></i>
                        </Link>
                    </div>
                    <div className="w-full h-[0.5px] bg-gray-500"></div>
                    <p className="text-sm text-neutral-900 font-semibold">
                        &copy; 2023 Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
