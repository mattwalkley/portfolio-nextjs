import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Design Systems That Scale',
    excerpt: 'Lessons learned from creating and maintaining design systems for growing teams and products.',
    category: 'Design Systems',
    date: 'December 15, 2024',
    readTime: '8 min read',
    featured: true,
    slug: 'building-design-systems-that-scale'
  },
  {
    id: 2,
    title: 'The Future of Product Design in AI-First Products',
    excerpt: 'How artificial intelligence is reshaping the role of product designers and what skills we need to develop.',
    category: 'AI & Design',
    date: 'December 10, 2024',
    readTime: '6 min read',
    featured: false,
    slug: 'future-of-product-design-ai'
  },
  {
    id: 3,
    title: 'User Research Methods That Actually Work',
    excerpt: 'Practical research methods I\'ve used to uncover insights that drive product decisions.',
    category: 'Research',
    date: 'December 5, 2024',
    readTime: '10 min read',
    featured: false,
    slug: 'user-research-methods-that-work'
  },
  {
    id: 4,
    title: 'Design Leadership in Early-Stage Startups',
    excerpt: 'How to establish design processes and culture when you\'re the first designer on the team.',
    category: 'Leadership',
    date: 'November 28, 2024',
    readTime: '7 min read',
    featured: false,
    slug: 'design-leadership-startups'
  },
  {
    id: 5,
    title: 'The Art of Design Critique',
    excerpt: 'How to give and receive feedback that improves design quality and team collaboration.',
    category: 'Process',
    date: 'November 20, 2024',
    readTime: '5 min read',
    featured: false,
    slug: 'art-of-design-critique'
  },
  {
    id: 6,
    title: 'Measuring Design Impact: Beyond Dribbble Likes',
    excerpt: 'Quantitative and qualitative ways to measure the real impact of design decisions on business outcomes.',
    category: 'Metrics',
    date: 'November 15, 2024',
    readTime: '9 min read',
    featured: false,
    slug: 'measuring-design-impact'
  }
];

const categories = ['All', 'Design Systems', 'AI & Design', 'Research', 'Leadership', 'Process', 'Metrics'];

export default function Writing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section pt-32 pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-black mb-6">
              Writing & Thoughts
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sharing insights on product design, design systems, and building products that people love. 
              My thoughts on the industry, process, and what I'm learning along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section pb-20">
        <div className="container">
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-black text-white p-8 rounded-lg">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-300">{post.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-300">{post.date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-300">{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                <Link href={`/writing/${post.slug}`} className="btn bg-white text-black hover:bg-gray-100">
                  Read Full Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="section pb-20">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black border border-gray-200 hover:border-black rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <Link 
                  href={`/writing/${post.slug}`}
                  className="text-black font-medium hover:underline inline-flex items-center gap-2"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get notified when I publish new articles about product design, design systems, and industry insights.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <button className="btn whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently available for new opportunities. Let's discuss how I can help 
            bring your product vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:hello@example.com" className="btn bg-white text-black hover:bg-gray-100">
              Get in Touch
            </a>
            <Link href="/portfolio" className="text-white font-medium hover:underline">
              View My Work →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
