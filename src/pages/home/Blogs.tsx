// src/components/Blogs.tsx
import React from 'react';
import InfiniteMovingBlogs from '../../components/ux/InfiniteMovingBlogs';
import swirl3 from '../../assets/swirl3.svg';

const blogItems = [
  { title: 'Blog 1', content: 'Summary of Blog 1', link: '#' },
  { title: 'Blog 2', content: 'Summary of Blog 2', link: '#' },
  { title: 'Blog 3', content: 'Summary of Blog 3', link: '#' },
  { title: 'Blog 4', content: 'Summary of Blog 4', link: '#' },
  // Add more blog items as needed
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="bg-primary text-accent py-16 mb-16 min-h-[300px]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 tsukimi-rounded-medium">Blogs</h2>
        <img src={swirl3} alt="Swirl" className="mx-auto w-24 h-auto mb-16" />
        <InfiniteMovingBlogs items={blogItems} />
      </div>
    </section>
  );
};

export default Blogs;
