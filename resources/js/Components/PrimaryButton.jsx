export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center gap-3 rounded-md border border-transparent bg-gray-800 px-6 py-3 text-sm font-raleway tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
