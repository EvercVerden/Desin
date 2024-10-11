"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Menu, Heart, Diamond, Package, Phone, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const featuredJewelry = [
  { id: 1, title: "Diamond Eternity Ring", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", price: 1999, category: "Rings" },
  { id: 2, title: "Sapphire Pendant Necklace", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", price: 899, category: "Necklaces" },
  { id: 3, title: "Emerald Cut Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", price: 1299, category: "Earrings" },
  { id: 4, title: "Pearl Bracelet", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", price: 599, category: "Bracelets" },
];

const carouselItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Timeless Elegance", description: "Discover our exquisite collection of fine jewelry" },
  { id: 2, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Sparkle & Shine", description: "Adorn yourself with our dazzling gemstones" },
  { id: 3, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Crafted with Love", description: "Each piece tells a unique story of artistry" },
];

const stats = [
  { id: 1, name: "Unique Designs", value: 5000 },
  { id: 2, name: "Happy Customers", value: 100000 },
  { id: 3, name: "Years of Excellence", value: 50 },
  { id: 4, name: "Stores Worldwide", value: 100 },
];

const faqs = [
  { id: 1, question: "What is your return policy?", answer: "We offer a 30-day return policy on all our jewelry items. If you're not completely satisfied, you can return the item for a full refund or exchange." },
  { id: 2, question: "Do you offer custom designs?", answer: "Yes, we offer custom design services. Our expert jewelers can work with you to create a unique piece that matches your vision and style." },
  { id: 3, question: "How do I care for my jewelry?", answer: "We recommend storing your jewelry in a cool, dry place and cleaning it regularly with a soft cloth. For specific care instructions, please refer to the product details or contact our customer service." },
  { id: 4, question: "Do you offer international shipping?", answer: "Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary depending on the destination. Please check our shipping policy for more details." },
];

export default function LuxuryJewelryHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
      }
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    }
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      setAnimatedStats(prevStats => 
        prevStats.map((stat, index) => {
          const progress = currentStep / steps;
          return Math.round(progress * stats[index].value);
        })
      );

      currentStep++;

      if (currentStep > steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white font-serif">
      <nav className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            LUXEGEMS
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Collections</Link>
            <Link href="/story" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Story</Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">Custom Design</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-widest">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
              <Menu className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative h-[80vh] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-4">
                <h2 className="text-5xl md:text-7xl font-light mb-4 animate-fade-in-up">{item.title}</h2>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">{item.description}</p>
                <Button className="bg-white text-gray-900 font-light py-3 px-8 rounded-none text-lg hover:bg-gray-100 transition-all animate-fade-in-up animation-delay-400 uppercase tracking-widest">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="h-8 w-8 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="h-8 w-8 text-gray-800" />
        </button>
      </div>

      <main className="container mx-auto px-4 py-16">
        <section id="stats-section" className="mb-24">
          <h2 className="text-4xl font-light mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">
            Our Legacy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-light mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                  {formatNumber(animatedStats[index])}
                  {stat.name === "Years of Excellence" ? "+" : ""}
                </div>
                <div className="text-gray-600 uppercase tracking-widest text-sm">{stat.name}</div>
              </div>
            ))}
          </div>
        </section>

        <h2 className="text-4xl font-light mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">
          Featured Jewelry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredJewelry.map((jewelry) => (
            <div key={jewelry.id} className="group">
              <div className="relative overflow-hidden">
                <img src={jewelry.image} alt={jewelry.title} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button className="bg-white text-gray-900 font-light rounded-none hover:bg-gray-100 transition-all uppercase text-sm tracking-widest px-6 py-2">
                    Quick View
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-light text-purple-500 uppercase tracking-widest">{jewelry.category}</span>
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
                </div>
                <h3 className="text-lg font-light mb-2 text-gray-800">{jewelry.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="text-lg font-light text-pink-500">${jewelry.price}</span>
                  <Button className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-light rounded-none hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all uppercase text-xs tracking-widest px-4 py-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-light py-3 px-8 rounded-none hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all uppercase text-sm tracking-widest">
            View All Collections
          </Button>
        </div>
      </main>

      <section className="relative py-32 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">Create Your Dream Jewelry</h2>
            <p className="text-xl mb-8 font-light">Work with our expert designers to bring your vision to life with a custom-made piece.</p>
            <Button className="bg-white text-gray-900 font-light py-3 px-8 rounded-none text-lg hover:bg-gray-100 transition-all uppercase tracking-widest">
              Start Custom Design
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-light mb-16 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">
          Why Choose LuxeGems?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white rounded-full p-6 inline-block mb-6">
              <Diamond className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-light mb-4 text-gray-800">Premium Quality</h3>
            <p className="text-gray-600">We use only the finest materials and craftsmanship in all our jewelry pieces.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white rounded-full p-6 inline-block mb-6">
              <Package className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-light mb-4 text-gray-800">Free Shipping</h3>
            <p className="text-gray-600">Enjoy free shipping on all orders over $500, with secure and insured delivery.</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white rounded-full p-6 inline-block mb-6">
              <Phone className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-light mb-4 text-gray-800">Expert Support</h3>
            <p className="text-gray-600">Our jewelry specialists are always ready to assist you with any questions or concerns.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-light mb-16 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="text-left text-lg font-light text-gray-800">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-widest">LUXEGEMS</h3>
              <p className="text-gray-400">Exquisite jewelry for life's precious moments.</p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Care Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4 uppercase tracking-widest">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4 uppercase tracking-widest">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-400 flex-grow" />
                <Button className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white rounded-r-full hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 uppercase tracking-widest">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 LuxeGems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}