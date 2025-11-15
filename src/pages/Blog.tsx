import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
