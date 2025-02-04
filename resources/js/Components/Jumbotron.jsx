import { Link } from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";

const Jumbotron = () => {
    return (
        <div className="relative py-16 sm:py-20 bg-jumbotron-pattern bg-cover bg-center w-full">
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative text-white p-4 h-full max-w-lg sm:max-w-xl flex flex-col items-center justify-center gap-5 mx-auto">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                    Get weekly update notifications sent directly to your
                    messages
                </h1>
                <form action="" method="post" className="flex gap-2 ">
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="block w-full text-neutral-900"
                        isFocused={true}
                    />
                    <SecondaryButton className="w-max px-5 py-3 font-bold font-raleway text-sm text-slate-50 !bg-transparent whitespace-nowrap">
                        Get Started
                    </SecondaryButton>
                </form>
                <p className="text-sm sm:text-base text-center">
                    Get a response tomorrow if you submit by 9pm today. If we
                    received after 9pm will get a reponse the following day.
                </p>
            </div>
        </div>
    );
};

export default Jumbotron;
