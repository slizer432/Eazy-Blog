import BlogContent from "./BlogContent";

const BlogCard = () => {
    return (
        <div className="w-full sm:max-w-lg flex items-center relative flex-col gap-4">
            <img
                src="https://i.pinimg.com/736x/f1/33/64/f13364d58fe0767ea741b6cd11d17d7a.jpg"
                className="w-full h-full object-cover rounded-xl max-h-72"
                alt=""
            />
            <BlogContent />
        </div>
    );
};

export default BlogCard;
