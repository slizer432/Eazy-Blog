import ApplicationLogo from "./ApplicationLogo";
import TextInput from "./TextInput";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { useState, useRef } from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = ({ data }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchInputRef = useRef(null);

    const toggleSearch = () => {
        const isMobile = window.matchMedia("(max-width: 640px)").matches;
        if (isMobile) {
            setShowSearch((prev) => !prev);
            if (!showSearch) {
                setTimeout(() => searchInputRef.current?.focus(), 200);
            }
        }
    };

    return (
        <>
            <nav className="border-b bg-white px-5 py-3 w-full sticky top-0 z-10">
                <div className="flex items-center gap-5 justify-between">
                    <ApplicationLogo className="block w-auto fill-current text-gray-800 font-extrabold text-xl" />
                    <div className="flex items-center gap-2 md:gap-5 w-full max-w-sm md:max-w-3xl justify-end">
                        <label
                            className="relative w-full sm:max-w-sm rounded-xl flex justify-end"
                            htmlFor="search"
                        >
                            <i
                                className="cursor-pointer h-full sm:h-max sm:absolute sm:z-10 sm:bottom-[20px] sm:left-3 fa-solid fa-magnifying-glass fa-lg"
                                onClick={toggleSearch}
                            ></i>

                            <div
                                className={`fixed sm:static left-1/2 -translate-x-1/2 sm:-left-1/2  sm:translate-x-0 top-[65px] transition-all duration-300 sm:translate-y-0 sm:opacity-100 sm:scale-100 px-4 py-3 bg-gray-50 border-b sm:border-none sm:bg-transparent sm:p-0 w-full sm:max-w-sm transform ${
                                    showSearch
                                        ? "block translate-y-0 opacity-100 scale-100 "
                                        : "hidden sm:block -translate-y-5 opacity-0 scale-95"
                                }`}
                            >
                                <TextInput
                                    ref={searchInputRef}
                                    id="search"
                                    name="search"
                                    className="sm:pl-9 w-full rounded-lg sm:rounded-xl border outline-none shadow-lg"
                                    autoComplete="search"
                                    placeholder="Search"
                                />
                            </div>
                        </label>
                        <div className="hidden space-x-8 ms-4 md:-my-px md:flex">
                            <NavLink
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </NavLink>
                            <NavLink href={"#explore"}>Explore</NavLink>
                            {data && <NavLink href={"#write"}>Write</NavLink>}
                        </div>
                        {data ? (
                            <>
                                <button>
                                    <i className="fa-regular fa-bell fa-xl sm:fa-lg ms-2"></i>
                                </button>

                                <div className="hidden md:flex md:items-center">
                                    <div className="relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none w-max gap-2"
                                                    >
                                                        <img
                                                            className="object-cover rounded-full size-10"
                                                            src="https://i.pinimg.com/236x/e2/ed/d2/e2edd25dd680e8adf4c7a7a6e49999aa.jpg"
                                                            alt=""
                                                        />
                                                        {data?.name}
                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4 hidden md:block"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            </>
                        ) :  <Link href={route('login')}><PrimaryButton className="w-max rounded-lg hidden sm:block">
                        Login
                    </PrimaryButton></Link>}

                        <div className="-me-2 flex items-center md:hidden">
                            <button
                                onClick={() => {
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    );
                                    setShowSearch(false);
                                }}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " md:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={"#explore"}>
                            Explore
                        </ResponsiveNavLink>
                        {data &&
                        <ResponsiveNavLink href={"#write"}>
                            Write
                        </ResponsiveNavLink>
                        }
                    </div>

                    {data ? 
                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4 flex items-center gap-3">
                            <img
                                className="object-cover rounded-full size-16"
                                src="https://i.pinimg.com/236x/e2/ed/d2/e2edd25dd680e8adf4c7a7a6e49999aa.jpg"
                                alt=""
                            />
                            <div className="">
                                <div className="text-base font-medium text-gray-800">
                                    {data?.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {data?.email}
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                    : 
                    <div className="border-t border-gray-200 pb-1 pt-4">
                         <ResponsiveNavLink
                                href={route("login")}
                                as="button"
                            >
                                Login
                            </ResponsiveNavLink>
                    </div>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;
