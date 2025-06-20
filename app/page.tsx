"use client"

import Link from "next/link"
import { ArrowRight, Zap, Brain, Cog, ChevronRight, Calendar, User, Clock } from "lucide-react"
import { useEffect, useState, useCallback, useMemo, useRef, memo } from "react"
import StarBorder from "./components/StarBorder"
import WhyChooseModeAI from "./components/WhyChooseModeAI"
import Threads from "./components/Threads"

const HomePage = memo(function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentBlog, setCurrentBlog] = useState(0)
  const blogIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Memoize services data to prevent re-renders
  const services = useMemo(
    () => [
      {
        icon: Brain,
        title: "Custom AI Agents",
        description:
          "Intelligent agents tailored to your business needs, designed to think, learn, and grow with your operations.",
        color: "from-neon-pink to-bright-aqua",
      },
      {
        icon: Cog,
        title: "Business Automation",
        description:
          "Streamline your workflows with intelligent automation that enhances human capabilities rather than replacing them.",
        color: "from-vivid-blue to-soft-cyan",
      },
      {
        icon: Zap,
        title: "Digital Transformation",
        description:
          "Complete digital ecosystem transformation with AI-powered solutions that scale with your business growth.",
        color: "from-vivid-green to-soft-green",
      },
    ],
    [],
  )

  // Memoize blog posts data
  const blogPosts = useMemo(
    () => [
      {
        title: "Transform Your Enterprise: How AI Automation Empowers Modern Businesses",
        excerpt:
          "Discover how AI automation revolutionizes business operations, boosts productivity, cuts costs, and scales your business with intelligent workflows.",
        author: "ModeAI Team",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        category: "AI Automation",
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Why Choose ModeAI: Your Partner in Intelligent Business Transformation",
        excerpt:
          "Learn why ModeAI is your trusted partner for AI automation. We optimize workflows, boost productivity, and scale your business with intelligent solutions.",
        author: "ModeAI Team",
        date: "Dec 12, 2024",
        readTime: "6 min read",
        category: "Business Growth",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "From Dusk AI to ModeAI: A New Dawn for Business Efficiency",
        excerpt:
          "Our journey from Dusk AI to ModeAI represents our evolution in automation consultancy, where advanced AI meets practical business needs.",
        author: "ModeAI Team",
        date: "Dec 10, 2024",
        readTime: "5 min read",
        category: "Company Story",
        gradient: "from-green-500 to-teal-500",
      },
    ],
    [],
  )

  // Automatic blog slider
  useEffect(() => {
    if (blogIntervalRef.current) clearInterval(blogIntervalRef.current)
    blogIntervalRef.current = setInterval(() => {
      setCurrentBlog((prev) => (prev + 1) % blogPosts.length)
    }, 3000)
    return () => {
      if (blogIntervalRef.current) clearInterval(blogIntervalRef.current)
    }
  }, [blogPosts.length])

  // Manual navigation resets timer
  const handleBlogNav = useCallback((index: number) => {
    setCurrentBlog(index)
    if (blogIntervalRef.current) {
      clearInterval(blogIntervalRef.current)
      blogIntervalRef.current = setInterval(() => {
        setCurrentBlog((prev) => (prev + 1) % blogPosts.length)
      }, 3000)
    }
  }, [blogPosts.length])

  return (
    <div className="bg-gradient-to-b from-primary-bg via-primary-secondary to-primary-bg">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Threads
            color={[0.4, 0.2, 0.9]}
            amplitude={0.7}
            distance={0.15}
            enableMouseInteraction={true}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Main Heading */}
            <div className="flex justify-center items-center mb-12">
              <h1 className="text-4xl md:text-7xl font-bold font-sora leading-tight gradient-text max-w-5xl text-center">
                Where Every Mode
                <br />
                is Magic
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex justify-center">
              <StarBorder
                as={Link}
                href="/contact"
                className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg whitespace-nowrap"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
      <div className="h-1 w-full bg-gradient-to-r from-primary-secondary to-primary-bg opacity-80" />
      {/* Services Preview */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-8">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-text-muted font-inter max-w-2xl mx-auto mb-12">
              Comprehensive AI solutions designed to transform your business operations and unlock new possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card-strong border border-white/10 rounded-2xl p-8 hover:shadow-card-glow transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-muted font-inter leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <StarBorder
              as={Link}
              href="/services"
              className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center"
            >
              Explore All Services
              <ArrowRight className="ml-2" size={20} />
            </StarBorder>
          </div>
        </div>
      </section>
      <div className="h-1 w-full bg-gradient-to-r from-primary-bg to-primary-secondary opacity-80" />
      {/* About Us Preview */}
      <WhyChooseModeAI />
      {/* Blog Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,134,209,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-text-primary mb-8">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-lg text-text-muted font-inter max-w-2xl mx-auto mb-12">
              Stay ahead with our latest thoughts on AI, automation, and digital transformation trends.
            </p>
          </div>

          {/* Blog Carousel */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentBlog * 100}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="glass-card-strong border border-white/10 rounded-3xl p-4 sm:p-8 mx-2 sm:mx-4">
                      <div className="flex flex-col gap-6 sm:gap-8">
                        {/* Blog Content */}
                        <div className="text-left">
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${post.gradient} text-white`}
                            >
                              {post.category}
                            </span>
                            <div className="flex flex-wrap items-center text-text-muted text-sm gap-3 sm:gap-4">
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold font-sora text-text-primary mb-3 sm:mb-4">{post.title}</h3>
                          <p className="text-sm sm:text-base text-text-muted font-inter mb-4 sm:mb-6">{post.excerpt}</p>
                          <Link
                            href={`/blog/${index + 1}`}
                            className="inline-flex items-center text-accent-purple font-semibold font-poppins hover:text-accent-hover transition-colors duration-300"
                          >
                            Read More
                            <ArrowRight className="ml-2" size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-4">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleBlogNav(index)}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-purple
                    ${index === currentBlog
                      ? "bg-accent-purple border-white shadow-lg scale-125"
                      : "bg-neutral-400 border-white/70"}`}
                  aria-label={`Go to blog post ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <StarBorder
              as={Link}
              href="/blog"
              className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center"
            >
              View All Articles
              <ArrowRight className="ml-2" size={20} />
            </StarBorder>
          </div>
        </div>
      </section>
      <div className="h-1 w-full bg-gradient-to-r from-primary-secondary to-primary-bg opacity-80" />
      {/* Quote Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-sora text-text-primary mb-8">
            Ready to <span className="gradient-text">Automate</span> Your Business?
          </h2>
          <p className="text-xl text-text-muted font-inter mb-8 max-w-2xl mx-auto">
            Join the future of business automation with AI solutions that understand your unique needs.
          </p>
          <StarBorder
            as={Link}
            href="/contact"
            className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300 inline-flex items-center text-lg"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-3" size={24} />
          </StarBorder>
        </div>
      </section>
    </div>
  )
})

export default HomePage
