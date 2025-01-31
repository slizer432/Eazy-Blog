import BlogContent from "./BlogContent";

const BlogCard = ({ data }) => {
    return (
        <div className="w-full sm:max-w-lg flex items-center relative flex-col gap-4">
            <img
                src={data.img}
                className="w-full h-full object-cover rounded-xl max-h-72"
                alt=""
            />
            <BlogContent data={data} />
        </div>
    );
};

export default BlogCard;
