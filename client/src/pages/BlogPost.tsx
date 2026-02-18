import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import type { BlogPost as BlogPostType } from "@shared/schema";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery<BlogPostType>({
    queryKey: [`/api/blog/${params.slug}`],
  });

  const formatDate = (date: string | Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-primary pt-32 pb-16">
          <div className="container-padding text-center">
            <div className="h-10 bg-white/20 rounded w-2/3 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-white/10 rounded w-1/3 mx-auto animate-pulse" />
          </div>
        </section>
        <section className="py-16">
          <div className="container-padding max-w-3xl mx-auto">
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-primary pt-32 pb-16">
          <div className="container-padding text-center text-white">
            <h1 className="text-4xl font-bold font-display mb-4 text-white">Post Not Found</h1>
          </div>
        </section>
        <section className="py-16 text-center">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary font-semibold hover:underline">
            Back to Blog
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4 text-white max-w-4xl mx-auto"
            data-testid="text-blog-post-title"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-6 text-blue-100"
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-padding max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8" data-testid="link-back-to-blog">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            data-testid="blog-post-content"
          />
        </div>
      </section>
    </div>
  );
}
