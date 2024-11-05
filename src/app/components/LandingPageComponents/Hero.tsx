'use client';

import React from 'react';
import DotPatternBackground from '../DotPatternBackground';
import DashboardSection from './DashboardImage';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-foreground text-black py-20">
      {/* Background Component */}
      <DotPatternBackground />

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
       <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5e24ea] to-[#aa88ec] bg-clip-text text-transparent">
  Sounds like a human, performs like an AI
</h1>

          <p className="text-lg mb-8">
            Downsize your staff and increase your reach at the click of a button. Make thousands of calls, book more appointments, and never miss a lead again with your very own no code 24/7 human AI agent.
          </p>
          <div className="space-x-4">
          <button className="py-2 px-4 rounded-3xl text-[#5e24ea] border border-[#5e24ea]">

              Learn More
            </button>
            <button className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-[#f0f0f0] py-2 px-4 rounded-3xl hover:bg-gradient-to-l">

              Try for Free
            </button>
          </div>
        </div>
      </div>
      <DashboardSection />
    </section>
    
  );
};

export default Hero;
