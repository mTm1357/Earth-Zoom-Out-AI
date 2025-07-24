import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Blog - Earth Zoom Out AI | AI Video Generation Tips & Tutorials",
  description: "Learn how to create stunning earth zoom out effects with AI. Tips, tutorials, and insights about AI video generation technology.",
  robots: "index, follow",
};

const blogPosts = [
  {
    id: 'how-to-create-earth-zoom-effects',
    title: 'How to Create Stunning Earth Zoom Out Effects with AI',
    excerpt: 'Learn the step-by-step process of creating cinematic earth zoom out videos using artificial intelligence. From image selection to final rendering.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Tutorial',
    image: '/blog/earth-zoom-tutorial.jpg'
  },
  {
    id: 'best-images-for-zoom-effects',
    title: 'Best Types of Images for Earth Zoom Out Effects',
    excerpt: 'Discover which types of photos work best for creating dramatic earth zoom out effects. Tips on composition, lighting, and subject matter.',
    date: '2025-01-12',
    readTime: '4 min read',
    category: 'Tips',
    image: '/blog/best-images.jpg'
  },
  {
    id: 'ai-video-generation-future',
    title: 'The Future of AI Video Generation Technology',
    excerpt: 'Explore the latest developments in AI-powered video creation and what the future holds for automated content generation.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Technology',
    image: '/blog/ai-future.jpg'
  },
  {
    id: 'social-media-video-tips',
    title: 'Creating Viral Social Media Videos with Earth Zoom Effects',
    excerpt: 'Learn how to optimize your earth zoom out videos for maximum engagement on social media platforms like TikTok, Instagram, and YouTube.',
    date: '2025-01-08',
    readTime: '4 min read',
    category: 'Social Media',
    image: '/blog/social-media.jpg'
  },
  {
    id: 'video-quality-settings',
    title: 'Understanding Video Quality Settings for Best Results',
    excerpt: 'A comprehensive guide to choosing the right quality settings for your earth zoom out videos. 4K vs 1080p, frame rates, and compression.',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'Technical',
    image: '/blog/video-quality.jpg'
  },
  {
    id: 'creative-applications',
    title: '10 Creative Applications for Earth Zoom Out Effects',
    excerpt: 'Discover innovative ways to use earth zoom out effects in your projects. From marketing videos to educational content and artistic expression.',
    date: '2025-01-03',
    readTime: '7 min read',
    category: 'Creative',
    image: '/blog/creative-apps.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Earth Zoom Out AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover tips, tutorials, and insights about creating stunning earth zoom out effects with AI. 
              Learn from experts and master the art of AI video generation.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-400 ml-4 text-sm">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-300">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-400 text-sm">{blogPosts[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-blue-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="text-gray-400 text-sm">
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest tips, tutorials, and insights about AI video generation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
