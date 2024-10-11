"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Heart } from 'lucide-react';

const collections = [
  { id: 1, name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 2, name: "Necklaces", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 3, name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 4, name: "Bracelets", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
  { id: 5, name: "Watches", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" },
  { id: 6, name: "Accessories", image: "https://images.unsplash.com/photo-1635767798638-3665a127f9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" },
];

export default function CollectionsPage() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="min-h-screen bg-white font-serif">
      <nav className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            LUXEGEMS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/collections" className="text-gray-900 hover:text-gray-700 transition-colors text-sm uppercase tracking-widest">Collections</Link>
            <Link href="/story" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Story</Link>
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
          Our Collections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="relative overflow-hidden group"
              onMouseEnter={() => setHoveredItem(collection.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${hoveredItem === collection.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center">
                  <h2 className="text-3xl font-light text-white mb-4">{collection.name}</h2>
                  <Button className="bg-white text-gray-900 font-light rounded-none hover:bg-gray-100 transition-all uppercase text-sm tracking-widest px-6 py-2">
                    View Collection
                  </Button>
                </div>
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