'use client';
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '#', hasDropdown: true },
    { name: 'How It Works', href: '/howitworks' },
    { name: 'Docs', href: '#' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const featureItems = [
    {
      name: 'AI Done With You',
      titles: [
        'Live Coaching Calls',
        'Build Your Agent',
        'Become an Expert',
      ],
    },
    {
      name: 'AI Done For You',
      titles: [
        'Get Truflow',
        'Increase Sales',
        'All Done For You',
      ],
    },
    {
      name: 'Agency Program',
      titles: [
        'Start Your Journey',
        'Solution Partner',
        'SaaS',
      ],
    },
    {
      name: 'Become an Affiliate Partner',
      titles: [
        'Guide Audiences',
        'Receive Commission',
        'Learn About AI',
      ],
    },
    {
      name: 'Branded Agency',
      titles: [
        'Weekly Support Calls',
        'Onboard Clients',
        '24/7 Slack Support',
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f0f0f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image
                src="/assets/truflow_logo.png"
                alt="AI Agent Logo"
                width={150}
                height={80}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="group">
                <Link href={item.href} className="text-gray-600 hover:text-primary hover:text-[#b66cf7]">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute left-0 right-0 mt-2 w-full max-w-container bg-white shadow-lg rounded-xl overflow-hidden z-50 hidden group-hover:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-6 overflow-x-auto">
                      {featureItems.map((feature) => (
                        <div key={feature.name} className="border border-[#b66cf7] p-4 rounded-xl flex flex-col justify-between hover:bg-[#d9d4dd]">
                          <h3 className="font-semibold text-lg text-center text-[#5d238f] p-2 rounded">
                            {feature.name}
                          </h3>
                          <div className="grid gap-2 mt-2">
                            {feature.titles.map((title) => (
                              <div key={title} className="text-center p-2 rounded-xl bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-white">
                                {title}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Try for Free Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-[#f0f0f0] py-2 px-4 rounded-3xl hover:bg-gradient-to-l">
              Try for Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link href={item.href} className="block px-3 py-2 text-gray-600 hover:text-primary">
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-6 mt-2 space-y-2">
                    {featureItems.map((feature) => (
                      <div key={feature.name} className="space-y-2">
                        <h3 className="font-semibold">{feature.name}</h3>
                        <div className="grid gap-2">
                          {feature.titles.map((title) => (
                            <div key={title} className="bg-gray-100 p-2 rounded">
                              <h4 className="font-medium">{title}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg">
              Try for Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
