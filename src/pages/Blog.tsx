import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Science Behind Mindful Eating",
      excerpt: "Discover how practicing mindful eating can transform your relationship with food and improve your overall health.",
      image: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Nutrition Tips"
    },
    {
      id: 2,
      title: "Understanding Macronutrients",
      excerpt: "A comprehensive guide to proteins, carbohydrates, and fats - and why each is crucial for your health.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Education"
    },
    {
      id: 3,
      title: "Meal Prep Strategies for Busy Professionals",
      excerpt: "Learn effective meal preparation techniques that save time while maintaining nutritional value.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Meal Planning"
    },
    {
      id: 4,
      title: "The Role of Nutrition in Mental Health",
      excerpt: "Exploring the connection between diet and mental wellbeing, backed by recent research.",
      image: "https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Mental Health"
    },
    {
      id: 5,
      title: "Sustainable Eating: Good for You and the Planet",
      excerpt: "How to make environmentally conscious food choices without compromising nutrition.",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 6,
      title: "Sports Nutrition: Fueling Performance",
      excerpt: "Essential nutrition strategies for athletes and active individuals to optimize performance.",
      image: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Poojitha",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Sports Nutrition"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Nutrition Insights & Wellness Tips
            </h1>
            <p className="text-lg text-gray-600">
              Expert advice, latest research, and practical tips for a healthier lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-100 text-primary-600 text-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;