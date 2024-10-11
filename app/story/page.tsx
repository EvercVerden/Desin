"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "The Legacy of LuxeGems",
    excerpt: "Discover the rich history behind our century-old jewelry craftsmanship.",
    image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "From Earth to Elegance",
    excerpt: "Follow the journey of our ethically sourced gemstones from mine to masterpiece.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "The Art of Custom Design",
    excerpt: "Explore how our master jewelers bring your unique vision to life.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Timeless Love Stories",
    excerpt: "Read heartwarming tales of love and commitment, featuring our cherished customers.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  }
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white font-serif">
      <nav className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            LUXEGEMS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Collections</Link>
            <Link href="/story" className="text-gray-900 hover:text-gray-700 transition-colors text-sm uppercase tracking-widest">Story</Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Custom Design</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">
          Our Story
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story) => (
            <div key={story.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-light mb-2 text-gray-800">{story.title}</h2>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <Button className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-light rounded-none hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all uppercase text-xs tracking-widest px-4 py-2">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-16 mt-24">
        {/* ... (keep the footer content from the homepage) */}
      </footer>
    </div>
  );
}