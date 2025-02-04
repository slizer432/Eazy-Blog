import PrimaryButton from "@/Components/PrimaryButton";

const BlogLayout = ({ children, title = null }) => {
    return (
        <>
            {title && (
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                    <PrimaryButton className="w-max text-center font-roboto font-bold">
                        View All
                    </PrimaryButton>
                </div>
            )}
            <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                {children}
            </div>
        </>
    );
};

export default BlogLayout;
