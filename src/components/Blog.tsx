import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Digital Marketing: AI and Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing the digital marketing landscape and what it means for businesses in 2024.",
      content: `
        Artificial Intelligence (AI) is transforming the digital marketing landscape at an unprecedented pace. From chatbots handling customer service to predictive analytics guiding campaign strategies, AI is becoming an indispensable tool for marketers worldwide.

        **Key Trends to Watch:**

        1. **Personalization at Scale**: AI algorithms can now analyze user behavior patterns to deliver hyper-personalized content experiences.

        2. **Automated Content Creation**: Tools powered by generative AI are assisting in creating blog posts, social media content, and even video scripts.

        3. **Predictive Analytics**: Machine learning models can forecast campaign performance and optimize ad spend automatically.

        As we move forward, marketers who embrace AI technologies will have a significant competitive advantage in reaching and engaging their target audiences effectively.
      `,
      author: "Darwesh",
      date: "2024-11-15",
      readTime: "5 min read",
      category: "Digital Marketing",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Building Effective Social Media Strategies",
      excerpt: "A comprehensive guide to creating social media strategies that drive engagement and convert followers into customers.",
      content: `
        Social media is no longer just about posting content—it's about building communities and driving meaningful interactions that lead to business growth.

        **Strategy Components:**

        1. **Audience Research**: Understand who your target audience is, what platforms they use, and what content resonates with them.

        2. **Content Calendar**: Plan your content ahead of time to maintain consistency and relevancy across platforms.

        3. **Engagement Tactics**: Develop strategies for responding to comments, running polls, and fostering community discussions.

        4. **Analytics and Optimization**: Use platform analytics to measure performance and refine your approach continuously.

        Success on social media requires a balance of creativity, consistency, and data-driven decision making.
      `,
      author: "Darwesh",
      date: "2024-11-10",
      readTime: "7 min read",
      category: "Social Media",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "SEO Best Practices for 2024",
      excerpt: "Stay ahead of the curve with the latest SEO techniques and strategies that will improve your search rankings.",
      content: `
        Search Engine Optimization (SEO) continues to evolve as search algorithms become more sophisticated. Staying current with best practices is crucial for maintaining and improving search rankings.

        **Current Best Practices:**

        1. **Mobile-First Indexing**: Ensure your website is optimized for mobile devices, as this is now the default approach for Google.

        2. **Core Web Vitals**: Focus on improving page load speed, interactivity, and visual stability metrics.

        3. **E-A-T Principles**: Demonstrate Expertise, Authoritativeness, and Trustworthiness through high-quality content and proper attribution.

        4. **User Experience**: Prioritize user intent and provide valuable, relevant content that answers search queries effectively.

        Implementing these practices will help your website perform better in search results and attract more qualified traffic.
      `,
      author: "Darwesh",
      date: "2024-11-05",
      readTime: "6 min read",
      category: "SEO",
      image: "/placeholder.svg"
    }
  ];

  // Generate structured data for blog posts
  const generateBlogSchema = () => {
    if (selectedPost) {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedPost.title,
        "description": selectedPost.excerpt,
        "image": selectedPost.image !== "/placeholder.svg" ? selectedPost.image : "https://clikxo.com/placeholder.svg",
        "author": {
          "@type": "Person",
          "name": selectedPost.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "ClikXo",
          "logo": {
            "@type": "ImageObject",
            "url": "https://clikxo.com/logo.png"
          }
        },
        "datePublished": selectedPost.date,
        "dateModified": selectedPost.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://clikxo.com/blog/${selectedPost.id}`
        },
        "articleSection": selectedPost.category,
        "wordCount": selectedPost.content.split(' ').length,
        "timeRequired": `PT${selectedPost.readTime.split(' ')[0]}M`
      };
    }

    // Schema for blog listing page
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "ClikXo Blog",
      "description": "Stay updated with the latest insights, trends, and strategies in digital marketing and technology.",
      "url": "https://clikxo.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "ClikXo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://clikxo.com/logo.png"
        }
      },
      "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://clikxo.com/blog/${post.id}`,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "articleSection": post.category
      }))
    };
  };

  const categories = ["All", "Digital Marketing", "SEO", "Social Media"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBlogSchema())}
        </script>
        {selectedPost && (
          <title>{selectedPost.title} | ClikXo Blog</title>
        )}
        {!selectedPost && (
          <title>Digital Marketing Blog | Latest Insights & Strategies | ClikXo</title>
        )}
        <meta name="description" content={selectedPost ? selectedPost.excerpt : "Stay updated with the latest insights, trends, and strategies in digital marketing and technology."} />
      </Helmet>
      <section id="blog" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
        {selectedPost ? (
          // Blog Post Detail View
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Blog
            </button>

            <article className="bg-card rounded-2xl overflow-hidden border border-border">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-foreground mb-6">
                  {selectedPost.title}
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>
            </article>
          </div>
        ) : (
          // Blog Posts List View
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Blog</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest insights, trends, and strategies in digital marketing and technology.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found in this category.</p>
              </div>
            )}
          </>
        )}
        </div>
      </section>
    </>
  );
};

export default Blog;
