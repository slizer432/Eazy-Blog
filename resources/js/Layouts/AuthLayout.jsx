import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

const AuthLayout = ({ children, title, description }) => {
    return (
        <div className="flex w-full max-w-5xl min-h-screen mx-auto justify-center border-x-[1px]">
            <div className="flex min-h-screen flex-col items-center w-full max-w-md pt-6 justify-center">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="font-extrabold text-3xl" />
                    </Link>
                </div>
                <div className="text-center mt-8">
                    <h2 className="font-semibold text-3xl">{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-sm sm:rounded-lg">
                    <PrimaryButton className="w-full text-center">
                        Sign in with Google{" "}
                        <i className="fa-brands fa-google fa-xl"></i>
                    </PrimaryButton>
                    <div className="flex items-center gap-5 w-full my-3">
                        <div className="w-full h-[0.5px] bg-gray-500"></div>
                        <p className="font-semibold text-sm">OR</p>
                        <div className="w-full h-[0.5px] bg-gray-500"></div>
                    </div>
                    {children}
                </div>
            </div>
            <div className="w-full p-3 max-h-screen hidden md:block">
                <img
                    src="https://i.pinimg.com/736x/af/23/84/af2384580d0de3f3cee7a10dea53329f.jpg"
                    className="w-full h-full object-cover rounded-xl"
                    alt=""
                />
            </div>
        </div>
    );
};

export default AuthLayout;
